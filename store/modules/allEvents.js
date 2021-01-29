import Vue from "vue";
import Vuex from "vuex";
import getEvents from "../../api/getEvents";

Vue.use(Vuex);

const state = () => ({
  allEvents: {
    data: null,
    pageInfo: {
      totalPages: 1,
      currentPage: 0
    }
  },
  metaData: {}
});

const actions = {
  fetchMoreEvents({ commit }) {
    const callback = ({ data: eventsResponse }) => {
      commit("SET_EVENTS", eventsResponse);
    };
    commit("FETCH_MORE_EVENTS", callback);
  }
};

const mutations = {
  SET_EVENTS(state, eventsResponse) {
    // ----- add new set of events to existing events data -----
    state.allEvents.data = [
      ...(state.allEvents.data || []),
      ...eventsResponse.data.events
    ];
    // ------ upadate page info data -------
    state.allEvents.pageInfo = eventsResponse.data.pageInfo;
  },
  FETCH_MORE_EVENTS(state, resolve) {
    let { totalPages, currentPage } = state.allEvents.pageInfo || {};

    // --- if total and current pages are not equal, make api call to update events ---
    if (totalPages > currentPage) getEvents(currentPage + 1).then(resolve);
    else {
      console.log("LOADED ALL EVENTS");
    }
  }
};

const getters = {
  allEvents: ({ allEvents: { data } }) => {
    return data;
  },
  loadedAllEvents: ({
    allEvents: {
      pageInfo: { totalPages, currentPage }
    }
  }) => {
    return totalPages === currentPage;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
