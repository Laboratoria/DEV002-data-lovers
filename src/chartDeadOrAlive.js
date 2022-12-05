import 'https://cdn.jsdelivr.net/npm/chart.js'
export const renderChart= (doughnutChart, dead, alive)=>{
    new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
          labels: ['Dead', 'Alive'],
          datasets: [{
            label: 'Dead or alive?',
            data: [dead.length, alive.length],
            backgroundColor: [
              '#610808',
              '#4B81D1',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}