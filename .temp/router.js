import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/views/test'
import CarCalculator from '@/views/CarCalculator'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/Test',
      name: 'Test',
      component: Test
    }, {
      path: '/CarCalculator',
      name: 'CarCalculator',
      component: CarCalculator
    }
  ]
})
