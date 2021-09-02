<template>
  <div class="col-12 col-md-8">
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(action)="data">
        <b-button
          v-if="data.item.isDeleted != true"
          variant="danger"
          @click="deleteLink(data.index)"
        >
          Delete
        </b-button>
        <b-button
          v-if="data.item.isDeleted == true"
          variant="success"
          @click="restoreLink(data.index)"
        >
          Restore
        </b-button>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: [
        { key: 'query', label: 'Query' },
        { key: 'redirect', label: 'Link' },
        { key: 'redirectCount', label: 'Số lượt' },
        'action',
      ],
      items: [],
    }
  },
  mounted() {
    window.console.log('sending')
    this.$axios.$get('/userp/my-link').then((res) => {
      // this.$set(this, 'items', res)
      this.items = res
    })
  },
  methods: {
    deleteLink(index) {
      this.$axios.$delete(`/userp/my-link/${this.items[index].query}/delete`)
      this.items[index].isDeleted = true
    },
    restoreLink(index) {
      this.$axios.$get(`/userp/my-link/${this.items[index].query}/restore`)
      this.items[index].isDeleted = false
    },
  },
}
</script>
