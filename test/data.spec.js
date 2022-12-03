import {  filtrarTipo,  ordenarData} from '../src/data.js';

const informacionPokemon= [
  {
  "num": "001",
  "name": "bulbasaur",

  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "006",
  "name": "charizard",
    "type": [
    "fire",
    "flying"
  ],
},
{
  "num": "007",
    "name": "squirtle",
    
      "type": [
     "water"
    ]
}    
  ]

describe ('La funcion filtrarTipo retorna por tipo de pokemon', ()=>{
  it('deberia ser una funcion', () => {
    expect(typeof filtrarTipo).toBe('function');
  });

  it('Debería retorna el Pokemon cuando es tipo grass', () => {
    expect(filtrarTipo(informacionPokemon, "grass")).toHaveLength(1);
  });
  it('Debería retorna el Pokemon cuando es tipo water', () => {
    expect(filtrarTipo(informacionPokemon, "water")).toHaveLength(1);
  });
});

describe ('La funcion ordenarData me devuelve los pokemones de AZ Y ZA', ()=>{
  it('deberia ser una funcion', () => {
    expect(typeof ordenarData).toBe('function');
  });

  it('debería estar en la posición 1', () =>{
    const resultado = ordenarData(informacionPokemon, "name");
    expect(resultado[1].name).toEqual("charizard");
  });
});




