//para las pruebas unitarias de las funciones implementadas en el archivo data.js.
import { buscarPorTipo, buscarPorInput, filterPokemonByNumber, ordenarArrayAlfabeticamente, ordenarMayorAMenor} from '../src/data.js';

const pokemonArrayTest = [
  {
    "num": "025",
    "name": "pikachu",
    "pokemon-rarity": "normal",
    "type": ["electric"]
  },
  {
    "num": "027",
    "name": "sandshrew",
    "pokemon-rarity": "normal",
    "type": ["ground"]
  },
  {
    "num": "038",
    "name": "ninetales",
    "pokemon-rarity": "normal",
    "type": ["fire"]
  },
  {
    "num": "144",
    "name": "articuno",
    "pokemon-rarity": "legendary",
    "type": ["ice", "flying"]
  },
  {
    "num": "147",
    "name": "dratini",
    "pokemon-rarity": "normal",
    "type": ["dragon"]
  },
  {
    "num": "149",
    "name": "dragonite",
    "pokemon-rarity": "normal",
    "type": ["dragon", "flying"]
  },
  {
    "num": "172",
    "name": "pichu",
    "pokemon-rarity": "normal",
    "type": ["electric"]
  }
];
let resultadoPikachu = {
  "num": "025",
  "name": "pikachu",
  "pokemon-rarity": "normal",
  "type": ["electric"]
};

let dragones = 
  [{ "num": "147",
    "name": "dratini",
    "pokemon-rarity": "normal",
    "type": ["dragon"]
  },
  {
    "num": "149",
    "name": "dragonite",
    "pokemon-rarity": "normal",
    "type": ["dragon", "flying"]
  }]
;

let ninetales038 = [ {
 "num": "038",
  "name": "ninetales",
  "pokemon-rarity": "normal",
  "type": ["fire"]
  
}];

let x = 
{
"num": "149",
"name": "dragonite",
"pokemon-rarity": "normal",
"type": ["dragon", "flying"],
"spawn-chance": "0.02"
};

let y = 
{ "num": "147",
"name": "dratini",
"pokemon-rarity": "normal",
"type": ["dragon"],
"spawn-chance": "0.3"
};



//TEST FUNCION BUSCAR POR INPUT DE NOMBRE

describe('buscarPorInput', () => {
  it('is a function', () => {
    expect(typeof buscarPorInput).toBe('function');
  });

  it('should return “pikachu” with “pik”', () => {
    expect(buscarPorInput("pik", pokemonArrayTest)).toContainEqual(resultadoPikachu);
  });
});

//    TEST DEL INPUT BUSCAR POR TIPO

describe('buscarPorTipo', () => {
  it('is a function', () => {
    expect(typeof buscarPorTipo).toBe('function');
  });

  it('should return "pokemon-item.type=“dragon”" with “dragon”', () => {  
    expect(buscarPorTipo("dragon",pokemonArrayTest)).toEqual(dragones);
  });
});

//    TEST DEL FILTRO POR NÚMERO
describe('filterPokemonByNumber', () => {
  it('is a function', () => {
    expect(typeof buscarPorTipo).toBe('function');
  });

  it('should return ninetales038 with “038” ', () => {  
    expect(filterPokemonByNumber("038",pokemonArrayTest)).toEqual(ninetales038);
  });
});

//    TEST ORDENAR ALFABETICAMENTE

describe('ordenarArrayAlfabeticamente', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayAlfabeticamente).toBe('function');
  });
  it('should return 0 al usar dos pokemones iguales', () => {  
    expect(ordenarArrayAlfabeticamente(resultadoPikachu,resultadoPikachu)).toEqual(0);
  });
});


//    TEST ORDENAR DE MAYOR A MENOR por spawn-chance

describe('ordenarMayorAMenor', () => {
  it('is a function', () => {
    expect(typeof ordenarMayorAMenor).toBe('function');
  });
  it('should return diference betwen dratini y dragonite spawn-chances', () => {  
    expect(ordenarMayorAMenor(x,y)).toEqual(0.27999999999999997);
  });
});






























//test de la función buscarPorInput
/*describe('prueba para la función buscarPorInput', () => {
  it('is a function', () => {
    expect(typeof buscarPorInput).toBe('function');
  });

  it('debe return "pokemon-item.name=“pikachu” with “pik”', () => {
    const filtrado = buscarPorInput("pik",pokemonArrayTest);
    expect(filtrado).toEqual([{
      "num": "025",
      "name": "pikachu",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
      "img": "https://www.serebii.net/pokemongo/pokemon/025.png",
      "size": {
        "height": "0.41 m",
        "weight": "6.0 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "electric"
      ],
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      },
      "spawn-chance": "0.21",
      "stats": {
        "base-attack": "112",
        "base-defense": "96",
        "base-stamina": "111",
        "max-cp": "938",
        "max-hp": "99"
      },
      "resistant": [
        "electric",
        "flying",
        "steel"
      ],
      "weaknesses": [
        "ground"
      ],
      "quick-move": [
        {
          "name": "thunder shock",
          "type": "electric",
          "base-damage": "5",
          "energy": "8",
          "move-duration-seg": "0.6"
        },
        {
          "name": "quick attack",
          "type": "normal",
          "base-damage": "8",
          "energy": "10",
          "move-duration-seg": "0.8"
        }
      ],
      "special-attack": [
        {
          "name": "discharge",
          "type": "electric",
          "base-damage": "65",
          "energy": "-33",
          "move-duration-seg": "2.5"
        },
        {
          "name": "thunderbolt",
          "type": "electric",
          "base-damage": "80",
          "energy": "-50",
          "move-duration-seg": "2.5"
        },
        {
          "name": "wild charge",
          "type": "electric",
          "base-damage": "90",
          "energy": "-50",
          "move-duration-seg": "2.6"
        },
        {
          "name": "thunder",
          "type": "electric",
          "base-damage": "100",
          "energy": "-100",
          "move-duration-seg": "2.4"
        }
      ],
      "egg": "2 km",
      "buddy-distance-km": "1",
      "evolution": {
        "candy": "pikachu candy",
        "next-evolution": [{
          "num": "026",
          "name": "raichu",
          "candy-cost": "50"
        }],
        "prev-evolution": [{
          "num": "172",
          "name": "pichu",
          "candy-cost": "25"
        }]
      }
    }

    ]);
  });
});

//test de la función buscarPorTipo

describe('prueba para la función buscarPorTipo', () => {
  it('is a function', () => {
    expect(typeof filterPokemonByType).toBe('function');
  });

  it('test de filtro por tipo', () => {
    const filtrado = filterPokemonByType("electric");
    expect(filtrado).toContainEqual({   //para arrays de objetos y el toContain para arays simples
      "num": "025",
      "name": "pikachu",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "about": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
      "img": "https://www.serebii.net/pokemongo/pokemon/025.png",
      "size": {
        "height": "0.41 m",
        "weight": "6.0 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "electric"
      ],
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      },
      "spawn-chance": "0.21",
      "stats": {
        "base-attack": "112",
        "base-defense": "96",
        "base-stamina": "111",
        "max-cp": "938",
        "max-hp": "99"
      },
      "resistant": [
        "electric",
        "flying",
        "steel"
      ],
      "weaknesses": [
        "ground"
      ],
      "quick-move": [
        {
          "name": "thunder shock",
          "type": "electric",
          "base-damage": "5",
          "energy": "8",
          "move-duration-seg": "0.6"
        },
        {
          "name": "quick attack",
          "type": "normal",
          "base-damage": "8",
          "energy": "10",
          "move-duration-seg": "0.8"
        }
      ],
      "special-attack": [
        {
          "name": "discharge",
          "type": "electric",
          "base-damage": "65",
          "energy": "-33",
          "move-duration-seg": "2.5"
        },
        {
          "name": "thunderbolt",
          "type": "electric",
          "base-damage": "80",
          "energy": "-50",
          "move-duration-seg": "2.5"
        },
        {
          "name": "wild charge",
          "type": "electric",
          "base-damage": "90",
          "energy": "-50",
          "move-duration-seg": "2.6"
        },
        {
          "name": "thunder",
          "type": "electric",
          "base-damage": "100",
          "energy": "-100",
          "move-duration-seg": "2.4"
        }
      ],
      "egg": "2 km",
      "buddy-distance-km": "1",
      "evolution": {
        "candy": "pikachu candy",
        "next-evolution": [
          {
            "num": "026",
            "name": "raichu",
            "candy-cost": "50"
          }
        ],
        "prev-evolution": [
          {
            "num": "172",
            "name": "pichu",
            "candy-cost": "25"
          }
        ]
      }
    }
    )




  }
  );
});
*/
//   TEST DEL INPUT BUSCAR POR NOMBRE
