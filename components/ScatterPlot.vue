<template>
  <svg width="500" height="500">
    <g style="transform: translate(0, 10px)">
	  <path :d="line" />
	</g>
  </svg>
</template>
<script>
import * as d3 from 'd3';
export default {
  name: 'scatter-plot',
  data () {
