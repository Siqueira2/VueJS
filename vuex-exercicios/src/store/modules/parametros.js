export default {
  namespaced: true,
  state: {
    quantidade: 0,
    preco: 0,
  },

  mutations: {
    setQuantidade(state, payload) {
      state.quantidade = payload;
    },

    setPreco(state, payload) {
      state.preco = payload;
    },
  },
};
