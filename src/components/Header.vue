<template>
  <header>
      <h1>Welcome to VibeCheck passenger!</h1>
      <h2>Come closer and show us how you feel!</h2>
      <h3>And see how your friends are feeling too.</h3>
  </header>
</template>

<script>
export default {
  name: 'Header',
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