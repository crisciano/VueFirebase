// documentation
// https://jsfiddle.net/chrisvfritz/pyLbpzzx/?utm_source=website&utm_medium=embed&utm_campaign=pyLbpzzx
// https://vuejs.org/v2/examples/firebase.html

import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

// Setup Firebase
var config = {
  apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
  authDomain: "vue-demo-537e6.firebaseapp.com",
  databaseURL: "https://vue-demo-537e6.firebaseio.com"
}
firebase.initializeApp(config)

var usersRef = firebase.database().ref('users')

new Vue({
  el: '#app',
  render: h => h(App),
  firebase: {
    users: usersRef
  }
})
