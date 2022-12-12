import { filter, sortUpward } from '../src/data.js';

const data1 = [{name:"bulbasaur", num:"001"},{name:"pikachu", num:"025"},{name:"charmander", num:"004"},{name:"charmeleon", num:"005"}];
const data2 = [{name:"bulbasaur", num:"001"},{name:"pikachu", num:"025"},{name:"charmander", num:"004"},{name:"charmander", num:"004"}];

describe('Buscar/filtrar el input ingresado...', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('returns `[{name:"charmander", num:"004"},{name:"charmeleon", num:"005"}]`', () => {
    expect(filter(data1, "char")).toEqual([{name:"charmander", num:"004"},{name:"charmeleon", num:"005"}]);
  });

  it('returns `[{name:"pikachu", num:"025"}]`', () => {
    expect(filter(data1, "PIKACHU")).toEqual([{name:"pikachu", num:"025"}]);
  });

  it('returns `[]`', () => {
    expect(filter(data1, "t")).toEqual([]);
  });
});

describe('Ordenar el array de manera ascendente por name y number', ()=>{
  it('is a function', ()=>{
    expect(typeof sortUpward).toBe('function');
  })

  it('returns `[{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmeleon", num:"005"},{name:"pikachu", num:"025"}]`', () => {
    expect(sortUpward(data1, "name")).toEqual([{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmeleon", num:"005"},{name:"pikachu", num:"025"}]);
  });

  it('returns `[{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]`', () => {
    expect(sortUpward(data2, "name")).toEqual([{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]);
  });

  it('returns `[{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmeleon", num:"005"},{name:"pikachu", num:"025"}]`', () => {
    expect(sortUpward(data1, "number")).toEqual([{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmeleon", num:"005"},{name:"pikachu", num:"025"}]);
  });

  it('returns `[{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]`', () => {
    expect(sortUpward(data2, "number")).toEqual([{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]);
  });


})

