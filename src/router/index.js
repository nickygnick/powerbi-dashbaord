import { createMemoryHistory, createRouter } from "vue-router";
import LoginView from "@/view/LoginView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { name: "login", path: "/login", component: LoginView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
