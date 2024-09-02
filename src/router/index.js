import { createRouter, createWebHistory } from "vue-router";

import routes from "./route";

const router = createRouter({
  history: createWebHistory(),
  routes,
  //   linkActiveClass: "active",
});

router.beforeEach((to, from) => {
  if (to.meta.auth) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath,
      },
    };
  }
});

export default router;
