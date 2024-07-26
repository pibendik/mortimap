<template>
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
</template>

<script>
export default {
    name: 'ResizerComponent',

}
</script>

<style scoped>
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
</style>