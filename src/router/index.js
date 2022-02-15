import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Animation from "../views/Animation";
import Question from "../views/Question";

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
    path: "/animation",
    name: "Animation",
    component: Animation,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
