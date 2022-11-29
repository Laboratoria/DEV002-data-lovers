// import { getAllCharacters } from "./data.js";
// const statusButton = document.getElementById("statusButton")

// if (statusButton) {
//     statusButton.addEventListener("click", async () => {
//     document.getElementById("home").hidden = true;
//     document.getElementById("navSearcher").classList.remove("inactive");
//     let data = await getAllCharacters();
//     let alive = data.filter((characters) => {
//         return characters.alive
//     })
//     let dead = data.filter((characters) => {
//         return !characters.alive
//     })
//     //window.localStorage.setItem('Character', JSON.stringify(data));

//     const doughnutChart = document.getElementById("statusChart")
//     new Chart(doughnutChart, {
//       type: 'doughnut',
//       data: {
//         labels: ['Dead', 'Alive'],
//         datasets: [{
//           label: 'Dead or alive?',
//           data: [dead.length, alive.length],
//           backgroundColor: [
//             '#610808',
//             '#4B81D1',
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//     document.getElementById("statusChart").innerHTML = doughnutChart
//   })
// }