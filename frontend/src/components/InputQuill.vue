<template>
    <div>
        <div ref="editor">
        </div> <!-- Quill will attach the editor here -->
        <button @click="saveContentToFile">Save to file</button>
    </div>
</template>

<script>
import Quill from 'quill'; // Import Quill

export default {
    name: 'InputQuill',
    methods: {
        saveContentToFile() {
            // Ensure content is up-to-date
            this.content = this.quill.root.innerHTML;
            // Create a Blob from the content
            const blob = new Blob([this.content], { type: 'application/json' });
            // Create a link element
            const link = document.createElement('a');
            // Set the download attribute with a URL to the Blob
            link.href = URL.createObjectURL(blob);
            link.download = 'content.json';
            // Programmatically click the link to trigger the download
            link.click();
            // TODO: use a backend for storing files!
        }
    },
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