import { createMemoryHistory, createRouter } from "vue-router";
import { authMiddleware } from "@/middlewares/auth";
import HomeView from "@/view/HomeView.vue";
import LoginView from "@/view/LoginView.vue";

const routes = [
  { name: "login", path: "/login", component: LoginView },
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: [authMiddleware],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
