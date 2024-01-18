import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
import AboutViewVue from "../views/AboutView.vue";
import ContactViewVue from "../views/ContactView.vue";
import PostsViewVue from "../views/PostsView.vue";
import PostVue from "../views/Post.vue";
import NotFoundVue from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: HomeViewVue,
    name: "Home",
    alias: "/home"
  },
  {
    path: "/post/:id",
    component: PostVue,
    name: "Post",
    props: true
  },
  {
    path: "/about",
    component: AboutViewVue,
    name: "About",
    alias: ["/kaun"],
    beforeEnter: (to: any, from: any, next: any) => {
      console.log(to, from, next);
    }
  },
  {
    path: "/contact",
    component: ContactViewVue,
    name: "Contact"
  },
  {
    path: "/posts",
    component: PostsViewVue,
    name: "Posts"
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundVue,
    name: "NotFound"
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
