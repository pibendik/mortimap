<template>
    <div class="container">
        <h2>Upload Map Layer</h2>
        <p>Select the map layer file you wish to upload.</p>
        <p>Acceptable formats:
            <strong>.geojson</strong>, <strong>.kml</strong>, <strong>.shp</strong>
        </p>
        <input type="file" id="file" @change="handleFileUpload">
        <label for="file">Choose a file</label>
    </div>
</template>

<script>
export default {
    name: 'UploadMapLayer',
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            // Handle the file upload logic here
            file && console.log(file.name);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

h2 {
    margin: 0.3rem 0;
    text-align: center;
}

p {
    text-align: center;
    padding: 0.5rem 0 0 0;
    margin: 0;
}

input[type="file"] {
    display: none;
}

label {
    display: inline-block;
    padding: 10px 20px;
    background-color: #5c7d4f;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

input[type="file"]+label {
    margin-top: 20px;
}

input[type="file"]:focus+label {
    outline: 2px solid #4CAF50;
}

input[type="file"]:hover+label {
    background-color: #45a049;
}
</style>