<template>
  <v-card color="grey lighten-4" flat>
    <v-card-text>
	  <v-container fluid>
	    <v-layout row>
		  <v-flex xs12>
		    <v-subheader>Selected Value: {{currentValue}}</v-subheader>
		  </v-flex>
		</v-layout>
		<v-layout row>
		  <v-flex xs12>
		    <v-text-field
			  label="Record Count"
			  v-model=itemCount
			  ></v-text-field>
		  </v-flex>
		</v-layout>
		<v-layout row>
		  <v-flex xs12>
		    <v-text-field
			  label="Min value"
			  v-model=min
			  ></v-text-field>
		  </v-flex>
		</v-layout>
		<v-layout row>
		  <v-flex xs12>
		  <v-text-field
		    label="Max value"
			v-model=max
			></v-text-field>
		  </v-flex>
		</v-layout>
	  </v-container>
	</v-card-text>
  <h1>Area Chart</h1>
  <area-chart
    @select="onSelect"
	:data="data"
	:ceil="max"
	class="area-chart" />
  </v-card>
</template>

<script>
import AreaChart from './AreaChart';
import generateData from '../mixins/randomData';

export default {
  name: 'app',
  data() {
    return {
	  data: [],
	  chartWidth: 0,
	  currentValue: null,
	  itemCount: 25,
	  min: 10,
	  max: 100,
	};
  },
  mounted() {
    setInterval(() => {
	  this.data = generateData(this.itemCount,
	    parseInt(this.min, 10),
		parseInt(this.max, 10));
	}, 2000);
  },
  methods: {
    onSelect(value) {
	  this.currentValue = value;
	},
  },
  components: {
    AreaChart,
  },
};
</script>
<style>
  .area-chart {
    height: 300px;
  }
</style>
