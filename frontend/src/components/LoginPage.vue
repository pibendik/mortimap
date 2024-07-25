<template>
    <div class="login-container">
        <a href="/"><img src="@/assets/logo.png" alt="Logo" class="logo"></a>

        <h1>Login</h1>
        <form @submit.prevent="login" class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" class="form-control" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
            <br>
            <button type="submit" class="login-button" @click="handleLogin">Login</button>
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
        handleLogin() {
            this.$emit('login-success');
        }
    }
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* Full height of the viewport */
    flex-direction: column;
    /* Stack children vertically */
}

.form-group {
    margin-bottom: 15px;
    /* Space between form inputs */
    width: 100%;
    /* Full width of the container */
    max-width: 400px;
    /* Maximum width of form inputs */
}

.form-control {
    width: 100%;
    /* Full width of the container */
    padding: 10px;
    /* Padding inside the inputs */
    border: 1px solid #ccc;
    /* Border color */
    border-radius: 5px;
    /* Rounded corners */
    box-sizing: border-box;
    /* Include padding and border in the element's total width and height */
}

.login-button {
    width: 100%;
    /* Full width of the container */
    padding: 10px;
    /* Padding inside the button */
    background-color: #007bff;
    /* Background color */
    color: white;
    /* Text color */
    border: none;
    /* No border */
    border-radius: 5px;
    /* Rounded corners */
    cursor: pointer;
    /* Pointer cursor on hover */
}

.login-button:hover {
    background-color: #0056b3;
    /* Darker shade on hover */
}
</style>