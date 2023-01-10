import {
  calcular,
  filterBy, filterByS, sortByA, sortByD/*filterByS, /*sortByA, sortByD, calcular */
  
} from '../src/data.js';
const filmsPrueba = [

  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
  {

    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "release_date": "1989",
    "rt_score": "96",
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "release_date": "1988",
    "rt_score": "97",
  }
]

describe('pruebas de la funcion filterBy', () => {
  it('verificar si es una funcion', () => {
    expect(typeof filterBy).toBe('function');
  });

  it('que regrese el director filtrado', () => {
    expect(filterBy("Isao Takahata", filmsPrueba)).toEqual(
      [
        {
          "title": "Grave of the Fireflies",
          "director": "Isao Takahata",
          "release_date": "1988",
          "rt_score": "97",
        }]
    );
  });
});
describe('prueba de la funcion sortByA', () => {
  it('verfica que es funcion', () => {
    expect(typeof sortByA).toBe('function');
  });

  it('se ordena Ascendente', () => {
    expect(sortByA(filmsPrueba)).toEqual(
      [
        {
          "title": "Castle in the Sky",
          "director": "Hayao Miyazaki",
          "release_date": "1986",
          "rt_score": "95",
        },
        {
      
          "title": "My Neighbor Totoro",
          "director": "Hayao Miyazaki",
          "release_date": "1988",
          "rt_score": "93",
        },
        {
          "title": "Grave of the Fireflies",
          "director": "Isao Takahata",
          "release_date": "1988",
          "rt_score": "97",
        },
        {
          "title": "Kiki's Delivery Service",
          "director": "Hayao Miyazaki",
          "release_date": "1989",
          "rt_score": "96",
        },        
      ]
    );
  });

});
describe('prueba de la funcion sortByD', () => {
  it('verfica que es funcion', () => {
    expect(typeof sortByD).toBe('function');
  });

  it('se ordena descendente', () => {
    expect(sortByD(filmsPrueba)).toEqual(
      [
        {
          "title": "Kiki's Delivery Service",
          "director": "Hayao Miyazaki",
          "release_date": "1989",
          "rt_score": "96",
        },
        {
          "title": "My Neighbor Totoro",
          "director": "Hayao Miyazaki",
          "release_date": "1988",
          "rt_score": "93",
        },
        {
          "title": "Grave of the Fireflies",
          "director": "Isao Takahata",
          "release_date": "1988",
          "rt_score": "97",
        },
        {
          "title": "Castle in the Sky",
          "director": "Hayao Miyazaki",
          "release_date": "1986",
          "rt_score": "95",
        }
      ]
    );
  });

});

describe('prueba de la funcion filterByS', () => {
  it('verfica que es funcion', () => {
    expect(typeof filterByS).toBe('function');
  });

  it('se ordena de acuerdo al rango', () => {
    expect(filterByS("93", "95", filmsPrueba)).toEqual(
    [
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "release_date": "1986",
        "rt_score": "95",
      },
      {
    
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93",
      }
    ]
  );
});
});

describe('prueba de la funcion calcular', () => {
  it('verfica que es funcion', () => {
    expect(typeof calcular).toBe('function');
  });

const title = "My Neighbor Totoro"
const calculando = calcular(filmsPrueba, title)
  it('se calcula lo que se muestra en pantalla', () => {
    expect(calculando).toEqual("33.00")
    [{

      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93",
    },
    {
      "title": "Kiki's Delivery Service",
      "director": "Hayao Miyazaki",
      "release_date": "1989",
      "rt_score": "96",
    },
    {
      "title": "Grave of the Fireflies",
      "director": "Isao Takahata",
      "release_date": "1988",
      "rt_score": "97",
    }
      
    ] }
    
    );
  });

  
