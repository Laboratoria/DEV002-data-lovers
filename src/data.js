
import data from './harrydata.js';


//  export const x= numeros.sort(function(a, b){return b - a})

export const ave = (arr) => {
  return arr.sort((nombre, otroNombre) => {
    const nom = nombre.name
    const otro = otroNombre.name
    if (nom.toLowerCase() < otro.toLowerCase()) {
      return -1;
    }
    else {
      return 0;
    }
  })

}

export const anotherExample = () => {
  return 'OMG';
};
