export const createArrayObjects = (data) => {
  let filtered = data.characters.filter(element => element.name);
  let finalArray = filtered.map( (element) => ({name: element.name, house: element.house}))

  return finalArray;
};

export const filterCompare = (array, cName) => {
  let comparedElements = array.filter(element => element.name.toLowerCase().includes(cName.toLowerCase().trim()));
  return comparedElements;
}

export const filterAscendent = (array) => {
  let ascendent = array.sort(function(a, b) {
    return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
    })

    return ascendent;
}

export const filterDescendent = (array) => {
  let descendent = array.sort(function(a, b) {
    return((a.name < b.name)? 1: ((a.name > b.name)? -1: 0));
    })

    return descendent;
}
