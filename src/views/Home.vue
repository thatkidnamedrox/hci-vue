<template>
  <div id="app">
    <Moods/>
    <FooterMoods/>
  </div>
</template>

<script>
import Moods from '../components/Moods.vue'
import FooterMoods from '../components/FooterMoods.vue'

export default {
  name: 'Home',
  components: {
    Moods,
    FooterMoods
  }
}
</script>

<style scoped>


</style>