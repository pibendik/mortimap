<template>
    <div class="common-container">

        <div class="logocontainer">
            <router-link to="/" class="logo">MORTIMAP</router-link>
        </div>
        <ul class="navbar">

            <ul class="nav-list">
                <li>
                    Features

                </li>

                <li>Plans and pricing</li>
                <li class="highlight dropdown">Templates
                    <ul class="dropdown-content">
                        <li>Templates</li>
                        <li>ROS analyser (Norway)</li>
                        <li>Air Quality measuring stations</li>
                        <li>Industry Proximity</li>
                        <li>Pollen Data</li>
                    </ul>
                </li>
                <li class="highlight dropdown">
                    Help
                    <ul class="dropdown-content">
                        <li>Help</li>
                        <li>Why MORTIMAP?</li>
                        <li>Documentation</li>
                        <li>Contact us</li>
                    </ul>
                </li>
            </ul>

        </ul>
    </div>

</template>

<script>
export default {
    name: 'NavBarCommon',
}
</script>

<style scoped>
li {
    display: inline-block;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
}

li:hover {
    background-color: #f2f2f2;
}

.dropdown {
    position: relative;

}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    left: 0;
    top: 0;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.common-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>