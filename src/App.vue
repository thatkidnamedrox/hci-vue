<template>
  <div>
    <div v-if="moodboard">
      <Home/>
    </div>
    <div v-else>
      <DataDisplay/>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import DataDisplay from './views/DataDisplay.vue'

export default {
  name: 'App',
  components: {
    Home,
    DataDisplay,
  },
  data() {
    return {
      moodboard: !this.$store.state.pose,
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
