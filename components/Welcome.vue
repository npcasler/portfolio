<template>
  <v-layout column justify-center align-center>
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
