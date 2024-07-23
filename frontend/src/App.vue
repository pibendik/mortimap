<template>
  <LandingPage />
  <CompleteEditor />
</template>

<script>
import 'quill/dist/quill.snow.css'; // or 'quill/dist/quill.bubble.css' for the Bubble theme
import CompleteEditor from './components/CompleteEditor.vue'
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    CompleteEditor,
    LandingPage
  }
}
</script>