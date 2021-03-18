export default function ({ $axios, redirect, $store }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    window.console.log(code)
    // if (code === 403) {
    //   $store.dispatch('signOut')
    // }
  })
}
