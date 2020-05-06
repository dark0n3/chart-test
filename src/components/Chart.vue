<template>
  <div> 
    <div class="header">
      <h2> Where Are We Going to Land? </h2>
      <span class="dots">
        <span class="certain"> certain </span>
        <span class="expected"> expected </span>
        <span class="unlikely"> unlikely </span>
      </span>
      <div class="buttons">
        <router-link :to="'/'">
          <button class="navButton" :class="{active: active === 'Sales'}">SALES</button>
        </router-link>
        <router-link :to="'/'">
          <button class="navButton">PROSPECTING</button>
        </router-link>
      </div>
    </div>
    <div class="graphics">
      <canvas id="planet-chart" class="first-part"></canvas>
      <div id="smaller-border"></div>
      <canvas id="planet-chart-two" class="second-part"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

import moChartData from './charts/chart-data.js';
import qChartData from './charts/chart-data-two.js';

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
    width: 100% !important;
    max-height: 200px;
    height: 15vw !important;
    margin-bottom: -.6vw;
  }
  #smaller-border{
    border-top: .1vw dashed grey;
  }
  .second-part {
    width: 100% !important;
    height: 15vw !important;
    max-height: 160px;
    margin-top: -.55vw;
  }

  .header {
    display: flex;
  }

  .header > h2{
    font-size: 2vw;
    align-self: center;
  }

  .header > .dots {
    display: flex;
    align-items: center;
    width: 20%;
  }

  .header > .dots > span{
    width: 33%;
    max-height: 20px;
    border-radius: 10px;
    margin: 0 .3125rem;;
    font-size: 1vw;
  }

  .header > .dots > .certain {
    background-color: #77b9e5;
  }

  .header > .dots > .expected {
    background-color: #e7c81c;
  }

  .header > .dots > .unlikely {
    background-color: #ee3f37;
    color: white
  }
  .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: 35%;
  }
  .buttons > a {
    width: 50%  
  }
  .navButton {
    background-color: white;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1vw;
    border: 2px solid #39527c;
    padding: 3% 1rem;
    width: 100%;
  }
  .active {
    background-color: #77b9e5;
  }


</style>