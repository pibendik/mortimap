import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router"; // Import the router from the router directory

createApp(App).use(router).mount("#app");
