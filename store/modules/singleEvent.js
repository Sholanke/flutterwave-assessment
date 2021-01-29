import Vue from "vue";
import Vuex from "vuex";
import buyTicket from "../../api/buyTicket";
import getSingleEvent from "../../api/getSingleEvent";
import getTicketTypeForEvent from "../../api/getTicketTypeForEvent";
import registerForEvent from "../../api/registerEvent";
import { VAT } from "../../utils/constants";
import { sortTicketsByPrice } from "../../utils/helpers";
import { cartTicketTypeState } from "../../utils/Order";

Vue.use(Vuex);

const state = () => ({
  event: {
    data: null
  },
  ticketTypes: {
    data: null
  },
  cart: {
    formData: {},
    selectedTicketTypes: []
  }
});

const actions = {
  fetchSingleEvent({ commit, dispatch }, singleEventID) {
    // --- fetch a single event and it's ticket types ---
    dispatch("clearSingleEvent");

    getSingleEvent(singleEventID).then(({ data }) => {
      commit("SET_SINGLE_EVENT", data);
    });

    getTicketTypeForEvent(singleEventID).then(({ data }) =>
      commit("SET_TICKET_TYPES", data)
    );
  },
  clearSingleEvent({ commit, dispatch }) {
    // --- clear entire cart and event data ---
    commit("CLEAR_SINGLE_EVENT");
    dispatch("clearCart");
  },
  resetCart({ commit }) {
    // --- set number of tickets selected for all ticket types to 0 ---
    commit("RESET_CART");
  },
  clearCart({ commit }) {
    // --- clear entire cart ---
    commit("CLEAR_CART");
  },
  updateCartTicket({ commit }, options) {
    // ---- update number of tickets for ticket with id options.ticketID -----
    commit("UPDATE_CART_TICKET", options);
  },
  buyTicket({ commit, dispatch }, callback) {
    // --- buy ticket and register user, when done
    callback = callback || console.log;
    commit("BUY_TICKET", () => {
      callback();
      dispatch("resetCart");
    });
  }
};

const mutations = {
  SET_SINGLE_EVENT(state, singleEventResponse) {
    state.event = singleEventResponse;
  },
  SET_TICKET_TYPES(state, ticketTypes) {
    state.ticketTypes = ticketTypes;
    // --- generate cart state from ticket types ---
    state.cart.selectedTicketTypes = ticketTypes.data.map(cartTicketTypeState);
  },
  RESET_CART(state) {
    state.cart.formData = {};
    state.cart.selectedTicketTypes.forEach(ticket => {
      ticket.numberOfTickets = 0;
    });
  },
  CLEAR_CART(state) {
    state.cart.formData = {};
    state.cart.selectedTicketTypes = [];
  },
  CLEAR_SINGLE_EVENT(state) {
    state.event = { data: null };
    state.ticketTypes = { data: null };
    state.cart.selectedTicketTypes = [];
    state.cart.formData = {};
  },
  UPDATE_CART_TICKET(state, { ticketID, updateFunction }) {
    state.cart.selectedTicketTypes.forEach(ticket => {
      ticketID === ticket.id &&
        (ticket.numberOfTickets = updateFunction(ticket.numberOfTickets));
    });
  },
  BUY_TICKET(state, callback) {
    // --- incase there is no callback specified ---
    callback = callback || console.log;
    const { phone, email, name } = state.cart.formData;
    const userData = { phone, email, name };
    const body = {
      ...userData,
      event: state.event,
      value_added_tax: VAT,
      tickets_bought: state.cart.selectedTicketTypes
    };
    // --- call buy ticket api ---
    buyTicket({
      body,
      resolve() {
        // --- register user for event after successful payment ---
        registerForEvent({
          body: userData,
          eventID: body.event.data.id
        }).then(() => {
          alert(
            `You have registered for ${body.event.data.name} at ${body.event.data.venue}`
          );
          callback();
        });
      }
    });
  }
};

const getters = {
  singleEvent({ event: { data } }) {
    return data;
  },
  ticketTypes({ ticketTypes: { data } }) {
    return sortTicketsByPrice(data || []);
  },
  cartTicketTypes({ cart: { selectedTicketTypes: data } }) {
    return sortTicketsByPrice(data || []);
  },
  cartFormData({ cart: { formData } }) {
    return formData;
  },
  cartHasItems({ cart: { selectedTicketTypes: data } }) {
    return !!data.find(ticket => ticket.numberOfTickets);
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
