<template>
  <div
    class="fixed-top d-flex align-items-center justify-content-center"
    style="bottom: 0; overflow-y: auto"
  >
    <div class="col-12 col-md-6">
      <b-card>
        <form @submit.prevent="login">
          <h3>Sign In</h3>

          <div class="form-group">
            <label>Username</label>
            <input
              v-model="username"
              type="text"
              class="form-control form-control-lg"
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control form-control-lg"
            />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Sign In
          </button>

          <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>

          <ul class="list-group">
            <li class="list-group-item border-0 py-1">
              <a href="#" class="btn btn-primary btn-block">
                <font-awesome-icon :icon="['fab', 'facebook']" /> Sign in with
                <b>Facebook</b>
              </a>
            </li>
            <li class="list-group-item border-0 py-1">
              <a href="#" class="btn btn-danger btn-block">
                <font-awesome-icon :icon="['fab', 'google']" /> Sign in with
                <b>Google</b>
              </a>
            </li>
            <li class="list-group-item border-0 py-1">
              <a href="#" class="btn btn-info btn-block">
                <font-awesome-icon :icon="['fab', 'twitter']" /> Sign in with
                <b>Twitter</b>
              </a>
            </li>
          </ul>
        </form>
      </b-card>
    </div>
    <!-- modal -->
    <b-modal ref="auth-error-modal" hide-footer>
      <template #modal-title> Error Message </template>
      <div class="d-block text-center">
        <p>{{ authErrorMsg }}</p>
      </div>
    </b-modal>
    <!-- end modal -->
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      username: '',
      password: '',
      authErrorMsg: '',
    }
  },
  mounted() {
    if (this.$store.state.authToken) this.$router.push('/')
  },
  methods: {
    async login() {
      try {
        const res = await this.$axios.$post('/user/login', {
          username: this.username,
          password: this.password,
        })
        this.showModal(res.token)
        this.$store.dispatch('signIn', { token: res.token, userInfo: res.user })
        await this.showModal(res)
        this.$router.push('/')
      } catch (error) {
        this.showModal(error.message)
      }
    },
    showModal(msg) {
      this.authErrorMsg = msg
      this.$refs['auth-error-modal'].show()
    },
  },
}
</script>

<style></style>
