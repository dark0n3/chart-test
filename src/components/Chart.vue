<template>
  <div> 
    <div class="header">
      <h2> Where Are We Going to Land </h2>
      <span class="dots">
        <span class="certain"> certain </span>
        <span class="expected"> exoected </span>
        <span class="unlikely"> unlikely </span>
      </span>
      <router-link :to="'/'">
        <button class="navButton" :class="{active: active === 'Sales'}">Sales</button>
      </router-link>
      <router-link :to="'/'">
        <button class="navButton">Prospecting</button>
      </router-link>
    </div>
    <div style="width: 400px">
      <canvas id="planet-chart"></canvas>
      <canvas id="planet-chart-two" class="second-part"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

import planetChartData from '../api/chart-data.js';
import planetChartDataTwo from '../api/chart-data-two.js';

export default {
  data() {
    return {
      active: 'Sales',
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
    this.createChart('planet-chart-two', this.planetChartDataTwo);
    console.log(this.active)
  }
}
</script>

<style>
  .second-part {
    margin-top: -13px;
    border-top: 2px dashed grey;
  }

  .header {
    display: flex;
  }

  .header > .dots {
    display: flex;
    align-items: center;
  }

  .header > .dots > span{
    width: 70px;
    max-height: 20px;
    border-radius: 10px;
    margin: 0 5px;
  }

  .header > .dots > .certain {
    background-color: rgba(63,103,126,1);
  }

  .header > .dots > .expected {
    background-color: rgba(163,103,126,1);
  }

  .header > .dots > .unlikely {
    background-color: rgba(63,203,226,1);
  }

  .navButton {
    background-color: white; /* Green */
    border: none;
    color: black;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: 2px solid rgb(168, 112, 112);
    width: 200px
  }
  .active {
    background-color: aquamarine;
  }


</style>