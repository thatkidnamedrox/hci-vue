import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      reconnectError: false,
    },
    people: {
      count: 0,
    }
  },
  mutations:{
    SOCKET_ONOPEN (state, event)  {
      Vue.prototype.$socket = event.currentTarget
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state )  {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event)  {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message)  {
      // TODO: handle incoming people message here
      if (message.people) {
        state.people.count = Object.keys(message.people).length;
      } else {
        state.people.count = 0;
      }
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    },
  },
  actions: {
  }
})


import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'ws://172.29.41.16:8888/frames', {
  format: 'json',
  store: store,
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
})

// create the app instance
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
