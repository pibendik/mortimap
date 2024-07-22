<template>
  <div class="grid-container">
    <div class="left">
      <LeafletMap />
    </div>
    <div class="right">
      <TextEditor />
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

body {
  margin: 0;
  /* Remove default margin */
}

.right {
  overflow-y: auto;
  /* Add vertical scrollbar */
  padding: 20px;
  /* Add padding */
}
</style>

<script>
import TextEditor from './components/TextEditor.vue'
import LeafletMap from './components/LeafletMap.vue'
import 'quill/dist/quill.snow.css'; // or 'quill/dist/quill.bubble.css' for the Bubble theme

export default {
  name: 'App',
  components: {
    TextEditor,
    LeafletMap
  }
}
</script>