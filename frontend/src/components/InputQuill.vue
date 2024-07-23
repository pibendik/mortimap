<template>
    <div>
        <div ref="editor"></div> <!-- Quill will attach the editor here -->
    </div>
</template>

<script>
import Quill from 'quill'; // Import Quill

export default {
    mounted() {
        // Initialize Quill on the mounted hook
        this.quill = new Quill(this.$refs.editor, {
            theme: 'snow', // Specify theme ('snow' or 'bubble')
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],

                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],                         // text direction

                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                ]
            }
        });
    },
    beforeUnmount() {
        if (this.quill && typeof this.quill.destroy === 'function') {
            this.quill.destroy();
        }
    },
};
</script>

<style scoped>
/* Quill's Snow theme requires additional padding */
.editor {
    /* Adjust the height as needed */
    height: 300px;
}
</style>