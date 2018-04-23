<template>
  <div class="chart">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js'

// console.log(Bar)
export default {
  props: ['data']
  // mounted () {
  //   console.log(this.data)
  //   var ctx = document.getElementById('myChart')
  //   var myChart = new Chart(ctx, {
  //     type: 'doughnut',
  //     data: {
  //       labels: this.data.labels,
  //       datasets: [{
  //         label: '# of Votes',
  //         data: this.data.data,
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       // maintainAspectRatio: true
  //       responsive: true
  //     }
  //   })
  // }
}
</script>

<style lang="scss">
.chart {
  position: relative;
  margin: 0 auto;
  width:320px;
  height: 320px;
  @media screen and (max-width: 720px) {
    width:320px;
    height: 320px;
  }
}
</style>
