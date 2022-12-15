import { filtrarTipo, filtrarResistencia, filtrarDebilidades, ordenarData, buscarPorNombre, obtenerTopDiezHuida} from '../src/data.js';

const informacionPokemon = [
  {
    "num": "001",
    "name": "bulbasaur",

    "type": [
      "grass",
      "poison",
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "encounter": {
      "base-flee-rate": "0.1"
    },  
  },
  {
    "num": "006",
    "name": "charizard",
    "type": [
      "fire",
      "flying"
    ],
    "resistant": [
      "fire",
      "grass",
      "fighting",
      "bug",
      "steel"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "encounter": {
      "base-flee-rate": "0.05"
    },
   },
  {
    "num": "007",
    "name": "squirtle",

    "type": [
      "water"
    ],
    "resistant": [
      "fire",
      "water",
      "ice",
      "steel"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "encounter": {
      "base-flee-rate": "0.1"
    },
  }
]

  const huidaPokemones = [
  {
  "num": "008",
  "name": "wartortle",

  "type": [
    "water"
  ],
  "encounter": {
    "base-flee-rate": "0.07"
  },
  },
  {
    "num": "023",
    "name": "ekans",

    "type": [
      "poison"
    ],
    "encounter": {
      "base-flee-rate": "0.30"
    },
  },
  {
  "num": "187",
    "name": "hoppip",

    "type": [
      "grass",
      "flying"
    ],
    "encounter": {
      "base-flee-rate": "0.12"
    },
  }
]

const resultadoBusqueda = [
  {
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ]
}]
 
describe('La funcion filtrarTipo retorna por tipo de pokemon', () => {
  it('filtrarTipo deberia ser una funcion', () => {
    expect(typeof filtrarTipo).toBe('function');
  });

  it('Debería retorna el Pokemon cuando es tipo grass', () => {
    expect(filtrarTipo(informacionPokemon, "grass")).toHaveLength(1);
  });
  it('Debería retorna el Pokemon cuando es tipo water', () => {
    expect(filtrarTipo(informacionPokemon, "water")).toHaveLength(1);
  });
});

describe('La funcion filtrarResistencia retorna resistencias del pokemon', () => {
  it('filtrarResistencia deberia ser una funcion', () => {
    expect(typeof filtrarResistencia).toBe('function');
  });

  it('Debería retorna los pokemones con la resistencia electric', () => {
    expect(filtrarResistencia(informacionPokemon, "electric")).toHaveLength(0);
  });
});

describe('La funcion filtrarDebilidades retorna debilidades del pokemon', () => {
  it('filtrarDebilidades deberia ser una funcion', () => {
    expect(typeof filtrarDebilidades).toBe('function');
  });

  it('Debería retorna los pokemones con la debilidad grass', () => {
    expect(filtrarDebilidades(informacionPokemon, "grass")).toHaveLength(0);
  });
});

describe('La funcion filtrar retorna por nombre', () => {
  it('deberia ser una funcion', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });

  it('buscarPorNombre debería retorna el nombre del pokemon', () => {
    const seleccion = "bulbasaur";
    const resultado = buscarPorNombre(resultadoBusqueda, seleccion);
    expect(resultado).toStrictEqual(resultadoBusqueda);
  });
});

describe('La funcion ordenarData me devuelve los pokemones de AZ Y ZA', () => {
  it(' ordenarData deberia ser una funcion', () => {
    expect(typeof ordenarData).toBe('function');
  });

  it('Charizard debería estar en la posición 1', () => {
    const resultado1 = ordenarData(informacionPokemon, "name");
    expect(resultado1[1].name).toEqual("charizard");
  });
});

describe('La funcion obtenerTopDiezHuida me devuelve el array de mayor a menor', () => {
  it('obtenerTopDiezHuida deberia ser una funcion', () => {
    expect(typeof obtenerTopDiezHuida).toBe('function');
  });

  it('ekans debería estar en la posición 0', () => {
    const resultadoHuida = obtenerTopDiezHuida(huidaPokemones);
    expect(resultadoHuida[0].name).toEqual("ekans");
  });
});



