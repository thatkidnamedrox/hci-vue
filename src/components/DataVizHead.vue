var moment = require('moment');

<template>
  <header>
      <h1>Check out the campus vibes for today, {{currentDateTime()}}!</h1>
      <h2>Thank you for participating!</h2>
  </header>
</template>

<script>
export default {
  name: 'DataVizHead',
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const dateTime = date;
      
      return dateTime;
    }
  }
}

</script>

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
