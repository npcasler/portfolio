import Vue from 'vue'
import Router from 'vue-router'

import Inspire from '../components/Inspire'
import Welcome from '../components/Welcome'
import About from '../components/About'
import ProjectList from '../components/ProjectList'

// The meta data for your routes
const meta = require('./meta.json')

// Function to create routes
// Is default lazy but can be changed
function route (path, view) {
  return {
    path: path,
    meta: meta[path],
    component: resolve => import(`pages/${view}View.vue`).then(resolve)
  }
}


Vue.use(Router)

export function createRouter () {
    const router = new Router({
      base: __dirname,
      mode: 'history',
      scrollBehavior: () => ({ y: 0 }),
      routes: [ 
        { path: '/', component: Welcome },
        { path: '/inspire', component: Inspire },
        { path: '/about', component: About },
        { path: '/projects', component: ProjectList},
        { path: '*', redirect: '/'}
      ]
    })

    // Send a pageview to Google Analytics
    /*router.beforeEach((to, from, next) => {
        if (typeof ga !== 'undefined') {
            ga('set', 'page', to.path)
            ga('send', 'pageview')
        }
        next()
    })*/

    return router
}
