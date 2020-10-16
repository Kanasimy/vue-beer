import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Item from './components/item.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'item',
      component: Item,
      props: (routes) => { query: page: id },
    }
  ]
})


new Vue({
  el: '#app',
  render: h => h(App)
})
