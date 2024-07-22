<template>
    <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import personIcon from './../assets/person.svg';

export default {
    name: 'LeafletMap',
    mounted() {
        // Initialize the map
        const map = L.map('map').setView([63.839833, 20.172167], 20);

        // Base layer: OpenStreetMap
        const openStreetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Satellite imagery layer: Esri Satellite
        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });

        // Custom icon for the marker
        const customIcon = L.icon({
            iconUrl: personIcon, // Specify the path to your pin image
            iconSize: [38, 95], // Size of the icon
            iconAnchor: [22, 94], // Point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // Point from which the popup should open relative to the iconAnchor
        });

        // Marker with custom icon
        const marker = L.marker([63.839833, 20.172167], { icon: customIcon }).addTo(map);

        // Popup with text
        marker.bindPopup("Bendik grew up here").openPopup();

        // Layer control: Allows users to switch between layers
        const baseMaps = {
            "OpenStreetMap": openStreetMapLayer,
            "Satellite": satelliteLayer
        };

        const overlayMaps = {
            "Marker": marker
        };

        L.control.layers(baseMaps, overlayMaps).addTo(map);
    }
}
</script>

<style>
#map {
    width: 100%;
    height: 100%;
}
</style>