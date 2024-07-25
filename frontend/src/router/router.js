import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import SignUpPage from "@/components/SignUpPage.vue";
import CompleteEditor from "@/components/CompleteEditor.vue";
import AdminPanel from "@/components/AdminPanel.vue";
import AssignmentCreator from "@/components/AssignmentCreator.vue";

// src/router/index.js

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory() instead of "history" mode
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,

      meta: { hideNavbar: false },
    },
    {
      path: "/loginPage",
      name: "LoginPage",
      component: LoginPage,
      meta: { hideNavbar: true },
    },
    {
      path: "/signUpPage",
      name: "SignUpPage",
      component: SignUpPage,
      meta: { hideNavbar: true },
    },
    {
      path: "/editor",
      name: "CompleteEditor",
      component: CompleteEditor,
      meta: { hideNavbar: true },
    },
    {
      path: "/admin",
      name: "AdminPanel",
      component: AdminPanel,
      meta: { hideNavbar: false },
    },
    {
      path: "/assignment-creator",
      name: "AssignmentCreator",
      component: AssignmentCreator,
      meta: { hideNavbar: false },
    },
  ],
});

export default router;
