import data from './data.json'

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
                beginAtZero: false,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11,
                maxTicksLimit: 6,
                stepSize: 500000,
                max: 9000000,
                min: 6500000,
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
            position: 'bottom',
            angleLines: {
                display: false
              }
        },
    ],
        yAxes: [{
            barPercentage: 0.4,
            gridLines: {
                color: "#fff",
                zeroLineColor: "#fff",
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
        }  
    ]
    },
};

var current = {...data.q.current};
var next = {...data.q.next};
export const qChartData = {
    type: 'horizontalBar',
    data: {
        labels: ["current", "next"],
        
        datasets: [
            {   z: 1,
                type: 'line',
                data: [
                    {x: current.now, y:'current'},
                    {x: next.now, y:'next'}
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
                  ],
                    backgroundColor: "#7A95D2",
                    hoverBackgroundColor: "#7A95D2"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.expected.to-current.certain.to,
                next.expected.to-next.certain.to
            ],
            backgroundColor: "#FFFF33",
            hoverBackgroundColor: "#FFFF33"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.unlikely.to-current.expected.to,
                next.unlikely.to-next.expected.to
            ],
            backgroundColor: "#DC143C",
            hoverBackgroundColor: "#DC143C"
        },
    ]
    },
    options: barOptions_stacked
  }
  
  export default qChartData;