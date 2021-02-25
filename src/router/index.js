import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  /**
   * router mặc định
   * Created BY: NLSON (25/02/2021)
   */
  {
    path: "/",
    name: "Index",
    component: Home,
  },
  /**
   * router students
   * Created BY: NLSON (25/02/2021)
   */
  {
    path: "/students",
    name: "Students",
    component: () =>
      import(/* webpackChunkName: "Students" */ "../views/Students.vue"),
  },
  {
    path: "/students/:id",
    name: "StudentDetail",
    component: () =>
      import(
        /* webpackChunkName: "StudentDetail" */ "../views/StudentDetails.vue"
      ),
    props: true,
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: () =>
      import(/* webpackChunkName: "Teachers" */ "../views/Teachers.vue"),
  },
  {
    path: "/classes",
    name: "Classes",
    component: () =>
      import(/* webpackChunkName: "Classes" */ "../views/Classes.vue"),
  },
  {
    path: "/subject",
    name: "Subject",
    component: () =>
      import(/* webpackChunkName: "Subject" */ "../views/Subject.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
  },
  /**
   * router 404
   * Created BY: NLSON (25/02/2021)
   */
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
