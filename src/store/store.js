import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

// Default state
const state = {
  tables: [],
  reserved: {
    id: null,
    at: null
  },
  order: {
    ordered_at: null,
    total: 0,
    products: [],
    productsTime: null
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  // TODO: maybe do modules?
  // modules: {
  //     tables,
  //     order
  // }
});