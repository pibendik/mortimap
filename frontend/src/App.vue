<template>
  <div id="app">
    <NavBarLoggedIn @logout="handleLogout" v-if="showHeader && isLoggedIn" />
    <NavBarLoggedOut v-if="showHeader && !isLoggedIn" />
    <router-view @login-success="handleLoginSuccess"></router-view>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'; // or 'quill/dist/quill.bubble.css' for the Bubble theme
import NavBarLoggedIn from './components/NavBarLoggedIn.vue';
import NavBarLoggedOut from './components/NavBarLoggedOut.vue';

export default {
  name: 'App',
  components: {
    NavBarLoggedIn,
    NavBarLoggedOut
  },
  data() {
    return {
      isLoggedIn: false // This should be dynamically set based on your auth logic
    };
  },
  methods: {
    handleLoginSuccess() {
      this.isLoggedIn = true;
      this.$router.push({ name: 'AdminPanel' });
    },
    handleLogout() {
      console.log('Logging out...');
      this.isLoggedIn = false;
      this.$router.push({ name: 'LandingPage' });
    }
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