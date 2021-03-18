<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="bottom: 0; overflow-y: auto"
  >
    <div class="col-12 col-md-6">
      <b-card>
        <form @submit.prevent="createLink">
          <h3>Create short link</h3>
          <div class="form-group">
            <label>URL</label>
            <input
              v-model="url"
              type="text"
              class="form-control form-control-lg"
            />
          </div>

          <div class="form-group">
            <label>Query</label>
            <input
              v-model="query"
              type="text"
              class="form-control form-control-lg"
            />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Submit
          </button>
        </form>
      </b-card>
    </div>
    <!-- modal -->
    <b-modal ref="link-modal" hide-footer>
      <template #modal-title> {{ linkModalTitle }} </template>
      <div class="d-block text-center">
        <p>{{ linkModalMsg }}</p>
      </div>
    </b-modal>
    <!-- end modal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      query: '',
      linkModalMsg: '',
      linkModalTitle: '',
    }
  },
  methods: {
    async createLink() {
      try {
        const res = await this.$axios.$post('/s/add', {
          url: this.url,
          query: this.query,
        })
        this.showModal(res.redirect, 'Success')
      } catch (error) {
        this.showModal(error.message)
      }
    },
    showModal(msg, title) {
      window.console.log(msg)
      this.linkModalMsg = msg
      this.linkModalTitle = title || 'Error message'
      this.$refs['link-modal'].show()
    },
  },
}
</script>
