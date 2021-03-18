export const state = () => ({
  authToken: null,
  userInfo: {},
})
export const getters = () => ({
  isAuth: (state) => {
    return !!state.authToken
  },
})
export const mutations = {
  setAuthToken(state, { token }) {
    state.authToken = token
  },
  removeAuthToken(state) {
    state.authToken = null
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  removeUserInfo(state) {
    state.userInfo = {}
  },
}
export const actions = {
  signIn({ commit }, { token, userInfo }) {
    this.$axios.setToken(token, 'Bearer')
    commit('setAuthToken', { token })
    commit('setUserInfo', userInfo)
  },
  signOut({ commit }) {
    this.$axios.setToken(false)
    commit('removeAuthToken')
    commit('removeUserInfo')
  },
}
