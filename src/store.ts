import { createStore } from 'vuex'

const state = {
  cities: {},
  numbers: [1, 2, 3]
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },

  SET_CITIES(state, payload) {
    state.cities = payload
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },

  setCities(context, cities) {
    context.commit('SET_CITIES', cities)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },

  getCities(state) {
    return state.cities
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store
