<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Send login request to Django backend
            // You can use axios or any other HTTP library for this
            // Example using axios:
            axios.post('/api/login/', {
                username: this.username,
                password: this.password
            })
                .then(response => {
                    // Handle successful login
                    // Redirect or perform any other actions
                })
                .catch(error => {
                    // Handle login error
                    // Display error message or perform any other actions
                });
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>