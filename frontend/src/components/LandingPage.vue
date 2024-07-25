<template>
    <div class="landing-page">
        <main>
            <!-- Main content -->
            <section class="hero">
                <div class="container">
                    <h1>MORTIMAP</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>

            <section class="features">
                <div class="container">
                    <h2>Features</h2>
                    <div class="feature">
                        <img class="wallpaperimg" src="@/assets/previewapp.png" alt="Feature Image" />
                        <h3>Feature 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="feature">
                        <img class="smallimg" src="@/assets/layers.jpg" alt="Feature Image" />
                        <h3>Feature 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="feature">
                        <img class="smallimg" src="@/assets/layers.jpg" alt="Feature Image" />
                        <h3>Feature 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <!-- Standard footer -->
            <div class="container">
                <p>&copy; 2024, Bendik Svalastog, LHM. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
};
</script>

<style scoped>
.features {
    background-color: #f8f9fa;
    padding: 2rem 0;
    text-align: center;

}

.hero {
    background-color: #f8f9fa;
    padding: 3rem 0 2rem;
    text-align: center;

}

.smallimg {
    max-width: 100px;
    max-height: 100px;
}

.wallpaperimg {
    width: 80%;
    height: 300px;
    object-fit: cover;
    object-position: top;
}
</style>