import {getAllCharacters} from "./data.js";



// const data = dataTest();
const inputs = document.querySelectorAll(".inpuuuut");
//console.log("datos " + data);
//console.log("input " + input);

inputs.forEach(input =>{ 
input.addEventListener("keydown", async (event) =>{  
  if (event.keyCode === 13){
    //const inputDos = document.getElementsByClassName("inpuuuut");
    //const keyInput = event.key;
    //console.log("dos " +inputDos.value)
    const data = await getAllCharacters();
    //console.log(data)
    const result = data.filter((characters) => {
        return characters.name.toLowerCase().includes(input.value)
    })
    console.log("resultado " + input.value, result)

    let characterName = "";
    result.forEach(character => {
        characterName += 
        `<div class="character">
            <img class="character-image" src="${character.image || "assets/user.png"}"/>
            <h3 class="name">${character.name}</h3>
        </div>`
        //() =>{
            //if (character.image !== ""){
              //  `<div class="character">
                //    <img class="character-image" src="${character.image}"/>
                  //  <h3>${character.name}</h3>
                //</div>`;
            //}
            //else {
              //  `<div class="character-no-image">
                //    <img class="no-image-character" src="assets/user.png" alt="Image not found"/>
                  //  <h3>${character.name}</h3>
                //</div>`;
            //}
        //}
        console.log("nombre " + characterName)
    })


    document.getElementById("results").innerHTML = characterName
  }
})
})

//inactive se hace con diferentes inputs