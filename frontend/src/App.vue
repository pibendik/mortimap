<template>
  <div id="app">
    <header>
      <div>
        <router-link to="/" class="logo">MORTIMAP</router-link>
      </div>
      <div>
        <!-- Simplified Navbar as a horizontal list -->
        <ul class="navbar">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/editor">Editor</router-link></li>
          <li><router-link class="login-button" to="/loginPage">Login</router-link></li>
          <li><router-link class="signup-button" to="/loginPage">Sign up</router-link></li>
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
  margin-right: 3px;
  /* Adjust spacing between items */
}

.navbar li:last-child {
  margin-right: 0;
  /* Remove margin for the last item */
}

.logo {
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  background-color: #AAD3DF;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.navbar a,
.navbar a:visited {
  text-decoration: none;
  color: inherit;
}

.navbar a {
  /* Button styles */
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 400px;
  text-decoration: none;
  /* Ensures no underline */
  display: inline-block;
  border: none;
}

.navbar a:hover {

  background-color: #ADD19E;
}


.signup-button,
.login-button {
  /* Button styles */
  padding: 5px 10px;
  cursor: pointer;
  background-color: #AAD3DF;
  border: none;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  /* Ensures no underline */
  display: inline-block;
  /* Allows padding and other box model properties */
}

.login-button {
  background-color: #F5E9C6;
}

/* Adjusting for hover state */
.login-button:hover,
.signup-button:hover {
  background-color: darken(#007bff, 10%);
  /* Example: Darkens the button color on hover */
}
</style>