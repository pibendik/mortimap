<template>
    <div class="landing-page">
        <main>
            <!-- Main content -->
            <section class="hero centerer">
                <div class="container">
                    <h1>MORTIMAP</h1>
                    <img class="smallimg" src="@/assets/layers.jpg" alt="map layers illustration" />

                    <p>GIS (Geographic Information System) technology is becoming increasingly important in various
                        industries, including urban planning, environmental management, transportation, and emergency
                        response. It allows professionals to analyze and visualize spatial data, enabling them to make
                        informed decisions and solve complex problems. However, working with GIS data often requires
                        manual labor, which can be time-consuming and prone to errors.</p>
                    <p>Mortimap is revolutionizing the way GIS data is processed by providing a platform that leverages
                        crowd-sourcing to streamline manual labor in a rigorous and user-friendly manner. By harnessing
                        the power of experts in the field, Mortimap ensures that the data collected is accurate and
                        reliable. The platform offers a range of tools and features that make it easy for users to
                        contribute their expertise and collaborate with others.</p>
                    <p>With Mortimap, experts can easily access and contribute to a vast amount of spatial data, making
                        it more accessible and useful for decision-making. The platform provides an "idiot-proof"
                        interface that simplifies complex GIS tasks, allowing users to focus on their expertise rather
                        than technical challenges. By democratizing GIS technology, Mortimap empowers professionals from
                        various backgrounds to contribute to the development of smarter and more sustainable solutions.
                    </p>
                    <img class="wallpaperimg" src="@/assets/previewapp.png" alt="Urban Planning" />

                </div>
            </section>

            <section class="features centerer">
                <div class="container">
                    <h2>Benefits of Visualizing GIS Data by Toggling Map Layers</h2>

                    <div class="feature">
                        <h3>Urban Planning</h3>

                        <img class="wallpaperimg" src="@/assets/urban_planning.jpg" alt="Urban Planning" />
                        <p>
                            Urban planners can toggle map layers to visualize different aspects of a city, such as
                            zoning regulations, transportation networks, and population density. This helps them make
                            informed decisions about land use, infrastructure development, and urban design.
                        </p>
                    </div>

                    <div class="feature">
                        <h3>Environmental Management</h3>

                        <img class="wallpaperimg" src="@/assets/environmental_management.png"
                            alt="Environmental Management" />
                        <p>
                            Environmentalists can use map layers to analyze and monitor various environmental factors,
                            such as vegetation cover, water bodies, and wildlife habitats. By toggling different layers,
                            they can identify areas that require conservation efforts or are at risk of environmental
                            degradation.
                        </p>
                    </div>

                    <div class="feature">
                        <h3>Transportation</h3>

                        <img class="wallpaperimg" src="@/assets/transportation.jpg" alt="Transportation" />
                        <p>
                            In the transportation industry, toggling map layers can provide valuable insights into
                            traffic patterns, road conditions, and public transportation routes. This information helps
                            optimize transportation systems, improve traffic flow, and enhance the overall efficiency of
                            transportation networks.
                        </p>
                    </div>

                    <div class="feature">
                        <h3>Emergency Response</h3>

                        <img class="wallpaperimg" src="@/assets/emergency_response.jpg" alt="Emergency Response" />
                        <p>
                            During emergencies, such as natural disasters or public health crises, toggling map layers
                            can be crucial for emergency responders. They can overlay layers showing evacuation routes,
                            medical facilities, and affected areas to coordinate rescue efforts, allocate resources, and
                            make informed decisions in real-time.
                        </p>
                    </div>

                    <div class="feature">
                        <h3>Real Estate</h3>

                        <img class="wallpaperimg" src="@/assets/real_estate.jpg" alt="Real Estate" />
                        <p>
                            Real estate professionals can benefit from toggling map layers to assess property values,
                            proximity to amenities, and neighborhood characteristics. By visualizing different layers,
                            they can identify potential investment opportunities, understand market trends, and provide
                            valuable information to clients.
                        </p>
                    </div>
                </div>
            </section>
            <section class="reviews centerer">
                <div class="container">
                    <h2>Reviews and Sponsors</h2>

                    <div class="review">
                        <img class="smallimg" src="@/assets/hillbom.jpeg" alt="Morten Hillbom" />
                        <blockquote class="review-quote">
                            <p class="quote">"Mortimap is an absolute game-changer in the world of GIS. It is a monumental leap
                                forward in terms of efficiency, accuracy, and user-friendliness. I have been working
                                with GIS for over 20
                                years, and I can confidently say that Mortimap is going to revolutionize the industry.
                                It will become
                                ubiquitous for anyone working with spatial data. The platform's advanced features,
                                intuitive interface, and seamless collaboration capabilities make it the ultimate tool
                                for
                                professionals in the field. Mortimap is a masterpiece that will shape the future of
                                GIS."</p>
                            <footer class="review-author">- Morten Hillbom, GIS Expert</footer>
                        </blockquote>
                    </div>

                    <hr>
                    <div class="sponsor">
                        <img class="smallimg" src="@/assets/celsia-logo.svg" alt="Sponsor Logo" />
                        <p class="sponsor-description">We are proud to be sponsored by Celsia, a leading
                            provider of pure awesomeness and other solutions. Their support has been instrumental in the
                            development and success of Mortimap. Without them, even the very name of Mortimap would
                            never have been possible.
                            Together, we are transforming the way GIS data is processed and empowering professionals
                            worldwide.</p>
                            <p class="quote">
                                [...] That is why we pledge one million million NOK to Mortimap.
                            </p>
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
p {
    text-align: left;
}

.centerer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.container {
    max-width: 60%;
}

.features {
    padding: 2rem 0;
    text-align: center;

}

.hero {
    padding: 3rem 0 2rem;
    text-align: center;

}

.smallimg {
    max-width: 200px;
    max-height: 200px;
    float: left;
    margin-right: 1.6rem;
    margin-bottom: 1rem;
}

.wallpaperimg {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top;
}

.reviews {
    padding: 3rem;
    text-align: center;
    background-color: rgb(233, 233, 233);
}

.review-author {
    font-style: italic;
}

.quote {
    font-style: italic;
    font-size: 1.2rem;
    margin-top: 1rem;
    color: gray;
}
</style>