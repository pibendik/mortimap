<template>
    <div>
        <div class="instruction" v-html="instructionContent"></div>
        <InputQuill />
    </div>
</template>

<script>
import InputQuill from './InputQuill.vue'; // Adjust the path as necessary

export default {
    name: 'AssignmentText',
    components: {
        InputQuill
    },
    data() {
        return {
            instructionContent: ''
        };
    },
    methods: {
        async fetchInstructionContent() {
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
                    this.instructionContent = result;
                } else {
                    console.error('Error loading file:', response.statusText);
                }
            } catch (error) {
                console.error('Error loading file:', error);
            }
        },
    },
    mounted() {
        this.fetchInstructionContent();
    }
};
</script>

<style scoped></style>