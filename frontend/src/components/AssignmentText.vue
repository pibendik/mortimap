<template>
    <div>
        <div class="instruction">
            <h1>Risk Analysis Instruction</h1>
            <p>
                To perform a risk analysis for floods, follow these steps:
            </p>
            <ol>
                <li>Open the map application.</li>
                <li>Zoom in to the desired area.</li>
                <li>Locate the map layers panel.</li>
                <li>Click on the "Layers" button to expand the panel.</li>
                <li>Scroll through the available layers and find the one related to floods.</li>
                <li>Select the flood layer by clicking on it.</li>
                <li>Observe the map for areas highlighted in blue or marked as flood-prone.</li>
                <li>Take screenshots of the map showing the flood layer.</li>
                <li>Upload the screenshots below:</li>
            </ol>
        </div>
        <InputQuill />
    </div>
</template>

<script>
import InputQuill from './InputQuill.vue'; // Adjust the path as necessary

export default {
    name: 'AssignmentText',
    components: {
        InputQuill
    }
};
</script>

<style scoped></style>