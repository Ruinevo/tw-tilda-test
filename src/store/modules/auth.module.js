
import { waitForTheAnswer } from '@/utils.js';
import router from '@/router';

const state = {
  user: {}
};

const getters = {
  email: (state) => state.user.email
};

const actions = {
  /** user signup */
  async userSignUp ({ commit }, payload) {
    try {
      commit('setLoading', true, { root: true });
      console.log(waitForTheAnswer);
      await waitForTheAnswer();
      commit('setUser', payload);
      commit('setLoading', false, { root: true });
      router.push('/');
    } catch (e) {
      commit('setError', e.message, { root: true });
      commit('setLoading', false, { root: true });
    }
  },
  async userSignIn ({ commit, dispatch }, payload) {
    /** user auth */
    try {
      commit('setLoading', true, { root: true });
      await waitForTheAnswer();
      commit('setUser', payload);
      commit('setLoading', false, { root: true });
      router.push('/');
    } catch (e) {
      commit('setError', e.message, { root: true })
      commit('setLoading', false, { root: true })
    }
  },
  /** user logout */
  async userSignOut ({ commit }) {
    commit('setUser', {});
    router.push('/signin');
  }
};

const mutations = {
  setUser (state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations
}
