<template>
  <div> 
    <div class="header">
      <h2> Where Are We Going to Land </h2>
      <span class="dots">
        <span class="certain"> certain </span>
        <span class="expected"> expected </span>
        <span class="unlikely"> unlikely </span>
      </span>
      <div class="buttons">
        <router-link :to="'/'">
          <button class="navButton" :class="{active: active === 'Sales'}">Sales</button>
        </router-link>
        <router-link :to="'/'">
          <button class="navButton">Prospecting</button>
        </router-link>
      </div>
    </div>
    <div style="width: 1200px">
      <canvas id="planet-chart" class="first-part"></canvas>
      <div id="smaller-border"></div>
      <canvas id="planet-chart-two" class="second-part"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

import moChartData from '../api/chart-data.js';
import qChartData from '../api/chart-data-two.js';

export default {
  data() {
    return {
      active: 'Sales',
      moChartData: moChartData,
      qChartData: qChartData,
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
    this.createChart('planet-chart', this.moChartData);
    this.createChart('planet-chart-two', this.qChartData);
    console.log(this.active)
  }
}
</script>

<style>
  .first-part {
    width: 600px;
    max-height: 200px;
    margin-bottom: -6px;
  }
  #smaller-border{
    border-top: 2px dashed grey;
  }
  .second-part {
    width: 600px;
    max-height: 200px;
    margin-top: -6px;
  }

  .header {
    display: flex;
    width: 1200px;
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
    background-color: #7A95D2
  }

  .header > .dots > .expected {
    background-color: #FFFF33;
  }

  .header > .dots > .unlikely {
    background-color: #DC143C;
    color: white
  }
  .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 0.7em;
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
    border: 2px solid black;
    width: 200px
  }
  .active {
    background-color: #7A95D2;
  }


</style>