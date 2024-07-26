<template>
    <div class="header">
        <div class="hamburger-menu" @click="toggleDropdown">
            &#9776; <!-- Hamburger icon -->
        </div>
        <div class="hamburgerdropdown" v-if="isDropdownVisible">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/admin">Admin</router-link></li>
                <hr> <!-- Separating bar -->
                <li>Export</li>
                <li>Distraction free</li>
            </ul>
        </div>
    </div>

    <LeafletMap id="map" @click="removeDropdown" />
    <div class="editor-container" ref="editorContainer" @click="removeDropdown">
        <div class="resizer" @mousedown="startResize">
            <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="arrow-container">
                <div class="arrow"> &lt; </div>
            </div>
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

        removeDropdown() {
            this.isDropdownVisible = false;
        },
        startResize(event) {
            // Prevent default action to avoid selecting text during drag, etc.
            event.preventDefault();

            document.addEventListener('mousemove', this.resizeContainer);
            document.addEventListener('mouseup', this.stopResize);
        },
        resizeContainer(event) {
            // Calculate new width based on the mouse position
            // This is a basic example; you might need to adjust the calculation based on your layout
            const newWidth = (window.innerWidth - event.clientX) + 'px';

            // Apply the new width to the container
            this.$refs.editorContainer.style.width = newWidth;
        },
        stopResize() {
            // Remove the event listeners when the mouse is released
            document.removeEventListener('mousemove', this.resizeContainer);
            console.log('stopResize');
            document.removeEventListener('mouseup', this.stopResize);
        },
    }
}
</script>

<style scoped>
#map {
    width: 100vw;
    height: 100vh;
}

.resizer {
    z-index: 1004;
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

.resizer:hover {
    cursor: ew-resize;
}

.arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    background-color: rgb(187, 187, 187);
}


.arrow-container:hover {
    cursor: pointer;
}

.dots {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.dot {
    width: 5px;
    height: 5px;
    background-color: rgb(187, 187, 187);
    border-radius: 50%;
    margin: 2px;
}

#editor {
    z-index: 1000;
    position: absolute;
    padding-left: 1rem;
}

.editor-container {
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
    top: 4rem;
    position: absolute;
    right: 0;
    top: 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    padding: 12px 16px;
}

ul li:hover {
    background-color: #f1f1f1;
}

hr {
    margin: 10px 0;
}
</style>
