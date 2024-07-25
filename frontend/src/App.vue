<template>
  <div id="app">
    <NavBarLoggedIn v-if="showHeader" />
    <router-view></router-view>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'; // or 'quill/dist/quill.bubble.css' for the Bubble theme
import NavBarLoggedIn from './components/NavBarLoggedIn.vue';

export default {
  name: 'App',
  components: {
    NavBarLoggedIn
  },
  computed: {
    // Computed property that returns true or false based on the current route's meta field
    showHeader() {
      // This will return true if hideNavbar is false or undefined, making the header visible
      return !this.$route.meta.hideNavbar;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>