<template>
    <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
    name: 'LeafletMap',
    mounted() {
        // Initialize the map
        const map = L.map('map').setView([63.839833, 20.172167], 20); // Set the initial position to Umedalen, Umeå, Sweden with updated coordinates

        // Add a tile layer to add to our map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    }
}
</script>

<style>
#map {
    width: 100%;
    height: 100%;
}
</style>