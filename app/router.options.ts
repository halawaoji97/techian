import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return {
      el: to.hash,
      x: 0,
      y: 0,
      behavior: "smooth",
    };
  },
};
