<template>
  <div id="app">
    <DataVizHead/>
    <DataViz/>
    <DataVizFooter/>
  </div>
</template>

<script>
import DataViz from '../components/DataViz.vue'
import DataVizHead from '../components/DataVizHead.vue'
import DataVizFooter from '../components/DataVizFooter.vue'
export default {
  name: 'DataDisplay',
  components: {
    DataVizHead,
    DataViz,
    DataVizFooter
  }
}
</script>

<style scoped>
</style>