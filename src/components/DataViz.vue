<template>
  
  <div id='vis' style='width:1366px;'>
       <svg class='chart-outer'><g class='chart'></g></svg>
       <span :style="userStyle" class="meh"></span>
       <span :style="userStyle" class="okay"></span>
       <span :style="userStyle" class="good"></span>
       

   </div>
</template>


<script>
export default {
  name: 'DataViz',
    data () {
    return {
      total: (this.$store.state.data.bad + this.$store.state.data.neutral + this.$store.state.data.good) * 100,
      mehsize: (this.$store.state.data.bad * 500) / this.$store.state.people.count,
      okaysize: (this.$store.state.data.neutral * 500) / this.$store.state.people.count,
      goodsize: (this.$store.state.data.good * 500) / this.$store.state.people.count
       ,
    }
  },
  computed: {
    userStyle () {
      return {
        '--meh-size': this.mehsize + 'px',
        '--okay-size': this.okaysize + 'px',
        '--good-size': this.goodsize  + 'px'
      }
    }
}
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Baloo+Thambi');
.meh {
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-60px;
  margin-left:-50px;
  height: var(--meh-size);
  width: var(--meh-size);
  background-color: #FFB6C1;
  border-radius: 50%;
  display: inline-block;
}
.okay {
  margin-left:-70px;
  height: var(--okay-size);
  width: var(--okay-size);
  background-color: #90EE90 ;
  border-radius: 50%;
  display: inline-block;
}
.good {
  height: var(--good-size);
  width: var(--good-size);
  background-color: #FFFF99;
  border-radius: 50%;
  display: inline-block;
  color: #FFFF99;
}
.p1 {
    align-items:center;
    color: #FFB6C1;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
.p2 {
    align-items:center;
    color: #90EE90 ;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
.p3 {
    align-items:center;
    color: #FFFF99;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>