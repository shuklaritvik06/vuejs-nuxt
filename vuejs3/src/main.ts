import { createApp } from "vue";
import AppVue from "./App.vue";
import { router } from "./router";
import "./style.css";

createApp(AppVue).use(router).mount("#app");

router.beforeEach((to, from) => {
  // Cancel Navigation
  //   return false;
  console.log(to, from);
});

router.beforeResolve((to, from) => {
  // Cancel Navigation
  //   return false;
  console.log(to, from);
});

router.afterEach((to, from) => {
  // Cancel Navigation
  //   return false;
  console.log(to, from);
});

// In Component guard trigger when the hash or parameter changes
// Per route guard do not trigger on the hash or parameter changes it only trigger on complete route change

/**
 * beforeEach
 * beforeEnter
 * beforeResolve
 * afterEach
 */
