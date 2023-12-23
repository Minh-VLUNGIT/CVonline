import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";
import minh from "./minh.js";
import home from "./home.js";
const routes = [...home, ...admin, ...minh];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
