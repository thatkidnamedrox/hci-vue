<template>
  <div id="app">
    <Header/>
    <Moods/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Moods from '../components/Moods.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Moods
  }
}
</script>

<style scoped>


</style>