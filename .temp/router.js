import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/views/test'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})
