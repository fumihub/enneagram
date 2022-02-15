import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About";
import Question from "../views/Question";
import Result from "../views/Result";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/question",
    name: "Question",
    component: Question,
  },
  {
    path: "/result",
    name: "Reslut",
    component: Result,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
