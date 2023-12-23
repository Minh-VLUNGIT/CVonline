const admin = [
  {
    path: "/CVvn",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "home",
        name: "admin-users",
        component: () => import("../pages/admin/usermana/IndexPage.vue"),
      },
      {
        path: "project",
        name: "admin-project",
        component: () => import("../pages/admin/userproject/IndexPage.vue"),
      },
      {
        path: "project/:id",
        name: "admin-viewwproject",
        component: () => import("../pages/admin/viewproject/IndexPage.vue"),
      },
    ],
  },
];

export default admin;
