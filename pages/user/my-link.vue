<template>
  <div class="col-12 col-md-8">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: [
        { key: 'query', label: 'Query' },
        { key: 'redirect', label: 'Link' },
      ],
      items: [],
    }
  },
  mounted() {
    window.console.log('sending')
    this.$axios.$get('/user-profile/my-link').then((res) => {
      this.items = res
    })
  },
}
</script>
