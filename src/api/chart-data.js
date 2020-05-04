import data from './data.json'

var barOptions_stacked = {
    legend: false,
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
            position: 'top',
            angleLines: {
                display: false
              }
        }],
        yAxes: [{
            gridLines: {
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

var current = {...data.mo.current}
var next = {...data.mo.next}
var following = {...data.mo.following}
export const planetChartData = {
    type: 'horizontalBar',
    data: {
        labels: ["current", "next", "after"],
        
        datasets: [{
            data: [[current.certain.from, current.certain.to],
                    [next.certain.from, next.certain.to],
                    [following.certain.from, following.certain.to],
                  ],
                    backgroundColor: "rgba(63,103,126,1)",
                    hoverBackgroundColor: "rgba(50,90,100,1)"
        },
        {
            data: [
                current.expected.to-current.certain.to,
                next.expected.to-next.certain.to, 
                following.expected.to-following.certain.to,],
            backgroundColor: "rgba(163,103,126,1)",
            hoverBackgroundColor: "rgba(140,85,100,1)"
        },
        {
            data: [
                current.unlikely.to-current.expected.to,
                next.unlikely.to-next.expected.to,
                following.unlikely.to-following.expected.to],
            backgroundColor: "rgba(63,203,226,1)",
            hoverBackgroundColor: "rgba(46,185,235,1)"
        },
        {
            data: [
                {x: 30, y:'current'},
                {x: 30, y:'next'},
                {x: 30, y:'unlikely'},
            ],
            type: 'line'
        }
    ]
    },
    options: barOptions_stacked
  }
  
  export default planetChartData;