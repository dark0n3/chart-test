import data from './data.json';

function mFormatter(num) {
    return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'm' : Math.sign(num)*Math.abs(num);
}


var barOptions_stacked = {
    responsive: true,
    maintainAspectRatio: false,
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
                beginAtZero:false,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11,
                max: 3000000,
                min: 500000,
                stepSize: 50000,
                maxTicksLimit: 6,
                callback: function(value, index, values) {
                    return '$' + mFormatter(value);
                }
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
        },
    ],
        yAxes: [{
            barPercentage: 0.5,
            gridLines: {
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
        }  
    ]
    },
};

var current = {...data.mo.current};
var next = {...data.mo.next};
var following = {...data.mo.following};
export const moChartData = {
    type: 'horizontalBar',
    data: {
        labels: ["current", "next", "after"],
        
        datasets: [
            {   z: 1,
                type: 'line',
                data: [
                    {x: current.now, y:'current'},
                    {x: next.now, y:'next'},
                    {x: following.now, y:'after'},
                ],
                showLine: false,
                pointRadius: 10,
                pointHitRadius: 3
            },
            {
            stack: 1,
            z: 2,
            data: [[current.certain.from, current.certain.to],
                    [next.certain.from, next.certain.to],
                    [following.certain.from, following.certain.to],
                  ],
                    backgroundColor: "#7A95D2",
                    hoverBackgroundColor: "#7A95D2"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.expected.to-current.certain.to,
                next.expected.to-next.certain.to, 
                following.expected.to-following.certain.to,],
            backgroundColor: "#FFFF33",
            hoverBackgroundColor: "#FFFF33"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.unlikely.to-current.expected.to,
                next.unlikely.to-next.expected.to,
                following.unlikely.to-following.expected.to],
            backgroundColor: "#DC143C",
            hoverBackgroundColor: "#DC143C"
        },
    ]
    },
    options: barOptions_stacked
  };
  
  export default moChartData;