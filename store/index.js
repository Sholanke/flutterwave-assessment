import Vue from "vue";
import Vuex from "vuex";
import allEvents from "./modules/allEvents";
import singleEvent from "./modules/singleEvent";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    modules: {
      allEvents,
      singleEvent
    }
  });
