<template>
    <div class="header">
        <div class="hamburger-menu" @click="toggleDropdown">
            &#9776; <!-- Hamburger icon -->
        </div>
        <div class="dropdown" v-if="isDropdownVisible">
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

        <div class="left-top">
            <LeafletMap />
        </div>
        <div class="left-bottom">
            <UploadMapLayer />
        </div>
        <div class="right">
            <AssignmentTextEditor />
        </div>
    </div>
</template>

<script>

import AssignmentTextEditor from './AssignmentTextEditor.vue'
import LeafletMap from './LeafletMap.vue'
import UploadMapLayer from './UploadMapLayer.vue'
import 'quill/dist/quill.snow.css'; // or 'quill/dist/quill.bubble.css' for the Bubble theme

export default {
    name: 'CompleteEditor',
    components: {
        AssignmentTextEditor,
        LeafletMap,
        UploadMapLayer
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
    grid-template-rows: 4fr 1fr;
    height: 100vh;
}

body {
    margin: 0;
}

hr {
    color: #7777771c;
}

.left-top {
    grid-column: 1;
    grid-row: 1 / span 2;
}

.left-bottom {
    grid-column: 1;
    grid-row: 2;
    z-index: 1000;
    background-color: #aad3df67;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 20px;
}

.right {
    overflow-y: auto;
    padding: 20px;
    grid-column: 2;
    grid-row: 1 / span 2;
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

.dropdown {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    z-index: 1;
    background-color: white;
    box-shadow: 0 7px 9px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
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
