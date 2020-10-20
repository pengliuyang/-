import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:'/ChuanDa/66/leftmenu/0',
    // redirect: {
    //   name: "Home",
    // },
    // component: () => import("../views/Homecopy.vue"),
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home,
  //   props:true,
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/ChuanDa/:id",
    name:"ChuanDa",
    props:true,
    component: () => import("../views/Levelsone.vue"),
    children: [
      {
        path: "leftmenu/:a",
        name: "Leftmenu",
        props:true,
        component: () => import("../views/Contain.vue"),
      },
      {
        path: "leftmenu/:a/description/:b",
        name: "Description",
        props:true,
        component: () => import("../views/Description.vue"),
      
      },
    ],
  },
  {
    path: "*",
    component: () => import("../views/Notfound.vue"),
   
  },

];

const router = new VueRouter({
  mode:"history",
  base:'/ms/',
  routes,
});

export default router;
