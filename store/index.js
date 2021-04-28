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
  async nuxtServerInit({ commit, dispatch }, { req }) {
    // Parse cookies with cookie-universal-nuxt
    const authCookie = this.$cookies.get('auth')
    if (authCookie) {
      const { token, userInfo } = authCookie

      // Check if Cookie user and token exists to set them in 'auth'
      if (token && userInfo) {
        await dispatch('signInWithoutCookie', { token, userInfo })
      }
    }
  },
  signIn({ commit }, { token, userInfo }) {
    this.$axios.setToken(token, 'Bearer')
    commit('setAuthToken', { token })
    commit('setUserInfo', userInfo)
    this.$cookies.set(
      'auth',
      { token, userInfo },
      {
        path: '/',
        maxAge: 60 * 60 * 24,
      }
    )
  },
  signInWithoutCookie({ commit }, { token, userInfo }) {
    this.$axios.setToken(token, 'Bearer')
    commit('setAuthToken', { token })
    commit('setUserInfo', userInfo)
  },
  signOut({ commit }) {
    this.$axios.setToken(false)
    commit('removeAuthToken')
    commit('removeUserInfo')
    this.$cookies.remove('auth')
  },
}
