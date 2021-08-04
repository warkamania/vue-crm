import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter("date", dateFilter)
Vue.filter("currency", currencyFilter)
Vue.component('Loader',Loader)


firebase.initializeApp({
  apiKey: "AIzaSyBlnKTlyFnZQ6uzSoeoo_DJv2HZ9LwtJ9k",
  authDomain: "vue-crmprojeckt.firebaseapp.com",
  projectId: "vue-crmprojeckt",
  storageBucket: "vue-crmprojeckt.appspot.com",
  messagingSenderId: "1038719976812",
  appId: "1:1038719976812:web:3c4ea26339e51bd4f05f49",
  measurementId: "G-Y38D510LEC"
})

let app
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  
})

