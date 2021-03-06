import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/juego",
    name: "Juego",
    component: () => import(/* webpackChunkName: "about" */ "../views/Juego.vue"),
    props: true
  },
];

const router = new VueRouter({
  routes,
});

export default router;
