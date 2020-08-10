import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  
    {
      path: '/',
      //redirect:'/login',
      redirect:{
        name:'login'
      }
    },
    {
      path: '/home',
      name:"Home",
      component:Home,
    },
    {
      path: '/login',
      name:"login",
      component: () => import( '../views/Login.vue'),
    },
   {
    path: '/center',
    name: 'Center',
    component: () => import( '../views/Center.vue'),
    redirect:{ name:'introduction' },
    children:[
      { 
        path: 'introduction',
        name: 'introduction',
        component: () => import('../views/center/Introduction.vue'),
        meta:{ispass:true},
      },
      { // 账号添加
        path: 'feature', 
        name: 'feature',
        component: () => import('../views/center/Feature.vue'),
        meta:{ispass:true},
      }
    ]
  },
  {
    path: '/contact',
    name:"contact",
    component: () => import('../views/Contact.vue'),
    redirect:{ name:'university' },
    children:[
      { 
        path: 'university', 
        name: 'university',
        component: () => import('../views/contact/University.vue'),
        meta:{ispass:true},
      },
    ]
  },
  {
    path: '/teacher',
    name:"teacher",
    component: () => import('../views/Teacher.vue'),
    redirect:{ name:'teacherstaff' },
    children:[
      { 
        path: 'teacherstaff', 
        name: 'teacherstaff',
        component: () => import('../views/teacher/Teacherstaff.vue'),
        meta:{ispass:true},
      },
    ]
  },
  {
    path: '/enterprise',
    name:"enterprise",
    component: () => import('../views/Enterprise.vue'),
    redirect:{ name:'enterprisecooperation' },
    children:[
      { 
        path: 'enterprisecooperation', 
        name: 'enterprisecooperation',
        component: () => import('../views/enterprise/Enterprisecooperation.vue'),
        meta:{ispass:true},
      },
    ]
  },
  {
    path: '/resource',
    name:"resource",
    component: () => import('../views/Resource.vue'),
    redirect:{ name:'resourceshare' },
    children:[
      { 
        path: 'resourceshare', 
        name: 'resourceshare',
        component: () => import('../views/resource/Resourceshare.vue'),
        meta:{ispass:true},
      },
    ]
  },
  {
    path: '/project',
    name:"project",
    component: () => import('../views/Project.vue'),
    redirect:{ name:'projectlist' },
    children:[
      { 
        path: 'projectlist', 
        name: 'projectlist',
        component: () => import('../views/project/Projectlist.vue'),
        meta:{ispass:true},
      },
      { 
        path: 'projectcenter', 
        name: 'projectcenter',
        component: () => import('../views/project/Projectcenter.vue'),
        meta:{ispass:true},
      },
    ]
  },
  {
    path: '/news',
    name:"news",
    component: () => import('../views/News.vue'),
    redirect:{ name:'notice' },
    children:[
      { 
        path: 'notice', 
        name: 'notice',
        component: () => import('../views/news/Notice.vue'),
        meta:{ispass:true},
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
