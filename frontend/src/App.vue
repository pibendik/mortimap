<template>
  <div id="app">
    <header>
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <!-- Simplified Navbar as a horizontal list -->
        <ul class="navbar">
          <li>Item 1</li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/editor">Editor</router-link></li>
          <li><button class="signup-button">Sign up</button></li>
          <li><router-link to="/loginPage">Login</router-link></li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'; // or 'quill/dist/quill.bubble.css' for the Bubble theme

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: black;
}

.navbar {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin-right: 20px;
  /* Adjust spacing between items */
}

.navbar li:last-child {
  margin-right: 0;
  /* Remove margin for the last item */
}

.signup-button,
.login-button {
  /* Button styles */
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
}

.login-button {
  background-color: #28a745;
}
</style>