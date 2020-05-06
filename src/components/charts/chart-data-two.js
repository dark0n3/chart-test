import data from '../../api/data.json'

function mFormatter(num) {
    return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M' : Math.sign(num)*Math.abs(num);
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
                fontSize:10,
                maxTicksLimit: 6,
                stepSize: 500000,
                max: 9000000,
                min: 6500000,
                callback: function(value, index, values) {
                    return '$' + mFormatter(value);
                }
            },
            scaleLabel:{
                display:true
            },
            gridLines: {
                drawBorder: false,
                color: "#000",
            },      
            stacked: true,
            position: 'bottom',
            angleLines: {
                display: false
              }
        },
    ],
        yAxes: [{
            barPercentage: 0.8,
            gridLines: {
                color: "#fff",
                drawBorder: false,
                zeroLineColor: "#fff",
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:12
            },
        }  
    ]
    },
};

var current = {...data.q.current};
var next = {...data.q.next};

var dotIcon = new Image();
dotIcon.src = 'https://svgshare.com/i/Koh.svg'

export const qChartData = {
    type: 'horizontalBar',
    data: {
        labels: ["       CURRENT Q.", "NEXT Q."],
        
        datasets: [
            {   z: 1,
                type: 'line',
                data: [
                    {x: current.now, y:'       CURRENT Q.'},
                    {x: next.now, y:'NEXT Q.'}
                ],
                showLine: false,
                pointRadius: 10,
                pointHitRadius: 3,
                pointStyle: dotIcon
            },
            {
            stack: 1,
            z: 2,
            data: [[current.certain.from, current.certain.to],
                    [next.certain.from, next.certain.to],
                  ],
                    backgroundColor: "#77b9e5",
                    hoverBackgroundColor: "#77b9e5"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.expected.to-current.certain.to,
                next.expected.to-next.certain.to
            ],
            backgroundColor: "#e7c81c",
            hoverBackgroundColor: "#e7c81c"
        },
        {
            stack: 1,
            z: 2,
            data: [
                current.unlikely.to-current.expected.to,
                next.unlikely.to-next.expected.to
            ],
            backgroundColor: "#ee3f37",
            hoverBackgroundColor: "#ee3f37"
        },
    ]
    },
    options: barOptions_stacked
  }
  
  export default qChartData;