import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import index from '@/components/index/index'
import Test from '@/components/testButton/test'
=======
>>>>>>> 511d805b2376579d580d3c8c0984bf9ce0542443
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
<<<<<<< HEAD
      path: '/test',
      name: '测试button',
      component: Test,
=======
      path: '/mooddetail',
      name: '心情',
      component: mooddetail
>>>>>>> 511d805b2376579d580d3c8c0984bf9ce0542443
    }


  ]
})
