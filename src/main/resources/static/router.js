import Vue from './libs/vue.esm.browser.js'
import VueRouter from './libs/vue-router.esm.browser.js'
import store from '/store.js'
import notFound from './views/notFound.js'
import home from './views/home.js'
import register from './views/register.js'
import folderDetails from './views/folderDetails.js'
import createNewFolder from './views/addFolder.js'
import documentDetails from './views/documentDetails.js'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    routes: [{
        name: "home",
        path: '/',
        component: home
      },
          {
            name: "register",
            path: '/register',
            component: register
          },
      {
      name: "folderDetails",
      path: '/folders/:id',
      component: folderDetails
    },
          {
          name: "documentDetails",
          path: '/document/:id',
          component: documentDetails
        },
      {

      
        path: "/404",
        alias: "*",
        name: "notfound",
        component: notFound
      },
      {

      name: "createNewFolder",
      path: '/createNewFolder',
      component: createNewFolder,
            meta: {
              reguiresAuth: true
            }

      }
    ]
  });

  router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.reguiresAuth)) {
          // need login
          if (!store.state.user) {
            next({
              name: "home"
            });
          } else {
            next();
          }
        } else {
          next();
        }
      });

  

  
  
  export default router;