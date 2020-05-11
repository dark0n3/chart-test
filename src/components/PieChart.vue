<template>
  <div>
    <canvas id="pie-chart" class="first-part"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import pieChartData from './charts/chart-data-pie'

export default {
  name: 'pie-chart',
  data() {
    return {
      chartData: pieChartData
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
    this.createChart('pie-chart', this.chartData)
  }
  
}
</script>

<style>

</style>