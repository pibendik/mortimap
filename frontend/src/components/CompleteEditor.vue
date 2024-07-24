<template>
    <div class="header">
        <div class="hamburger-menu" @click="toggleDropdown">
            &#9776; <!-- Hamburger icon -->
        </div>
        <div class="dropdown hamburgerdropdown" v-if="isDropdownVisible">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/admin">Admin</router-link></li>
                <hr> <!-- Separating bar -->
                <li>Export</li>
                <li>Distraction free</li>
            </ul>
        </div>
    </div>
    <div class="grid-container">

        <div class="left">
            <LeafletMap />
        </div>
        <div class="right">
            <TextEditor />
        </div>
    </div>
</template>

<script>

import TextEditor from './TextEditor.vue'
import LeafletMap from './LeafletMap.vue'
import 'quill/dist/quill.snow.css'; // or 'quill/dist/quill.bubble.css' for the Bubble theme

export default {
    name: 'CompleteEditor',
    components: {
        TextEditor,
        LeafletMap
    },
    data() {
        return {
            isDropdownVisible: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        }
    }
}
</script>

<style>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
}

body {
    margin: 0;
}

a {
    text-decoration: none;
    color: black;
}

.left {
    height: 100vh;
}

.right {
    overflow-y: auto;
    padding: 20px;
}

.header {
    position: relative;
}

.hamburger-menu {
    cursor: pointer;
    font-size: 24px;
    /* Adjust size as needed */
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
}

.hamburgerdropdown {
    background-color: white;
    box-shadow: 0 7px 9px rgba(0, 0, 0, 0.2);
}

.dropdown {
    position: absolute;
    right: 0;
    z-index: 1;
}

.dropdown ul {
    list-style-type: none;
    padding: 0;
}

.dropdown ul li {
    padding: 12px 16px;
}

.dropdown ul li:hover {
    background-color: #f1f1f1;
}

.dropdown hr {
    margin: 10px 0;
}
</style>
