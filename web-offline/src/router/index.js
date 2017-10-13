import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/Hello'
import TestRequest from '@/components/testRequest/testRequest'
import ExampleAnalyse from '@/components/exampleAnalyse/exampleAnalyse'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Hello,
      redirect:'/hello',
      children:[
        {
          path:"hello",
          component:Hello
        }
      ]
    },
    {
      path: '/TestRequest',
      name: '测试请求',
      component: TestRequest
    },
    {
      path: '/ExampleAnalyse',
      name: '样例分析',
      component: ExampleAnalyse
    }
  ]
})
