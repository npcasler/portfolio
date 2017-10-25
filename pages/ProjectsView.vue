<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
	  <div class="text-xs-center">
	    <img src="/static/v.png" alt="Projects" class="mb-5" />
	  </div>
	  <v-card>
        <v-card-text>
		  <ol>
		    <li><p>BIEN</p></li>
			<li><p>AFRI</p></li>
			<li><p>NRCS</p></li>
		  </ol>
		</v-card-text>
		<v-card-actions>
		  <v-btn primary flat router to="/about">Continue</v-btn>
		</v-card-actions>
	  </v-card>
	</v-flex>
  </v-layout>
</template>
