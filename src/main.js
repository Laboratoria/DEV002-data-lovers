import { getAllCharacters, filterCharactersFun, sortingCharacters } from "./data.js";

// manejo inputs
const inputs = document.querySelectorAll(".inputSearch");
const searchButtons = document.querySelectorAll("#searchButtonNav, #searchButtonHome");

const createCharactersHtml = (characters) =>{
  let characterName = "";
  characters.forEach(character => {
    characterName +=
    `<div class="character">
      <img class="character-image" src="${character.image || "assets/user.png"}"/>
      <h3 class="name">${character.name}</h3>
    </div>`
  })
  return characterName
}
const characterNotFound = () => {
  let characterDataNotFound =
    `<div class="characterNotFound">
      <h3 class="notFound">No results for this search</h3>
    </div>`
  return characterDataNotFound
}

inputs.forEach(input =>{
  input.addEventListener("keydown", async (event) =>{
    if (event.keyCode === 13){
      /* Reseting sort options */
      const sortButtons = document.getElementsByName('sort-characters');
      sortButtons.forEach(button => button.checked = false);

      document.getElementById("home").hidden = true;
      document.getElementById("navSearcher").classList.remove("inactive");
      //data contiene el resultado de la promesa
      let data = await getAllCharacters();
      //filter(función de arreglo) necesita una condición que se entrega con return. la condición entrega true o false
      let result = data.filter((characters) => {
        return characters.name.toLowerCase().includes(input.value.toLowerCase())
      })
      if (result == false){
        const dataNotFound = characterNotFound(result);
        document.getElementById("results").innerHTML = dataNotFound
      } else {
        window.localStorage.setItem('Character', JSON.stringify(result));
        const charactersHTML = createCharactersHtml(result);
        document.getElementById("results").innerHTML = charactersHTML
      }
    }
  })
})

searchButtons.forEach(btn =>{
  btn.addEventListener("click", async () => {
    const inputValue = document.getElementById("home").hidden ? inputs[1].value : inputs[0].value
    /* Reseting sort options */
    const sortButtons = document.getElementsByName('sort-characters');
    sortButtons.forEach(button => button.checked = false);

    document.getElementById("home").hidden = true;
    document.getElementById("navSearcher").classList.remove("inactive");
    //data contiene el resultado de la promesa
    let data = await getAllCharacters();
    //filter(función de arreglo) necesita una condición que se entrega con return. la condición entrega true o false
    let result = data.filter((characters) => {
      return characters.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    if (result == false){
      const dataNotFound = characterNotFound(result);
      document.getElementById("results").innerHTML = dataNotFound
    } else {
      window.localStorage.setItem('Character', JSON.stringify(result));
      const charactersHTML = createCharactersHtml(result);
      document.getElementById("results").innerHTML = charactersHTML
    }
  })
})

// esconder los ... y mostrar characters
const dotButton = document.getElementById("dotsButton");

if (dotButton){
  dotButton.addEventListener("click", () => {
    document.getElementById("dotsButton").hidden = true;
    document.getElementById("charactersButton").classList.remove("inactive");
    document.getElementById("statusButton").classList.remove("inactive");
  })
}

// al hacer click en characters, se esconde home y se muestra el nav con los personajes (nombre e imagen)
const characterButton = document.getElementById("charactersButton");

if (characterButton){
  characterButton.addEventListener("click", async() => {
    document.getElementById("home").hidden = true;
    document.getElementById("navSearcher").classList.remove("inactive");
    let data = await getAllCharacters();
    window.localStorage.setItem('Character', JSON.stringify(data));
    const charactersHTML = createCharactersHtml(data);
    document.getElementById("results").innerHTML = charactersHTML
  })
}

// al hacer click en dead or alive?, se esconde home y se muestra el nav con el gráfico
const statusButton = document.getElementById("statusButton")

if (statusButton) {
  statusButton.addEventListener("click", async () => {
    document.getElementById("home").hidden = true;
    document.getElementById("navSearcher").classList.remove("inactive");
    let data = await getAllCharacters();
    let alive = data.filter((characters) => {
        return characters.alive
    })
    let dead = data.filter((characters) => {
      return !characters.alive
    })
     //window.localStorage.setItem('Character', JSON.stringify(data));

    const doughnutChart = document.getElementById("statusChart")
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

    // var options = {
    //   chart: {
    //     type: 'bar'
    //   },
    //   series: [{
    //     name: 'sales',
    //     data: [30,40,45,50,49,60,70,91,125]
    //   }],
    //   xaxis: {
    //     categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    //   }
    // }
    
    // var chart = new ApexCharts(document.querySelector("#statusChart"), options);
    
    // chart.render();

    document.getElementById("statusChart").innerHTML = doughnutChart
  })
}

// recargar página una vez que se presiona el logo y va a home
const logoButtonNav = document.getElementById("logoButtonNav");

if (logoButtonNav){
  logoButtonNav.addEventListener("click", () => {
    window.location.reload(logoButtonNav)
    window.localStorage.removeItem('Character')
    window.localStorage.removeItem('CharacterFiltered')
  })
}

/* Sort function */
const sortABtn = document.querySelector('#a-z');
const sortZBtn = document.querySelector('#z-a');

if (sortABtn){
  sortABtn.onclick = () => {
    const newCharacters = JSON.parse(window.localStorage.getItem('Character'))
    const newCharactersFiltered = JSON.parse(window.localStorage.getItem('CharacterFiltered'))

    if(newCharactersFiltered){
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharactersFiltered))
      document.getElementById("results").innerHTML = charactersHTML
    } else{
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharacters))
      document.getElementById("results").innerHTML = charactersHTML
    }
  }
}

if (sortZBtn) {
  sortZBtn.onclick = () => {
    const newCharacters = JSON.parse(window.localStorage.getItem('Character'))
    const newCharactersFiltered = JSON.parse(window.localStorage.getItem('CharacterFiltered'))

    if(newCharactersFiltered){
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharactersFiltered).reverse())
      document.getElementById("results").innerHTML = charactersHTML
    } else {
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharacters).reverse())
      document.getElementById("results").innerHTML = charactersHTML
    }
  }
}

/* Filter function */
const filterGryffindorBtn = document.querySelector('#gryffindor');
const filterSlytherinBtn = document.querySelector('#slytherin');
const filterHufflepuffBtn = document.querySelector('#hufflepuff');
const filterRavenclawBtn = document.querySelector('#ravenclaw');
const filterHouseUndefinedBtn = document.querySelector('#houseUndefined');

function filterCharacters(newCharacters, param){
  const newCharactersFiltered = filterCharactersFun(newCharacters, param)
  window.localStorage.setItem('CharacterFiltered', JSON.stringify(newCharactersFiltered));
  return newCharactersFiltered
}

function setFilterCharacters (filterparam){
  const param = filterparam
  const newCharacters = JSON.parse(window.localStorage.getItem('Character'));
  const filteredCharacters = filterCharacters(newCharacters, param)
  let sortedCharacters = filteredCharacters
  // console.log(sortABtn.checked, sortZBtn.checked)
  if(sortABtn.checked){
    sortedCharacters = sortingCharacters(sortedCharacters)
  }else if(sortZBtn.checked){
    sortedCharacters = sortingCharacters(sortedCharacters).reverse()
  }
  const charactersHTML = createCharactersHtml(sortedCharacters);
  document.getElementById("results").innerHTML = charactersHTML
}

if (filterGryffindorBtn){
  filterGryffindorBtn.onclick = () => {
    const filterParam = 'Gryffindor'
    setFilterCharacters(filterParam)
  }
}

if (filterSlytherinBtn){
  filterSlytherinBtn.onclick = () => {
    const filterParam = 'Slytherin'
    setFilterCharacters(filterParam)
  }
}

if (filterHufflepuffBtn){
  filterHufflepuffBtn.onclick = () => {
    const filterParam = 'Hufflepuff'
    setFilterCharacters(filterParam)
  }
}

if (filterRavenclawBtn){
  filterRavenclawBtn.onclick = () => {
    const filterParam = 'Ravenclaw'
    setFilterCharacters(filterParam)
  }
}

if (filterHouseUndefinedBtn){
  filterHouseUndefinedBtn.onclick = () => {
    const newCharacters = JSON.parse(window.localStorage.getItem('Character'));

    let sortedCharacters = newCharacters
    if(sortABtn.checked){
      sortedCharacters = sortingCharacters(sortedCharacters)
    }else if(sortZBtn.checked){
      sortingCharacters(sortedCharacters).reverse()
    }

    window.localStorage.removeItem('CharacterFiltered')
    const charactersHTML = createCharactersHtml(newCharacters);
    document.getElementById("results").innerHTML = charactersHTML
  }
}