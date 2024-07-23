<template>
    <div class="admin-panel">
        <nav class="navbar">
            <div class="logo">Logo</div>
            <ul class="nav-list">
                <li>Features</li>
                <li>Templates</li>
                <li>Plans and pricing</li>
                <li>Help</li>
                <li class="highlight">Projects</li>
                <li class="highlight">Account</li>
            </ul>
        </nav>
        <div class="main-content">
            <aside class="menu-pane">
                <ul class="menu-list">
                    <li class="highlight">New project</li>
                    <li>Your projects</li>
                    <li>Shared with you</li>
                    <li>Archived projects</li>
                    <li>Trashed projects</li>
                </ul>
            </aside>
            <section class="project-display">
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
                        <!-- Project rows will be dynamically inserted here -->
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminPanel',
    // Component logic here
}
</script>

<style scoped>
.admin-panel {
    display: flex;
    flex-direction: column;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
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

.main-content {
    display: flex;
}

.menu-pane {
    flex: 1;
}

.menu-list {
    display: flex;
    flex-direction: column;
    list-style: none;
}

.menu-list li.highlight {
    font-weight: bold;
}

.project-display {
    flex: 4;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    text-align: left;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}
</style>