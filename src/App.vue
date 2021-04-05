<template>
  <div id="app">
    <img alt="Display" src="./assets/display.png">
    <PeopleCounter/>
  </div>
</template>

<script>
import PeopleCounter from './components/PeopleCounter.vue'

export default {
  name: 'App',
  components: {
    PeopleCounter
  }
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
