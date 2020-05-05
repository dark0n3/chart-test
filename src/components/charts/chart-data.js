import data from '../../api/data.json'

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
                fontSize:13,
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
                color: "#000",
            }, 
            stacked: true,
            position: 'top',
            angleLines: {
                display: false
              }
        },
    ],
        yAxes: [{
            barPercentage: 0.8,
            gridLines: {
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0,
                drawBorder: false,
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:13,
                drawBorder: false,
            },
        }  
    ]
    },
};

var current = {...data.mo.current};
var next = {...data.mo.next};
var following = {...data.mo.following};

var dotIcon = new Image();
dotIcon.src = 'https://i.ibb.co/cTcTp0T/dot-circle-regular-4.png'

export const moChartData = {
    type: 'horizontalBar',
    data: {
        labels: ["CURRENT MO.", "NEXT MO.", "FOLLOWING MO."],
        
        datasets: [
            {   z: 1,
                type: 'line',
                data: [
                    {x: current.now, y:'CURRENT MO.'},
                    {x: next.now, y:'NEXT MO.'},
                    {x: following.now, y:'FOLLOWING MO.'},
                ],
                showLine: false,
                pointRadius: 10,
                pointHitRadius: 3,
                pointStyle: dotIcon,
            },
            {
            stack: 1,
            z: 2,
            data: [[current.certain.from, current.certain.to],
                    [next.certain.from, next.certain.to],
                    [following.certain.from, following.certain.to],
                  ],
                    backgroundColor: "#77b9e5",
                    hoverBackgroundColor: "#77b9e5"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.expected.to-current.certain.to,
                next.expected.to-next.certain.to, 
                following.expected.to-following.certain.to,],
            backgroundColor: "#e7c81c",
            hoverBackgroundColor: "#e7c81c"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.unlikely.to-current.expected.to,
                next.unlikely.to-next.expected.to,
                following.unlikely.to-following.expected.to],
            backgroundColor: "#ee3f37",
            hoverBackgroundColor: "#ee3f37"
        },
    ]
    },
    options: barOptions_stacked
  };
  
  export default moChartData;