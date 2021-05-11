<template>
  <div id="vis" style="width:1366px;" >
    <pre class="p1">Meh Mood   ({{ this.$store.state.data.bad / this.$store.state.people.count * 100}}%)   </pre>
    <pre class="p2">Okay Mood  ({{ this.$store.state.data.neutral / this.$store.state.people.count* 100}}%)    </pre>
    <pre class="p3">Good Mood  ({{ this.$store.state.data.good / this.$store.state.people.count * 100}}%)   </pre>
    <img src="../assets/frame.png" alt="YMH Code" width="150" height="150" align="left">
  </div>
</template>

<script>
export default {
  name: "DataViz",
  data() {
    return {
      mehsize: this.$store.state.data.bad / this.total,
      okaysize: this.$store.state.data.neutral / this.total,
      goodsize: this.$store.state.data.good / this.total,
    };
  },
  computed: {
    userStyle() {
      return {
        "--meh-size": this.mehsize,
        "--okay-size": this.okaysize,
        "--good-size": this.goodsize,
      };
    },
  },
};
</script>

<style>
.p1 {
  align-items: center;
  color: #ffb6c1;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 20px;
}
.p2 {
  align-items: center;
  color: #90ee90;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  font-size: 20px;
}
.p3 {
  align-items: center;
  color: #ffff99;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 20px;
}
</style>
