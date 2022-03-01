import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Animation from "../views/Animation";
import Question from "../views/Question";
import Result from "../views/Result";
import TypeExplain from "../views/TypeExplain";

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
    path: "/animation",
    name: "Animation",
    component: Animation,
  },
  {
    path: "/typeExplain",
    name: "TypeExplain",
    component: TypeExplain,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
