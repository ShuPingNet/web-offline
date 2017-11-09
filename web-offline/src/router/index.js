import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import Test from '@/components/testButton/test'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
      redirect:'/index',
      children:[
        {
          path:"index",
          component:index
        }
      ]
    },
    {
      path: '/test',
      name: '测试button',
      component: Test,
    }


  ]
})
