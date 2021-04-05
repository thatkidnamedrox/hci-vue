<template>
  <div class="counter">
    <!-- this variable, this.$store.state.num_people is defined in main.js in the vuex store -->
    <div>I can see {{this.$store.state.people.count}} people.</div>
  </div>
</template>

<script>

export default {
  name: 'PeopleCounter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
