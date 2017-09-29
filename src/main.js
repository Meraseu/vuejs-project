import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCCVozh75B_37lKlONUQtvc1NEAKlV9CJM',
      authDomain: 'vuejs-project-3b5b6.firebaseapp.com',
      databaseURL: 'https://vuejs-project-3b5b6.firebaseio.com',
      projectId: 'vuejs-project-3b5b6',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
