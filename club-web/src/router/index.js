import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Manager from '../views/manager/Box.vue'
import Member from '../views/member/Box.vue'
import Admin from '../views/admin/Box.vue'
import Password from '../views/Password.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reset',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResetPassword.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "about" */ '../views/Activity.vue')
  },
  {
    path: '/actinfo',
    name: 'ActivityInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivityInfo.vue')
  },
  {
    path: '/clubinfo',
    name: 'ClubInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClubInfo.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    redirect:'/manager/club',
    children: [
      {
        path: 'club',
        name: 'club',
        component: () => import('../views/manager/ClubManage.vue')
      },
      {
        path: 'act',
        name: 'act',
        component: () => import('../views/manager/ActivityManage.vue')
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('../views/manager/MemberManage.vue')
      },
      {
        path: 'password',
        name: 'password',
        component: Password
      },
    ]
  },
  {
    path: '/member',
    name: 'member',
    component: Member,
    redirect:'/member/info',
    children: [
      {
        path: 'info',
        name: 'info',
        component: () => import('../views/member/PersonInfo.vue')
      },
      {
        path: 'club',
        name: 'club',
        component: () => import('../views/member/ClubInfo.vue')
      },
      {
        path: 'password',
        name: 'password',
        component: Password
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect:'/admin/club',
    children: [
      {
        path: 'club',
        name: 'club',
        component: () => import('../views/admin/ClubManage.vue')
      },
      {
        path: 'act',
        name: 'act',
        component: () => import('../views/admin/ActivityManage.vue')
      },
      {
        path: 'password',
        name: 'password',
        component: Password
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
