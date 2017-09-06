import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCCVozh75B_37lKlONUQtvc1NEAKlV9CJM',
      authDomain: 'vuejs-project-3b5b6.firebaseapp.com',
      databaseURL: 'https://vuejs-project-3b5b6.firebaseio.com',
      projectId: 'vuejs-project-3b5b6',
      storageBucket: ''
    })
  }
})
