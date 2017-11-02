<template>
  <v-layout column justify-center align-center>
	<v-card>
	  <v-card-media class="white--text" height="400px" src="/static/img/coles_vote.png">
	  </v-card-media>
	  <v-card-title primary>
	  <h3 class="title">
	  Scale Space and Landforms
	  </h3>
	  </v-card-title>
	  <v-card-text>

	  </v-card-text>
	  </v-card>
	
  </v-layout>
</template>

<script>
export default {

  data () {
    return {
      slides: [
        { 'name': 'Terrain', 'src': '/static/img/valley-2706170_640.jpg' },
		{ 'name': 'Other', 'src': '/static/img/Yarlung_Tsangpo_river_tibet.jpg' },
		{ 'name': 'SDGD', 'src': '/static/img/champ_sdgd.png' },
		{ 'name': 'vote', 'src': '/static/img/coles_vote.png' }
	  ],
	  articles: [
	    { 'title': "Test", 'body': "<p>This is a test of the hml parser"}
	  ]
	}
 }

}
</script>
