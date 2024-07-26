<template>
    <div class="navbarcontainer">
        <NavBarCommon />
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/admin">Admin</router-link></li>
            <li><router-link to="/editor">Editor</router-link></li>
            <li class="highlight dropdown account">
                Account
                <ul class="dropdown-content">
                    <li>Account</li>
                    <li>john.lennon@proton.com</li>
                    <li>Account Settings</li>
                    <li>Subscription</li>
                    <hr>
                    <li @click="handleLogout">Log out
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import NavBarCommon from './NavBarCommon.vue';
export default {
    name: "NavBarLoggedOut",
    components: {
        NavBarCommon
    },
    methods: {
        handleLogout() {
            console.log('Logging ouasdft');
            this.$emit('logout');
        }
    }
};
</script>

<style scoped>
li {
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
}

li:hover {
    background-color: #f2f2f2;
}

.dropdown {
    position: relative;

}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0;
    top: 0;
    text-align: right;
    padding: 0;
}

.dropdown:hover .dropdown-content {
    display: block;
}


.navbarcontainer {
    background-color: #2195f330;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.account {
    background-color: transparent;
    border: 1px solid #4CAF50;
    border-radius: 105px;
}


.account:hover {
    background-color: rgb(215, 113, 113);
    border-radius: 105px;
}


.padding {
    margin-left: 1rem;
}
</style>