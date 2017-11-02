<template>
  <v-app light>
    <v-navigation-drawer
      permanent
      v-model="drawer"
      enable-resize-watcher
	  app
	  class="sidenav"
    >
	<v-container fill-height>
	<v-layout column align-center>
		<v-flex xs12 sm8 md6 align-end>
	     <h2>Nathan Casler</h2>
		</v-flex>
		<v-flex xs12 sm8 md6>
	     <p class="nav-title">Data enthusiast, software developer, performance optimizer, sometimes in shape.</p>
        </v-flex>
		<v-flex xs12 sm8 md6>
		<v-list>
          <v-list-tile 
            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in items"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
		</v-flex>
		<span></span>
		<v-flex xs12 sm8 md6>
		<v-list>
		  <v-list-tile avatar
		    router 
		    :to="item.to"
		    :key="i"
		    v-for="(item, i) in links"
		  >
		    <v-list-tile-content>
			  <v-icon small class="white--text" click="onClickLink(item.to)">{{item.icon}}</v-icon>
			</v-list-tile-content>
		  </v-list-tile>
		</v-list>
		</v-flex>
	  </v-layout>
	  </v-container>
    </v-navigation-drawer>
    <main>
      <v-content class="topo">
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <router-view class="mt-5"></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'
  export default {
    mixins: [Meta],

    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
		  { icon: 'home', title: 'Home', to: '/welcome' },
		  { icon: 'help', title: 'About', to: '/about' },
		  { icon: 'business', title: 'Projects', to: '/projects' },
        ],
		links: [
		  { icon: 'fa-github', title: 'Github', to: 'https://github.com/npcasler' },
		  { icon: 'fa-twitter', title: 'Twitter', to: 'https://twitter.com/npcasler' },
		  { icon: 'fa-linkedin', title: 'LinkedIn', to: 'https://linkedin.com/in/nathan-casler-05677b10/' }
		],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ncasler.net'
      }
    },
	methods: {
	  onClickLink (url) {
	    console.log("Routing to " + url);
		location.href = url;
	  }
	}
	  
  }
</script>

<style lang="stylus">
  @import './stylus/theme'

  .application--light .navigation-drawer {
    background-color: $teal.darken-2;
	color: #FFFFFF;
  }

  .application--light .navigation-drawer .list__tile:not(.list__tile--active) {
    color: #FFFFFF;
  }

  

  .nav-title {
    font-size: 16pt;
	font-weight: 500;
	color: rgba(255,255,255,0.5);
  }
  .sidenav {
	color: 'white';
	padding: 2rem 2rem;
	bottom: 0;
  }
  h1, h2, h3, h4 {
    font-family: 'Roboto+Slab', sans-serif;
	color: 'white';
  }

  .topo { 
    background-image: url('/static/topography_alpha.png');
	background-repeat: repeat;
  }

</style>
