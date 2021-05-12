<template>
  <div>
    <div v-if="!closeEnough">
      <Welcome/>
    </div>
    <div v-else-if="closeEnough && (moodboard || leftHand)">
      <Home/>
    </div>
    <div v-else-if="closeEnough && (!moodboard || rightHand)">
      <DataDisplay/>
    </div>
  </div>
</template>

<script>
import Welcome from './views/Welcome.vue'
import Home from './views/Home.vue'
import DataDisplay from './views/DataDisplay.vue'

export default {
  name: 'App',
  components: {
    Home,
    DataDisplay,
    Welcome,
  },
  data() {
    return {
      closeEnough: this.$store.state.closeEnough,
      moodboard: !this.$store.state.pose,
      leftHand: this.$store.state.backtoMoods,
      rightHand: this.$store.state.showDataViz,
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
