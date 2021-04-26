<template>
  <div id="vis" style="width:1366px;">
    <pre class="p1">Meh Mood   ({{ this.mehsize % 35 }}%)   </pre>
    <pre class="p2">Okay Mood  (10%)    </pre>
    <pre class="p3">Good Mood  (60%)   </pre>
  </div>
</template>

<script>
export default {
  name: "DataViz",
  data() {
    return {
      mehsize: 100,
      okaysize: 190,
      goodsize: 350,
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
}
.p2 {
  align-items: center;
  color: #90ee90;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.p3 {
  align-items: center;
  color: #ffff99;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>
