<template>
  <div>
    <!-- this variable, this.$store.state.num_people is defined in main.js in the vuex store -->
    <div>{{this.$store.state.mood}}</div>
  </div>
</template>

<script>

export default {
  name: 'PersonMood',
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
  color: #eefcf5;
}
</style>
