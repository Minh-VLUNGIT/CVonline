const minh = [
  {
    path: "/minhmup/view",
    component: () => import("../pages/minh/viewproject/IndexPage.vue"),
  },
  {
    path: "/minhmup/add",
    component: () => import("../pages/minh/addproject/IndexPage.vue"),
  },
  {
    path: "/minhmup/update/:id",
    component: () => import("../pages/minh/viewproject/IndexPage.vue"),
  },
];

export default minh;
