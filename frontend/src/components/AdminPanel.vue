<template>
    <div class="admin-panel">
        <nav class="navbar inner-navbar">
            <ul>
                <router-link to="/">HOME</router-link>

            </ul>
            <ul class="nav-list">
                <li class="highlight dropdown">
                    Features
                    <ul class="dropdown-content">
                        <li>ROS analyser (Norway)</li>
                        <li>Air Quality measuring stations</li>
                        <li>Industry Proximity</li>
                        <li>Pollen Data</li>
                    </ul>
                </li>
                <li>Templates</li>
                <li>Plans and pricing</li>
                <li class="highlight dropdown">
                    Help
                    <ul class="dropdown-content">
                        <li>Why MORTIMAP?</li>
                        <li>Documentation</li>
                        <li>Contact us</li>
                    </ul>
                </li>
                <li class="highlight">Projects</li>
                <li class="highlight dropdown">
                    Account
                    <ul class="dropdown-content">
                        <li>john.lennon@proton.com</li>
                        <li>Account Settings</li>
                        <li>Subscription</li>
                        <li>Log out</li>
                    </ul>
                </li>
            </ul>
        </nav>
        <aside class="menu-pane">
            <ul class="menu-list">
                <li class="highlight" @click="showModal = true">New project</li>
                <li>All projects</li>
                <li>Your projects</li>
                <li>Shared with you</li>
                <li>Archived projects</li>
                <li>Trashed projects</li>
            </ul>
        </aside>
        <div class="main-content">

            <section class="project-display">
                <div class="caption">
                    <h2>Project List</h2>
                </div>
                <div class="search-box-container">
                    <div class="search-box">
                        <input type="text" placeholder="Search projects...">
                        <i class="search-icon"></i> <!-- Placeholder for the search icon -->
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox"></th>
                            <th>Name</th>
                            <th>Owner</th>
                            <th>Last Modified</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="project in sortedProjects" :key="project.id">
                            <td><input type="checkbox"></td>
                            <td>{{ project.projectName }}</td>
                            <td>{{ project.projectManager }}</td>
                            <td>{{ project.lastModified }}</td>
                            <!-- Assuming you want to use startDate as lastModified -->
                            <td>{{ project.actions }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <span class="close" @click="showModal = false">&times;</span>
                <h2>New Project</h2>
                <div class="search-box">

                    <input type="text" placeholder="Project Name" v-model="projectName">
                </div>
                <div class="modal-footer">
                    <button class="cancel-button" @click="showModal = false">Cancel</button>
                    <button class="create-button" @click="createProject">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mockData from '@/assets/mock-data.json';

export default {
    data() {
        return {
            showModal: false,
            projectName: '',
        };
    },
    methods: {
        createProject() {
            // Implement project creation logic here
            console.log("Project created:", this.projectName);
            this.showModal = false;
            this.projectName = ''; // Reset input field
            this.$router.push('/assignment-creator');
        },
    },
    name: 'AdminPanel',
    computed: {
        sortedProjects() {
            return mockData.sort((a, b) => {
                // Assuming startDate is in 'YYYY-MM-DD' format; if not, you'll need to adjust parsing
                const dateA = new Date(a.lastModified);
                const dateB = new Date(b.lastModified);
                return dateA - dateB; // For ascending order; use `dateB - dateA` for descending
            });
        },
    },
}
</script>

<style scoped>
input {
    padding: 0.5rem;
    border: none;
    width: 100%;
}

input[type="text"]:focus {
    outline: none;
    border-color: grey;
    background-color: #f2f2f2;
}

button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    opacity: 0.8;
}

.cancel-button {
    background-color: #f44336;
    /* Red */
    color: white;
}

.create-button {
    background-color: #254e27;
    /* Green */
    color: white;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    width: 280px;
    z-index: 1;
    right: 0;
    font-weight: normal;
}

.dropdown:hover .dropdown-content {
    display: block;
}

/* Style dropdown links */
.dropdown-content li {
    color: black;
    text-decoration: none;
    display: block;
}

.dropdown-content li:hover {
    background-color: #ffffff;
    color: #0b222a;
    font-weight: bold;
}

.search-box-container {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;

}

.search-box {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0.5rem;
}

.admin-panel {
    display: grid;
    grid-template-rows: auto 1fr;
    /* Navbar height is auto, main content takes the rest */
    grid-template-columns: 1fr 5fr;
    /* Two columns, left is smaller */
    grid-template-areas:
        "navbar navbar"
        "menu main";
    height: 100vh;
    /* Set the height to 100% of the viewport height */
}

.navbar {
    display: flex;
    justify-content: space-between;
    grid-area: navbar;
    margin: 0;
    /* Adjusted to 0 because the grid gap can handle spacing */
}

.inner-navbar {
    background-color: #f5e9c68b;
}

.inner-navbar ul {
    padding: 0.6rem;
    margin: 0;

}

.inner-logo-container {
    height: fit-content;
    display: grid;
    place-items: center;

}

.main-content {
    display: grid;
    grid-area: main;
    grid-template-columns: 1fr;
    /* Ensures content takes full width of its area */
}

.menu-pane {
    grid-area: menu;
    background-color: #F5E9C6;
}

.nav-list {
    display: flex;
    list-style: none;
}

.nav-list li {
    margin: 0 1rem;
}

.nav-list li.highlight {
    font-weight: bold;
}


.menu-list {
    padding-left: 0;
    flex-direction: column;
    list-style: none;
}

.menu-list li.highlight {
    font-weight: bold;
}

.project-display {
    flex: 4;
    padding: 2rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    text-align: left;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}

li {
    padding: 0.5rem;
}

li:hover {
    background-color: #AAD3DF;
}

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    /* Adjust based on preference */
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
}

.modal-footer button {
    margin-left: 10px;
}
</style>