<template>
  <div style="width: 400px"> 
    <canvas id="planet-chart"></canvas>
    <canvas id="planet-chart-two"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

import planetChartData from '../api/chart-data.js';
import planetChartDataTwo from '../api/chart-data-two.js';

export default {
  data() {
    return {
      planetChartData: planetChartData,
      planetChartDataTwo: planetChartDataTwo,
    }
  },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
      console.log(myChart)
    }
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
    this.createChart('planet-chart-two', this.planetChartDataTwo)
  }
}
</script>

<style lang="scss">

</style>