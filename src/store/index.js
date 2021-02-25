import Vue from "vue";
import Vuex from "vuex";
import student from "./modules/student";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    student,
  },
});

export default store;
