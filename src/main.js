import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBqOibefczcWzzlkOPwHby0PuHfxLP0RKY",
  authDomain: "excel-f12b8.firebaseapp.com",
  databaseURL: "https://excel-f12b8.firebaseio.com",
  projectId: "excel-f12b8",
  storageBucket: "excel-f12b8.appspot.com",
  messagingSenderId: "406389932076",
  appId: "1:406389932076:web:733c99a28afd1f6174d189",
  measurementId: "G-LL8NFTYKLN"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
