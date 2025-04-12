import { createMemoryHistory, createRouter } from "vue-router";
import LoginView from "../view/LoginView.vue";

const routes = [{ path: "/", name: "home", component: LoginView }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
