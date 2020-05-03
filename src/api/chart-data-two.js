
var barOptions_stacked = {
  legend: {
    display: false
  },

  tooltips: {
      enabled: false
  },
  hover :{
      animationDuration:0
  },
  scales: {
      xAxes: [{
          ticks: {
              beginAtZero:true,
              fontFamily: "'Open Sans Bold', sans-serif",
              fontSize:11
          },
          scaleLabel:{
              display:false
          },
          gridLines: {
              drawBorder: false,
          }, 
          stacked: true,
          angleLines: {
              display: false
            }
      }],
      yAxes: [{
          gridLines: {
              display:false,
              color: "#fff",
              zeroLineColor: "#fff",
              zeroLineWidth: 0
          },
          ticks: {
              fontFamily: "'Open Sans Bold', sans-serif",
              fontSize:11
          },
          stacked: true
      }]
  },
};

export const planetChartData = {
  type: 'horizontalBar',
  data: {
      labels: ["current", "next"],
      
      datasets: [{
          data: [727, 589],
          backgroundColor: "rgba(63,103,126,1)",
          hoverBackgroundColor: "rgba(50,90,100,1)"
      },{
          data: [238, 553],
          backgroundColor: "rgba(163,103,126,1)",
          hoverBackgroundColor: "rgba(140,85,100,1)"
      },{
          data: [1238, 553],
          backgroundColor: "rgba(63,203,226,1)",
          hoverBackgroundColor: "rgba(46,185,235,1)"
      }]
  },
  options: barOptions_stacked
}

export default planetChartData;