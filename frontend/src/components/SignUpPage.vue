<template>
    <div class="top-container">

        <div class="signup-container">
            <a href="/"><img src="@/assets/logo.png" alt="Logo" class="logo"></a>
            <h1>Sign Up</h1>
            <form @submit.prevent="register" class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" class="form-control" required>
                <br>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" class="form-control" required>
                <br>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" class="form-control" required>
                <br>
                <button type="submit" class="signup-button">Sign Up</button>
            </form>
            <div class="social-login">
                <button @click="registerWithGoogle" class="google-button">Sign Up with Google</button>
            </div>
            <p class="terms">
                By creating an account, you agree to our <a href="/terms">Terms and Conditions</a>.
                <br>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            email: '',
            username: '',
            password: ''
        };
    },
    methods: {
        register() {
            this.$emit('login-success');
        },
        registerWithGoogle() {
            this.$emit('login-success');
        }
    }
};
</script>

<style>
button {
    margin: auto;
}

.top-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.signup-container {
    padding: 2rem;
    max-width: 400px;
    border: 1px solid #ccc;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 100px;
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.form-control {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.google-button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.google-button {
    background-color: #db4437;
}

.terms {
    margin-top: 20px;
    font-size: 12px;
}

.terms a {
    color: #007bff;
    text-decoration: none;
}
</style>