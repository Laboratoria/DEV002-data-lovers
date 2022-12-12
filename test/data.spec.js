import { filter, sortUpward, sortDownward, calculatePercentage, generations, types } from '../src/data.js';

const data1 = [{name:"bulbasaur", num:"001", generation:{num:"generation i"}, type:["grass","poison"]},
{name:"pikachu", num:"025", generation:{num:"generation i"}, type:["electric"]},
{name:"charmander", num:"004", generation:{num:"generation i"}, type:["poison"]},
{name:"charmeleon", num:"005", generation:{num:"generation ii"}, type:["electric","grass"]}];
const data2 = [{name:"bulbasaur", num:"001"},{name:"pikachu", num:"025"},{name:"charmander", num:"004"},{name:"charmander", num:"004"}];

describe('Buscar/filtrar el input ingresado...', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('returns `[{name:"charmander", num:"004", generation:{num:"generation i"}, type:["poison"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"}, type:["electric","grass"]}]`', () => {
    expect(filter(data1, "char")).toEqual([{name:"charmander", num:"004", generation:{num:"generation i"}, type:["poison"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"}, type:["electric","grass"]}]);
  });

  it('returns `[{name:"pikachu", num:"025", generation:{num:"generation i"}, type:["electric"]}]`', () => {
    expect(filter(data1, "PIKACHU")).toEqual([{name:"pikachu", num:"025", generation:{num:"generation i"}, type:["electric"]}]);
  });

  it('returns `[]`', () => {
    expect(filter(data1, "t")).toEqual([]);
  });
});

describe('Ordenar el array de manera ascendente por name y number', ()=>{
  it('is a function', ()=>{
    expect(typeof sortUpward).toBe('function');
  })

  it('returns `[{name:"bulbasaur", num:"001",generation:{num:"generation i"},type:["grass","poison"]},{name:"charmander", num:"004",generation:{num:"generation i"},type:["poison"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"}, type:["electric","grass"]},{name:"pikachu", num:"025", generation:{num:"generation i"}, type:["electric"]}]`', () => {
    expect(sortUpward(data1, "name")).toEqual([{name:"bulbasaur", num:"001",generation:{num:"generation i"},type:["grass","poison"]},{name:"charmander", num:"004",generation:{num:"generation i"},type:["poison"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"}, type:["electric","grass"]},{name:"pikachu", num:"025", generation:{num:"generation i"}, type:["electric"]}]);
  });

  it('returns `[{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]`', () => {
    expect(sortUpward(data2, "name")).toEqual([{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]);
  });

  it('returns `[{name:"bulbasaur", num:"001", generation:{num:"generation i"},type:["grass","poison"]},{name:"charmander", num:"004", generation:{num:"generation i"},type:["poison"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"},type:["electric","grass"]},{name:"pikachu", num:"025", generation:{num:"generation i"}, type:["electric"]}]`', () => {
    expect(sortUpward(data1, "number")).toEqual([{name:"bulbasaur", num:"001", generation:{num:"generation i"},type:["grass","poison"]},{name:"charmander", num:"004", generation:{num:"generation i"},type:["poison"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"},type:["electric","grass"]},{name:"pikachu", num:"025", generation:{num:"generation i"}, type:["electric"]}]);
  });

  it('returns `[{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]`', () => {
    expect(sortUpward(data2, "number")).toEqual([{name:"bulbasaur", num:"001"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"pikachu", num:"025"}]);
  });

})

describe('Ordenar de manera descendente el array desde name y num', () => {
    it('it is a function', () => {
      expect(typeof sortDownward).toBe('function');
    });

    it('returns [{name:"pikachu", num:"025", generation:{num:"generation i"},type:["electric"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"},type:["electric","grass"]},{name:"charmander", num:"004", generation:{num:"generation i"},type:["poison"]},{name:"bulbasaur", num:"001", generation:{num:"generation i"},type:["grass","poison"]}]', () => {
      expect(sortDownward(data1,"name")).toEqual([{name:"pikachu", num:"025", generation:{num:"generation i"},type:["electric"]},{name:"charmeleon", num:"005", generation:{num:"generation ii"},type:["electric","grass"]},{name:"charmander", num:"004", generation:{num:"generation i"},type:["poison"]},{name:"bulbasaur", num:"001", generation:{num:"generation i"},type:["grass","poison"]}]);
    });

    it('returns [{name:"pikachu", num:"025"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"bulbasaur", num:"001"}]', () => {
      expect(sortDownward(data2,"name")).toEqual([{name:"pikachu", num:"025"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"bulbasaur", num:"001"}]);
    });

    it('returns [{name:"pikachu", num:"025", generation:{num:"generation i"},type:["electric"] },{name:"charmeleon", num:"005", generation:{num:"generation ii"},type:["electric","grass"]},{name:"charmander", num:"004", generation:{num:"generation i"},type:["poison"]},{name:"bulbasaur", num:"001", generation:{num:"generation i"},type:["grass","poison"]}]', () => {
      expect(sortDownward(data1,"num")).toEqual([{name:"pikachu", num:"025", generation:{num:"generation i"},type:["electric"] },{name:"charmeleon", num:"005", generation:{num:"generation ii"},type:["electric","grass"]},{name:"charmander", num:"004", generation:{num:"generation i"},type:["poison"]},{name:"bulbasaur", num:"001", generation:{num:"generation i"},type:["grass","poison"]}]);
    });

    it('returns [{name:"pikachu", num:"025"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"bulbasaur", num:"001"}]', () => {
      expect(sortDownward(data2,"num")).toEqual([{name:"pikachu", num:"025"},{name:"charmander", num:"004"},{name:"charmander", num:"004"},{name:"bulbasaur", num:"001"}]);
    });
})

describe('Calcular el porcentaje del nuevo array por el input ingresado', () => {
  it('is a function',() => {
    expect(typeof calculatePercentage).toBe('function');
  });

  it('returns 25% si ingresa "Pikachu"', () => {
    expect(calculatePercentage(data1,[{name:"pikachu", num:"025",  type:["electric"]}])).toEqual("25.00");
  });

  it('returns 50% si ingresa "char"', () => {
    expect(calculatePercentage(data1,[{name:"charmander", num:"004", type:["poison"]},{name:"charmeleon", num:"005", type:["electric","grass"]}])).toEqual("50.00");
  });
  
})

describe('Calcula el número de generaciones del array', () => {
  it('is a function', () => {
    expect(typeof generations).toBe('function');
  });

  it('returns ["generation i","generation ii"]', () => {
    expect(generations(data1,"generation","num")).toEqual(["generation i","generation ii"]);
  });
})

describe('Calcula el número de tipos del array', () => {
  it('is a function', () => {
    expect(typeof types).toBe('function');
  });

  it('returns 3', () => {
    expect(types(data1)).toEqual(3);
  });
})

