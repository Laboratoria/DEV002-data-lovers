// estas funciones son de ejemplo

export const filtrarpeliculas = (data,value) => {
  let nuevaData=data.filter(movie=>{
    return movie.tittle()
  })
  return nuevaData
};

export const prueba = (dataGhibli, cards) => {
  return dataGhibli;
};
 
