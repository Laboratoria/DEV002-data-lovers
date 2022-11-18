import {getAllCharacters} from "./data.js";



const inputs = document.querySelectorAll(".inpuuuut");

inputs.forEach(input =>{ 
  input.addEventListener("keydown", async (event) =>{  
    if (event.keyCode === 13){
      let data = await getAllCharacters();
      //data contiene el resultado de la promesa
      //filter(función de arreglo) necesita una condición que se entrega con return. la condición entrega true o false
      let result = data.filter((characters) => {
          return characters.name.toLowerCase().includes(input.value)
      })

      let characterName = "";
      result.forEach(character => {
          characterName += 
          `<div class="character">
              <img class="character-image" src="${character.image || "assets/user.png"}"/>
              <h3 class="name">${character.name}</h3>
          </div>`
      })

      //obtener result y cambiarle el HTML
      document.getElementById("results").innerHTML = characterName
    }
  })
})

const dotButton = document.getElementById("dotsButton");
const characterButton = document.getElementById("charactersButton");

dotButton.addEventListener("click", (e) => {
  document.getElementById("dotsButton").hidden = true;
  document.getElementById("charactersButton").classList.remove("inactive");
})

characterButton.addEventListener("click", async (show) => {
  let data = await getAllCharacters();
     //data contiene el resultado de la promesa

    let characterName = "";
  data.forEach(character => {
      characterName += 
      `<div class="character">
            <img class="character-image" src="${character.image || "assets/user.png"}"/>
            <h3 class="name">${character.name}</h3>
        </div>`
})

//     //obtener result y cambiarle el HTML
    document.getElementById("results").innerHTML = characterName
})