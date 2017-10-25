<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
	  <div class="text-xs-center">
	    <img src="/static/v.png" alt="Projects" class="mb-5" />
	  </div>
	  <v-expansion-panel>
	    <v-expansion-panel-content v-for="(project,i) in projects" :key="i">
		  <div slot="header">{{project.name}}</div>
		  <v-card>
		    <v-card-text class="grey">{{project.description}}</v-card-text>
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
	    { "name": "BIEN", "url": "http://bien3.org", "description": "Botanical Information and Ecology Network"},
	    { "name": "Forest Forecasts", "url": "http://forestforecasts.org", "description": "Forecasting the future of North American forests based on Carbon emissions" },
	    { "name": "Data-Intensive Farm Management", "url": "difm.roger.ncsa.illinois.edu", "description": "Generating algorithms for field applications" },
	    { "name": "Machine assisted landform classification", "url": "", "description": "Multi-scale methods for classifying geomorphologic features" },
	    { "name": "911 Address Management", "url": "", "description": "Application for editing and managing Arizona address database" },
	    { "name": "Spatial Bootcamp", "url": "http://spatialcarpentry.github.io", "description": "Tutorials and introductory materials for spatial analysis using FOSS4G" }
	  ]
	}
  }
}
</script>
