webpackJsonp([5],{100:function(t,e,n){function i(t){var e=r[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./AboutView.vue":[101,3],"./InspireView.vue":[102,2],"./ProjectView.vue":[103,1],"./WelcomeView.vue":[104,0]};i.keys=function(){return Object.keys(r)},t.exports=i,i.id=100},40:function(t,e){t.exports={"/":{title:"ncasler.net",description:"Home",keywords:"ncasler,gis,webdev,data science,geospatial"},"/inspire":{title:"Create something amazing",description:"",keywords:""},"/about":{title:"About me",description:"",keywords:""},"/projects":{title:"Projects",description:"A list of previous projects",keywords:""}}},41:function(t,e,n){"use strict";function i(t){var e=n.i(d.a)(),i=n.i(f.a)();return n.i(m.sync)(e,i),{app:new c.a({router:i,store:e,ssrContext:t,render:function(t){return t(p.a)}}),router:i,store:e}}e.a=i;var r=n(50),o=n.n(r),a=n(9),c=n.n(a),s=n(97),u=n.n(s),l=n(91),p=n.n(l),v=n(45),d=n(49),f=n(48),m=n(98);n.n(m);c.a.use(u.a),o()(v.a).forEach(function(t){c.a.component(t,v.a[t])})},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42),r=n.n(i),o=n(9),a=(n.n(o),n(43)),c=(n.n(a),n(41)),s=n.i(c.a)(),u=s.app,l=s.router,p=s.store;window.__INITIAL_STATE__&&p.replaceState(window.__INITIAL_STATE__),l.onReady(function(){l.beforeResolve(function(t,e,n){var i=l.getMatchedComponents(t),o=l.getMatchedComponents(e),a=!1,c=i.filter(function(t,e){return a||(a=o[e]!==t)});if(!c.length)return n();r.a.all(c.map(function(e){if(e.asyncData)return e.asyncData({store:p,route:t})})).then(function(){n()}).catch(n)}),u.$mount("#app")})},45:function(t,e,n){"use strict";var i=n(92),r=n.n(i);e.a={Vuetify:r.a}},46:function(t,e,n){"use strict";var i=n(40);e.a={watch:{$route:function(){this.setMeta()}},created:function(){return},mounted:function(){this.$vuetify.load(this.setMeta)},methods:{setMeta:function(){if("undefined"!=typeof document){var t=i[this.$route.path]||{};document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description),document.querySelector('meta[name="keywords"]').setAttribute("content",t.keywords)}}}}},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(46);e.default={mixins:[i.a],data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"},{icon:"help",title:"About",to:"/about"},{icon:"business",title:"Projects",to:"/projects"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"ncasler.net"}}}},48:function(t,e,n){"use strict";(function(t){function i(t,e){return{path:t,meta:s[t],component:function(t){return n(100)("./"+e+"View.vue").then(t)}}}function r(){var e=new c.a({base:t,mode:"history",scrollBehavior:function(){return{y:0}},routes:[i("/","Welcome"),i("/inspire","Inspire"),i("/about","About"),{path:"*",redirect:"/"}]});return e.beforeEach(function(t,e,n){"undefined"!=typeof ga&&(ga("set","page",t.path),ga("send","pageview")),n()}),e}e.a=r;var o=n(9),a=n.n(o),c=n(95),s=n(40);a.a.use(c.a)}).call(e,"/")},49:function(t,e,n){"use strict";function i(){return new a.a.Store({state:{},actions:{},mutations:{},getters:{}})}e.a=i;var r=n(9),o=n.n(r),a=n(99);o.a.use(a.a)},87:function(t,e){},91:function(t,e,n){function i(t){n(87)}var r=n(23)(n(47),n(94),i,null,null);t.exports=r.exports},92:function(t,e,n){var i=n(23)(null,n(93),null,null,null);t.exports=i.exports},93:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",[t._v("Vuetify")])},staticRenderFns:[]}},94:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{temporary:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return n("v-list-tile",{key:i,attrs:{router:"",to:e.to}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{fixed:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("remove")])],1),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer"),n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),n("main",[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)],1),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""}},[t._v("compare_arrows")])],1),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© 2017")])])],1)},staticRenderFns:[]}}},[44]);