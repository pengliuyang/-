import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    //redirect:'/login',
    redirect: {
      name: "login",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/center",
    name: "Center",
    component: () => import("../views/Center.vue"),
    redirect: { name: "introduction" },
    children: [
      {
        path: "introduction",
        name: "introduction",
        component: () => import("../views/center/Introduction.vue"),
        meta: { ispass: true },
      },
      {
        path: "feature",
        name: "feature",
        component: () => import("../views/center/Feature.vue"),
        meta: { ispass: true },
      },
      {
        path: "guarantee",
        name: "guarantee",
        component: () => import("../views/center/Guarantee.vue"),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
    redirect: { name: "university" },
    children: [
      {
        path: "university",
        name: "university",
        component: () => import("../views/contact/University.vue"),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "/teacher",
    name: "teacher",
    component: () => import("../views/Teacher.vue"),
    redirect: { name: "teacherstaff" },
    children: [
      {
        path: "teacherstaff",
        name: "teacherstaff",
        component: () => import("../views/teacher/Teacherstaff.vue"),
        meta: { ispass: true },
      },
      {
        path: "teachersitems",
        name: "teachersitems",
        component: () => import("../views/teacher/Teacheritems.vue"),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "/enterprise",
    name: "enterprise",
    component: () => import("../views/Enterprise.vue"),
    redirect: { name: "enterprisecooperation" },
    children: [
      {
        path: "enterprisecooperation",
        name: "enterprisecooperation",
        component: () =>
          import("../views/enterprise/Enterprisecooperation.vue"),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "/resource",
    name: "resource",
    component: () => import("../views/Resource.vue"),
    redirect: { name: "resourceshare" },
    children: [
      {
        path: "resourceshare",
        name: "resourceshare",
        component: () => import("../views/resource/Resourceshare.vue"),
        meta: { ispass: true },
      },
      {
        path: "databaseresource",
        name: "databaseresource",
        component: () => import("../views/resource/Databaseresource.vue"),
        meta: { ispass: true },
      },
      {
        path: "excellentmooc",
        name: "excellentmooc",
        component: () => import("../views/resource/Excellentmooc.vue"),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "/project",
    name: "project",
    component: () => import("../views/Project.vue"),
    redirect: { name: "projectlist" },
    children: [
      {
        path: "projectlist",
        name: "projectlist",
        component: () => import("../views/project/Projectlist.vue"),
        meta: { ispass: true },
      },
      {
        path: "projectlistone",
        name: "projectlistone",
        component: () => import("../views/project/Projectlistone.vue"),
        meta: { ispass: true },
      },
      {
        path: "projectlisttwo",
        name: "projectlisttwo",
        component: () => import("../views/project/Projectlisttwo.vue"),
        meta: { ispass: true },
      },
      {
        path: "centralfeatures",
        name: "centralfeatures",
        component: () => import("../views/project/Projectcenter.vue"),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/News.vue"),
    redirect: { name: "notice" },
    children: [
      {
        path: "notice",
        name: "notice",
        component: () => import("../views/news/Notice.vue"),
        meta: { ispass: true },
      },
      {
        path: "noticedetail",
        name: "noticedetail",
        component: () => import("../views/news/Noticedetail.vue"),
        meta: { ispass: true },
      },
    ],
  },
  {
    path: "/mystyle",
    name: "mystyle",
    component: () => import("../views/Mystyle.vue"),
    redirect: { name: "awards" },
    children: [
      {
        path: "awards",
        name: "awards",
        component: () => import("../views/mystyle/Awards.vue"),
        meta: { ispass: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
