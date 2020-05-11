var chart_options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: false,
  title: {
    display: true,
    text: 'Chart.js Doughnut Chart'
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
}

export const pieChartData = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [86, 57, 65, 37, 93],
      backgroundColor: [
        '#FF6347',
        '#FFA500',
        '#808000',
        '#228B22',
        '#00FFFF',
      ],
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ],
  },
  options: chart_options
}

export default pieChartData;