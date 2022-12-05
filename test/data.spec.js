
import { aToZ, charactersDead, zToA,} from '../src/data.js';

// Creamos un data corta para probar los test

const charactersData = [
  {
    "name": "Harry Potter",
    "ancestry": "human",
    "gender": "male",
    "alive": "true",
    "specie": "human"

  },
  {
    "name": "Hermione Granger",
    "ancestry": "human",
    "gender": "female",
    "alive": "true",
    "specie": "human"

  },
  {
    "name": "Cedric Diggory",
    "ancestry": "",
    "gender": "male",
    "alive": "false",
    "specie": "human"
  }
  
]
//Test orden alfabetico A-Z

describe('aToz ordena los personajes de la A a Z', () => {
  it('Deberia devolver una funcion', () => {
    expect(aToZ).toBeTruthy();
  });
  it('Deberia devolver los personajes en asc [Cedric Diggory],[Harry Potter],[Hermione Granger]',() =>{
    let characAsc = aToZ(charactersData); 
    expect(characAsc[0].name).toEqual('Cedric Diggory');
    expect(characAsc[1].name).toEqual('Harry Potter');
    expect(characAsc[2].name).toEqual('Hermione Granger');
  });
});
// Test alfabetico Z-A
describe('zToa ordena los personajes de la Z a la A', () => {
  it('Deberia devolver una funcion', () => {
    expect(zToA).toBeTruthy();
  });
  it('Deberia devolver los personajes en dec [Cedric Diggory],[Harry Potter],[Hermione Granger]',() =>{
    let characDesc = zToA(charactersData);
    expect(characDesc[0].name).toEqual('Hermione Granger');
    expect(characDesc[1].name).toEqual('Harry Potter');
    expect(characDesc[2].name).toEqual('Cedric Diggory');
  });
});
// Test de Personajes muertos
describe('charactersDead muestra los personajes muertos o false', () => {
  it('Deberia devolver una funcion', () => {
    expect(charactersDead).toBeTruthy();
  });
  it('Deberia devolver los personajes en false',() =>{
    let characDesc = zToA(charactersData);
    expect(characDesc[0].alive).toEqual('false');
    expect(characDesc[1].alive).toEqual('false');
    expect(characDesc[2].alive).toEqual('false');
  });
});
