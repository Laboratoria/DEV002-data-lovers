//import file from '@babel/core/lib/transformation/file/file.js';
import { filtrarPeliculas, ordenarAsc, ordenarDesc } from '../src/data.js';
let peliculaTotoro = [{
  "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  "title": "My Neighbor Totoro",
  "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
  "director": "Hayao Miyazaki",
  "producer": "Hayao Miyazaki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
  "release_date": "1988",
  "rt_score": "93",
}]
let peliculaCastle = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
  "release_date": "1986",
  "rt_score": "95",
}]
let peliculaKiki = [{
  "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
  "title": "Kiki's Delivery Service",
  "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
  "director": "Hayao Miyazaki",
  "producer": "Hayao Miyazaki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
  "release_date": "1989",
  "rt_score": "96",
}]
let peliculaGrave = [{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
  "director": "Isao Takahata",
  "producer": "Toru Hara",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
  "release_date": "1988",
  "rt_score": "97",
}]
let peliculaOnly = [{
  "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
  "title": "Only Yesterday",
  "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
  "director": "Isao Takahata",
  "producer": "Toshio Suzuki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
  "release_date": "1991",
  "rt_score": "100",
}]
let dataPrueba = [
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
    },
    {
      "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "title": "My Neighbor Totoro",
      "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988",
      "rt_score": "93",
    },
    {
      "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
      "title": "Kiki's Delivery Service",
      "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
      "release_date": "1989",
      "rt_score": "96",
    },
    {
      "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
      "title": "Grave of the Fireflies",
      "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "director": "Isao Takahata",
      "producer": "Toru Hara",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
      "release_date": "1988",
      "rt_score": "97",
    },
    {
      "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      "title": "Only Yesterday",
      "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
      "director": "Isao Takahata",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
      "release_date": "1991",
      "rt_score": "100",
    },
    ]
let ordenAsc = [...peliculaCastle, ...peliculaTotoro, ...peliculaGrave, ...peliculaKiki, ...peliculaOnly]
let ordenDesc = [...peliculaOnly, ...peliculaKiki, ...peliculaTotoro, ...peliculaGrave, ...peliculaCastle]
describe('Prueba para la función filter', () => {
  it('is a function', () => {
    expect(typeof filtrarPeliculas).toBe('function');
  });
 // it('is a array', () => {
    //expect(dataPrueba).arrayContaining('array');
  //});
  it('Debe retornar un nuevo array con los elementos especificados', () => {
    expect(filtrarPeliculas(dataPrueba,"Totoro")).toEqual(peliculaTotoro);
  });
  /*it('devuelve peliculas y director filtradas', () => {
    // console.log(filtrarPeliculas(dataPrueba,"Hulk"));
    // expect(filtrarPeliculas(dataPrueba,"Hulk").toThrow(TypeError));
    // expect(filtrarPeliculas(dataPrueba,"Hulk").toBe("No data"));
    expect(filtrarPeliculas(dataPrueba, "Hulk")).toThrow(TypeError);
  });*/
});
describe('Prueba para la función sortAsc', () => {
  it('is a function', () => {
    expect(typeof ordenarAsc).toBe('function');
  });
  it('Debería retornar a la data ordenada por año en forma ascendente', () => {
    expect(ordenarAsc(dataPrueba)).toEqual(ordenAsc);
  });
});
describe('Prueba para la función sortDesc', () => {
  it('is a function', () => {
    expect(typeof ordenarDesc).toBe('function');
  });
  it('Debería retornar a la data ordenada por año en forma descendente', () => {
    expect(ordenarDesc(dataPrueba)).toEqual(ordenDesc);
  });
});