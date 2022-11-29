
import data from './harrydata.js';


//  Filtrar personajes de A-Z

export const aToZ = (arr) => {
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

// Filtar personajes de la Z-A

export const zToA = (arr) => {
  return arr.sort((nombre, otroNombre) => {
    const nom = nombre.name
    const otro = otroNombre.name
    if (nom.toLowerCase() > otro.toLowerCase()) {
      return -1;
    }
    else {
      return 0;
    }
  })

}


// Filtrar por personajes vivos

export const charactersAlive = (characters) => {
  return characters.filter(p => p.alive == true);
};

// Filtrar por personajes muertos

export const charactersDead = (characters) => {
  return characters.filter(p => p.alive == false);
};

// Filtramos por especie humana
export const speciesHuman = (characters) => {
  return characters.filter(p => p.species == "human");
};

// Filtrar hechizos de la Z-A
export const spellsZToA = (arr) => {
  return arr.reverse(data)
}

// Filtramos por  hechizos de tipo charm
export const spellsCharm = (spells) => {
  return spells.filter(s => s.spell_type == "Charm");
};

// Filtramos por  hechizos de tipo Hex
export const spellsHex = (spells) => {
  return spells.filter(s => s.spell_type == "Hex");
};

// Filtramos por  hechizos de tipo Jinx
export const spellsJinx = (spells) => {
  return spells.filter(s => s.spell_type == "Jinx");
};

// Filtramos por  hechizos de tipo Transportation
export const spellsTransportation = (spells) => {
  return spells.filter(s => s.spell_type == "Transportation");
};

// export const anotherExample = () => {
//   return 'OMG';
// };
