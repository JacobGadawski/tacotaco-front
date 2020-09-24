export default function ( { $axios, store, $router } ) {
    $axios.onRequest(config => {
      config.headers['Authorization'] = `Bearer ${store.getters["user/bearer"]}`
      console.log( "sending requests with headers: ", config.headers )
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 401 || code === 403 ) {
        // redirect({ name: 'login' })
        console.log( $router )
      }
    })
}