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

    <LeafletMap id="map" />
    <div id="container" ref="container">
        <div id="resizer" @mousedown="onMouseDown">
            <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="arrow"></div>
            <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
        <div id="editor" ref="editor">
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
        },
    }
}
</script>

<style>
#map {
    width: 100vw;
    height: 100vh;
}

#resizer {
    padding: 1px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 0;
    right: 50vw;
    width: 7px;
    height: 100vh;
    background-color: rgba(232, 232, 232, 0.714);
}

#resizer:hover {
    cursor: ew-resize;
}

.arrow {
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid black;

}

.dots {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.dot {
    width: 7px;
    height: 7px;
    background-color: grey;
    border-radius: 50%;
    margin: 5px;
}

#editor {
    z-index: 1000;
    position: absolute;
}

#container {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100vh;
    overflow-y: auto;
    background-color: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(10px);
    display: flex;
}

body {
    margin: 0;
}

a {
    text-decoration: none;
    color: black;
}

.header {
    z-index: 1001;
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
