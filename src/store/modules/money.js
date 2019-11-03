export default {
  namespaced: true,
  state: {
    paid: null
  },
  mutations: {
    setPay(state, paid) {
      state.paid = paid
    }
  },
  actions: {
    PAY({commit}, paid) {
      let obj = {
        'money': paid
      };
      localStorage.setItem('client', JSON.stringify(obj));
      commit('setPay', paid)
    },
    COIN_COUNT({commit}, coin) {
      coin--;
      let obj = {
        'money': coin
      };
      localStorage.setItem('client', JSON.stringify(obj));
      commit('setPay', coin)
    }
  },
  getters: {
    getPaid(state) {
      return state.paid
    }
  }
}
