<template>
  <v-layout column justify-center align-center>
	<v-carousel>
	  <v-carousel-item v-for="(item,i) in slides" v-bind:src="item.src" :key="i"></v-carousel-item>
	</v-carousel>
    <v-flex xs12 sm8 md6>
	  <v-card>
	    <v-card-text>
		  <p> Welcome, this is a template website, there will be more content
		  coming soon.
		  <p> Feel free to poke around and see if something breaks.</p>
		  <div class="text-xs-right">
		    <em><small>&mdash; Nathan Casler</small></em>
		  </div>
		</v-card-text>
		<v-card-actions>
		  <v-btn primary flat router to="/inspire">Continure</v-btn>
		</v-card-actions>
	  </v-card>
	</v-flex>
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
	  ]
	}
 }

}
</script>
