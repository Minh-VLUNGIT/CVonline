import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";
import minh from "./minh.js";
const routes = [...admin, ...minh];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
