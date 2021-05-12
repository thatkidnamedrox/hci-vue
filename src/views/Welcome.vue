<template>
  <div id="app">
      <Header/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Welcome',
  components: {
    Header,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
phrase {
    display:flex;
    justify-content: center;
    align-items:center
}
h1 {
  color: hotpink;
}
h2 {
  color:rebeccapurple;
}
</style>