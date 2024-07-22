<template>
  <div class="grid-container">
    <div class="left">
      <LeafletMap />
    </div>
    <div class="right">
      <HelloWorld />
    </div>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  /* Set the height to full viewport height */
}

.left,
.right {
  overflow-y: auto;
  /* Allow vertical scrolling */
  height: 100vh;
  /* Set the height to full viewport height */
}

body {
  margin: 0;
  /* Remove default margin */
}
</style>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LeafletMap from './components/LeafletMap.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LeafletMap
  }
}
</script>