import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
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
        ids: [],
        distances: []
    },
    mood: "How are you feeling?",
    pose: false,
    data: {
      good: 0,
      neutral: 0,
      bad: 0
    },
    moodboard: true
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
        var keys = Object.keys(message.people);
        state.people.count = keys.length;
        // to refine: range of approximation, which person can we track...

        // to implement: come closer... 1 
        let distances = [];
        for (var i = 0; i < state.people.count; i++) {
          let person = message.people[keys[i]];
          distances.push(person.avg_position[2]);
        }
        let minimum = Math.min(...distances);
        
        // console.log(minimum);
        // 2300
        if (minimum > 3200) {
          state.moodboard = true;
          return;
        }

        let idx = keys[distances.indexOf(minimum)]
    
        let person = message.people[idx];
      

        // console.log(state.data.overall)

        let keypoints = person.keypoints;
        // console.log(keypoints);

        let LWrist = keypoints.LWrist;
        let RWrist = keypoints.RWrist;
        let LHip = keypoints.LHip;
        let RHip = keypoints.RHip;
        let LAnkle = keypoints.LAnkle;
        let RAnkle = keypoints.RAnkle;
        // let LElbow = keypoints.LElbow;
        // let RElbow = keypoints.RElbow;
        // let Nose = keypoints.Nose;
        let LShoulder = keypoints.LShoulder;

        let compare = (a, b, d) => {
          let c = [0,0,0]
          c[0] = Math.abs(a[0] - b[0])
          c[1] = Math.abs(a[1] - b[1])
          c[2] = Math.abs(a[2] - b[2])
         
          if (d == 0) {
            return c[0] < 120;
          }
          else if (d == 1) {
            return a[1] < b[1];
          }
          else if (d == 2) {
            return c[0] > 300;
          }
          else {
            return false;
          }
        }


        // neutral => hands on hips
        // good => above head
        // bad => spread legs
        let neutral = compare(LWrist, LHip, 0) && compare(RWrist, RHip, 0);
        let good = compare(LWrist, LShoulder, 1) && compare(RWrist, LShoulder, 1);
        let bad = compare(LAnkle, RAnkle, 2);

        // for navigation
        // let rightHandRaise = compare(RWrist, LShoulder, 1);
        // let leftHandRaise = compare(LWrist. LShoulder, 1);
        // console.log(person);
        // console.log(good, bad, neutral);
        state.pose = neutral || bad || good;
        console.log(state.pose);
        if (neutral) {
          state.mood = "Neutral";
          state.data.neutral += 1;
        }
        else if (bad) {
          state.mood = "Bad";
          state.data.bad += 1;
        }
        else if (good) {
          state.mood = "Good";
          state.data.good += 1;
        }
        else {
          state.mood = "How are you feeling?"
          state.pose = false;
        }

        if (state.pose) {
          state.moodboard = false;
        }


        // if 
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
Vue.use(VueNativeSock, 'ws://172.28.142.145:8888/frames', {
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
