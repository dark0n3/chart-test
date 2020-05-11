<template>
  <div>
    <button @click="add" v-if="!isClicked"> Add new </button>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :preventCollision="false"
      :vertical-compact="true"
      :margin="[20, 20]"
      :use-css-transforms="true"
      class="layout"
    >
      <grid-item v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        :is-resizable="item.resizable"
        class="item">
        <component v-if="item.isComponent" :is="item.c"></component>
        <div v-else v-html="item.c"></div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import Chart from '../components/Chart.vue';
import PieChart from '../components/PieChart.vue'

	var testLayout = [
	    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
	    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
	    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
	    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
	    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
	    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
	    {"x":6,"y":3,"w":2,"h":4,"i":"9"},
	    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
	    {"x":10,"y":4,"w":2,"h":4,"i":"11"},

	    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
	    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
	    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
	    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
	    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
	    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
  ];

  var firstlayout = [
    {"x":0,"y":0,"w":10,"h":10,"i":"2"},
  ]
  
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Chart,
    PieChart
  },

  data() {
    return {
      layout: [
        {"x":0,"y":0,"w":9,"h":11,"i":"1", c: Chart, isComponent: true, resizable: false},
      ],
      type: '',
      isClicked: false
    }
  },
  methods: {
    remove(ind) {
      let index = Number(ind) + 1;
      if (index > -1) {
        this.layout.splice(index, 1);
      }
    },
    add() {
      this.isClicked = false
      this.layout.push({"x":0,"y":10,"w":2,"h":5,"i":this.layout.length+1, c: PieChart, isComponent: true})
      this.layout.push({"x":0,"y":10,"w":2,"h":5,"i":this.layout.length+1, c: "<h1> Template </h1>", isComponent: false})
    }
  }
}
</script>

<style>
 .item {
   background-color: #fff	;
   border-radius: 5px;
   box-shadow: 0 0 10px rgba(0,0,0,0.5);
   padding: 5px;
   margin: 10px;
 }
 .layout {
   background-color: #F8F8F8;
 }
 .delete {
   background-color: aqua;
 }
</style>