import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '@/components/index/index'
import mooddetail from '@/components/mood/mooditem'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
      redirect: '/index',
      children: [
        {
          path: "index",
          component: index
        }
      ]
    },
    {
      path: '/mooddetail',
      name: '心情',
      component: mooddetail
    }
  ]
})
