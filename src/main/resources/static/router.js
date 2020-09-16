import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
import store from '/store.js'
import notFound from './views/notFound.js'
import home from './views/home.js'
import folderDetails from './views/folderDetails.js'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    routes: [{
        name: "home",
        path: '/',
        component: home
      },
      {
      name: "folderDetails",
      path: '/folders/:id',
      component: folderDetails
    },
      {

      
        path: "/404",
        alias: "*",
        name: "notfound",
        component: notFound
      }
    ]
  });
  

  
  
  export default router;