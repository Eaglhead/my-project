import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/TopNav',
      name: 'TopNav',
      component: () => import(/* webpackChunkName: "about" */ './views/TopNav.vue'),
      children: [
        {
          path: '/',
          name: 'HomePage',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/PageBody/HomePage.vue')
        },
        {
          path: '/WaterWorks',
          name: 'WaterWorks',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/PageBody/WaterWorks.vue')
        },
        {
          path: '/Pump',
          name: 'Pump',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/PageBody/Pump.vue')
        },
        {
          path: '/Warn',
          name: 'Warn',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/PageBody/Warn.vue')
        },
        {
          path: '/Company',
          name: 'Company',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/PageBody/Company.vue')
        },
      ]
    }
  ]
})
