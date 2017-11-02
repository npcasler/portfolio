<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
	  <div class="text-xs-center">
	    <img src="/static/v.png" alt="Projects" class="mb-5" />
	  </div>
	  <v-expansion-panel popout>
	    <v-expansion-panel-content v-for="(project,i) in projects" :key="i">
		  <div slot="header">{{project.name}}</div>
		  <v-card class="grey lighten-3">
		    <v-card-text >{{project.description}}</v-card-text>
			<v-btn v-if="project.url" flat primary @click="onClickLink(project.url)">Website</v-btn>
			
		  </v-card>
		</v-expansion-panel-content>
	  </v-expansion-panel>
	</v-flex>
  </v-layout>
</template>

<script>
export default {

  data () {
    return {
	  projects: [
	    { "name": "BIEN", "url": "http://bien3.org", "description": "The Botanical Information and Ecology Network is group of researchers has been aimed at producing species ranges for both the current and future climate based on a series of statistical models. My role in this group has been largely as a optimizer. I have worked to provide meaningful performance improvements to both the orchestration and processing."},
	    { "name": "Forest Forecasts", "url": "http://forestforecasts.org", "description": "The Forest Forecasts projects was formed with the goal of forecasting the future of North American forests based on a variety of carbon emission scenarios. The project included the study of the 81 of the most characteristic tree species in North America. The simulations were run at a 1km spatial resolution and were forecast up to the next century at 100 year increments." },
	    { "name": "Data-Intensive Farm Management", "url": "https://difm.roger.ncsa.illinois.edu", "description": "The Data-Intensive Farm Management project is a collaborative effort between agricultural engineers, economists and software developers which is looking to improve the yield to input ratio generated from yearly harvests by tuning field applications with regards to their yield response." },
	    { "name": "Machine assisted landform classification", "url": "", "description": "The Machine-Assisted Landform Recognition project is looking to provide viable geomorphologic classification algorithms that can keep pace with the size and resolution of incoming LiDAR-derived Digital Elevation Models. This project hopes to classify structures at both the native resolution, but also extract the natural hierarchy of the assemblages within which they are embedded." },
	    { "name": "911 Address Management", "url": "", "description": "This effort was targeted at providing a collaborative mechanism for state, county and local authorities to validate and perform QA/QC on the state-wide address database. This application provided online editing and authorization for the institutions to interact with one another." },
	    { "name": "Spatial Bootcamp", "url": "http://spatialcarpentry.github.io", "description": "Tutorials and introductory materials for spatial analysis using FOSS4G. This workshop series was generated in hopes of providing useful familiarity of geospatial analysis to life scientists who interact with spatial data regularly. The material focused on building a familiarity with QGIS and web programming to allow researchers to produce valid analysis without worrying about licensing fees or costly software." }
	  ]
	}
  },
  methods: {
    onClickLink (url) {
	  location.href = url;
	}
  }
}
</script>
