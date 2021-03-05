import { createWebHistory, createRouter } from "vue-router";
import Posts from ".././Views/Posts.vue";
import Search from ".././components/Search.vue";
import Docs from ".././Views/Docs.vue"

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/search",
    name: "Search",
    props(route) {
      return {  pokemon_name: route.query.pokemon_name }
    },
    component: Search
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;