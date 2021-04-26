<template>
  <div id="app">
    <Header/>
    <Moods/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Moods from '../components/Moods.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Moods,
    Footer
  }
}
</script>

<style scoped>


</style>