<template>
    <div class="navbarcontainer">
        <NavBarCommon />
        <ul>
            <li class="padding login-button"><router-link to="/loginPage">Login</router-link></li>
            <li class="padding signup-button"><router-link to="/signUpPage">Sign up</router-link></li>
        </ul>
    </div>
</template>

<script>
import NavBarCommon from './NavBarCommon.vue';
export default {
    name: "NavBarLoggedOut",
    components: {
        NavBarCommon
    }
};
</script>

<style scoped>
.navbarcontainer {
    background-color: #F5E9C6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

li {
    display: inline-block;
    padding: 0.2rem 1.2rem;
    font-size: 18px;
    cursor: pointer;
}

li:hover {
    background-color: #f2f2f2;
}

.login-button {
    background-color: #4CAF50;
    color: white;
    border-radius: 105px;
    transition: background-color 0.3s, color 0.3s;
}

.signup-button {
    background-color: #2196F3;
    color: white;
    border-radius: 105px;
    transition: background-color 0.3s, color 0.3s;
}

.login-button:hover {
    background-color: rgb(34, 97, 0);
    border-radius: 105px;
}

.signup-button:hover {
    background-color: #004782;
    border-radius: 105px;
}

.padding {
    margin-left: 1rem;
}
</style>