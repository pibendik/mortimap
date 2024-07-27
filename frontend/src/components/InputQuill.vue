<template>
    <div>
        <div ref="editor">
        </div> <!-- Quill will attach the editor here -->
        <button @click="saveContentToFile">Save to file</button>
        <button @click="saveDeltaContentToAPI">Save to file storage</button>
        <button @click="saveHTMLContentToAPI">Save to file storage as HTML</button>
        <button @click="loadContentFromFileStorage">Load contents from filestorage</button>
        <span style="font-size: small;">...to be replaced by auto saving on un-focus, every so and so many
            changes</span>
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
        },
        async saveHTMLContentToAPI() {
            // Get the content as HTML
            const html = this.quill.root.innerHTML;
            // Create a Blob from the HTML
            const blob = new Blob([html], { type: 'application/json' });
            // Create a FormData object
            const formData = new FormData();
            formData.append('file', blob, 'content.html');

            try {
                const response = await fetch('http://localhost:8000/assignments/files/single', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json'
                    },
                    body: formData
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('File saved successfully:', result);
                } else {
                    console.error('Error saving file:', response.statusText);
                }
            } catch (error) {
                console.error('Error saving file:', error);
            }
        },
        async saveDeltaContentToAPI() {
            // Get the content as a Delta object
            const delta = this.quill.getContents();
            // Convert the Delta object to a JSON string
            const jsonString = JSON.stringify(delta);
            // Create a Blob from the JSON string
            const blob = new Blob([jsonString], { type: 'application/json' });
            // Create a FormData object
            const formData = new FormData();
            formData.append('file', blob, 'content.json');

            try {
                const response = await fetch('http://localhost:8000/assignments/files/single', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json'
                    },
                    body: formData
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('File saved successfully:', result);
                } else {
                    console.error('Error saving file:', response.statusText);
                }
            } catch (error) {
                console.error('Error saving file:', error);
            }
        },
        async loadContentFromFileStorage() {
            try {
                const response = await fetch('http://localhost:8000/assignments/files/content.json', {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json'
                    }
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('File loaded successfully:', result);
                    // Set the content of the Quill editor to the loaded content
                    this.quill.setContents(result);
                } else {
                    console.error('Error loading file:', response.statusText);
                }
            } catch (error) {
                console.error('Error loading file:', error);
            }
        }, async displayLoadedContentPrettily() {
            try {
                const response = await fetch('http://localhost:8000/assignments/files/content.html', {
                    method: 'GET',
                    headers: {
                        'accept': 'text/html'
                    }
                });

                if (response.ok) {
                    const result = await response.text();
                    console.log('display-file loaded successfully:', result);

                    // Directly use the loaded HTML content
                    document.getElementById('contentdisplayer').innerHTML = result;
                } else {
                    console.error('Error loading file:', response.statusText);
                }
            } catch (error) {
                console.error('Error loading file:', error);
            }
        },
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
</style>