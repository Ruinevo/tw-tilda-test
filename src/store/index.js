
import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.module.js';
import common from './modules/common.module.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    common
  },
  state: {
    error: null,
    loading: false
  },
  mutations: {
    setError (state, message) {
      state.error = message;
    },
    setLoading (state, value) {
      state.loading = value;
    }
  },
  strict: debug
});
