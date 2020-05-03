import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      axis: 'y',
      labels: ['Январь', 'Февраль'],
      datasets: [
        {
          label: 'Данные 1',
          backgroundColor: '#87ceeb',
          data: [40, 20]
        },
        {

        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}