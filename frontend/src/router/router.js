import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import CompleteEditor from "@/components/CompleteEditor.vue";

// src/router/index.js

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory() instead of "history" mode
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/loginPage",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/editor",
      name: "CompleteEditor",
      component: CompleteEditor,
    },
  ],
});

export default router;
