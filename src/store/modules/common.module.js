
const state = {
  pages: []
};

const actions = {

};

const getters = {
  pageById: (state) => (id) => state.pages.find(page => page.id === id)
};

const mutations = {
  setPage (state, payload) {
    state.pages = [...state.pages, payload];
  },
  deletePage (state, id) {
    state.pages = state.pages.filter(item => item.id !== id);
  },
  addElement (state, { pageId, component }) {
    console.log(typeof pageId);
    const match = state.pages.find(item => item.id === pageId);
    console.log(match);
  }
};

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations
}
