import axios from 'axios'

export default {
  state: {
    reviews: {}
  },
  mutations: {
    setReviews(state, data) {
      state.reviews = data
    }
  },
  actions: {
    async getReviews({ commit }) {
      try {
        const data = await axios({
          url: 'http://fessan.ru/api/feed-back',
          method: 'GET'
        })
        // console.log(data.data[0][0].feedback, 'this data in action')
        commit('setReviews', data.data[0][0].feedback)
      } catch (err) {
        console.log(err)
        throw err
      }
    }
  },
  getters: {
    allReviews(state) {
      return state.reviews
    }
  }
}
