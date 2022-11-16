import {getAllCharacters} from "./data.js";



const inputs = document.querySelectorAll(".inpuuuut");

inputs.forEach(input =>{ 
input.addEventListener("keydown", async (event) =>{  
  if (event.keyCode === 13){
    const data = await getAllCharacters();
    const result = data.filter((characters) => {
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

    document.getElementById("results").innerHTML = characterName
  }
})
})

//inactive se hace con diferentes inputs