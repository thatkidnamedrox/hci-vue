<template>
  <div>
    <div v-if="moodboard">
      <Home/>
    </div>
    <div v-else>
      <LeslieView/>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import LeslieView from './views/LeslieView.vue'

export default {
  name: 'App',
  components: {
    Home,
    LeslieView,
  },
  data() {
    return {
      moodboard: true, // link this to store.whatever variable we get from the pose 
      // {this.$store.state.people.pose}
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
