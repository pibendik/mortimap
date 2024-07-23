<template>
    <div class="landing-page">


        <header>
            <div>
                <div>MORTIMAP</div>
            </div>
            <div>
                <!-- Simplified Navbar as a horizontal list -->
                <ul class="navbar">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li><button class="signup-button">Sign up</button></li>
                    <li><button class="login-button">Log in</button></li>
                </ul>
            </div>


        </header>

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
                <p>&copy; 2022 Your Company. All rights reserved.</p>
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
    padding: 2rem 0;
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

.landing-page {
    font-family: Arial, sans-serif;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: black;
}

.navbar {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar li {
    margin-right: 20px;
    /* Adjust spacing between items */
}

.navbar li:last-child {
    margin-right: 0;
    /* Remove margin for the last item */
}

.signup-button,
.login-button {
    /* Button styles */
    padding: 5px 10px;
    cursor: pointer;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 5px;
}

.login-button {
    background-color: #28a745;
}
</style>