<template>
  <div id="app">
    <DataVizHead/>
    <DataViz/>
    <DataVizFooter/>
    <FooterData/>
  </div>
</template>

<script>
import DataViz from '../components/DataViz.vue'
import DataVizHead from '../components/DataVizHead.vue'
import DataVizFooter from '../components/DataVizFooter.vue'
import FooterData from '../components/FooterData.vue'

export default {
  name: 'DataDisplay',
  components: {
    DataVizHead,
    DataViz,
    DataVizFooter,
    FooterData
  }
}
</script>

<style scoped>
</style>