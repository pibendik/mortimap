<template>
  <div class="grid-container">
    <div class="left">
      <LeafletMap />
    </div>
    <div class="right">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.left {
  grid-column: 1;
}

.right {
  grid-column: 2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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