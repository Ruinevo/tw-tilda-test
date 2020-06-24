
const state = {
  pages: []
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
  addElement (state, { pageId, element }) {
    const page = state.pages.find(item => item.id === pageId);
    page.elements.push(element);
  },
  deleteElement (state, { pageId, elementId }) {
    const page = state.pages.find(item => item.id === pageId);
    page.elements = page.elements.filter(el => el.id !== elementId);
  },
  updateElement (state, { pageId, elementId, data: { key, value } }) {
    const pageIndex = state.pages.findIndex(item => item.id === pageId);
    const elementIndex = state.pages[pageIndex].elements.findIndex(e => e.id === elementId);
    state.pages[pageIndex].elements[elementIndex].content[key] = value;
  }
};

export default {
  namespaced: true,
  getters,
  state,
  mutations
}
