
const state = {
  pages: []
};

const actions = {

};

const mutations = {
  setPage (state, payload) {
    state.pages = [...state.pages, payload];
  },
  deletePage (state, id) {
    state.pages = state.pages.filter(item => item.id !== id);
  }
};

export default {
  namespaced: true,
  actions,
  state,
  mutations
}
