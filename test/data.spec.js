//import file from '@babel/core/lib/transformation/file/file.js';
import { filtrarPeliculas } from '../src/data.js';
const peliculaTotoro = [{
  "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  "title": "My Neighbor Totoro",
  "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
  "director": "Hayao Miyazaki",
  "producer": "Hayao Miyazaki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
  "release_date": "1988",
  "rt_score": "93",
  "people": [
    {
      "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
      "name": "Satsuki Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
      "gender": "Female",
      "age": "11",
      "eye_color": "Dark Brown/Black",
      "hair_color": "Dark Brown",
      "specie": "Human"
    },
    {
      "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
      "name": "Mei Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
      "gender": "Female",
      "age": "4",
      "eye_color": "Brown",
      "hair_color": "Light Brown",
      "specie": "Human"
    },
    {
      "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
      "name": "Tatsuo Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
      "gender": "Male",
      "age": "37",
      "eye_color": "Brown",
      "hair_color": "Dark Brown",
      "specie": "Human"
    },
    {
      "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
      "name": "Yasuko Kusakabe",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
      "gender": "Female",
      "age": "36",
      "eye_color": "Brown",
      "hair_color": "Dark Brown",
      "specie": "Human"
    },
    {
      "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
      "name": "Granny",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
      "gender": "Female",
      "age": "Elder",
      "eye_color": "Black",
      "hair_color": "Grey",
      "specie": "Human"
    },
    {
      "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
      "name": "Kanta Ogaki",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
      "gender": "Male",
      "age": "11",
      "eye_color": "Brown",
      "hair_color": "Brown",
      "specie": "Human"
    },
    {
      "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
      "name": "Totoro",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
      "gender": "Male",
      "age": "1300",
      "eye_color": "Grey",
      "hair_color": "Grey",
      "specie": "Totoro"
    },
    {
      "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
      "name": "Chu Totoro",
      "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
      "gender": "NA",
      "age": "",
      "eye_color": "Black",
      "hair_color": "Blue",
      "specie": "Totoro"
    },
    {
      "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
      "name": "Chibi Totoro",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
      "gender": "NA",
      "age": "",
      "eye_color": "Black",
      "hair_color": "White",
      "specie": "Totoro"
    },
    {
      "id": "f467e18e-3694-409f-bdb3-be891ade1106",
      "name": "Catbus",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
      "gender": "Male",
      "age": "NA",
      "eye_color": "Yellow",
      "hair_color": "Brown",
      "specie": "Cat"
    }
  ],
  "locations": [
    {
      "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
      "name": "Kusakabe's House",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
      "climate": "Mild",
      "terrain": "River",
      "surface_water": "40",
      "residents": [
        "TODO"
      ]
    },
    {
      "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
      "name": "Matsugo",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
      "climate": "Continental",
      "terrain": "River",
      "surface_water": "60",
      "residents": [
        "TODO"
      ]
    },
    {
      "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
      "name": "Satsuki's School House",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/Satsuki%27s_School_House.jpg",
      "climate": "Mild",
      "terrain": "River",
      "surface_water": "60",
      "residents": [
        "TODO"
      ]
    }
  ],
  "vehicles": []
}]
const dataPrueba = {
  "studio": "Studio Ghibli Inc.",
  "films": [
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
          "name": "Dola",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
          "gender": "Female",
          "age": "60",
          "eye_color": "Black",
          "hair_color": "Peach",
          "specie": "Human"
        },
        {
          "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
          "name": "Romska Palo Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
          "gender": "Male",
          "age": "33",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e08880d0-6938-44f3-b179-81947e7873fc",
          "name": "Uncle Pom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
          "gender": "Male",
          "age": "Unspecified/Elderly",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
          "name": "General Muoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Black",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
          "name": "Duffi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
          "name": "Louis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
          "gender": "Male",
          "age": "30",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
          "name": "Charles",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
          "name": "Henri",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Reddish brown",
          "specie": "Human"
        },
        {
          "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
          "name": "Motro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
          "name": "Okami",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
          "gender": "Female",
          "age": "50",
          "eye_color": "Dark brown",
          "hair_color": "Orange",
          "specie": "Human"
        },
        {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
          "gender": "Male",
          "age": "33",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
          "name": "Gondoa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
          "climate": "TODO",
          "terrain": "TODO",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
          "name": "Pazu's Mines",
          "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
          "climate": "Dry",
          "terrain": "Hill",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
          "name": "Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
          "name": "Tedis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
          "climate": "Continental",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
          "name": "Air Destroyer Goliath",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
          "description": "A military airship utilized by the government to access Laputa",
          "vehicle_class": "Airship",
          "length": "1,000",
          "pilot": {
            "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
            "name": "Colonel Muska"
          }
        }
      ]
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
      "people": [
        {
          "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
          "name": "Satsuki Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
          "gender": "Female",
          "age": "11",
          "eye_color": "Dark Brown/Black",
          "hair_color": "Dark Brown",
          "specie": "Human"
        },
        {
          "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
          "name": "Mei Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
          "gender": "Female",
          "age": "4",
          "eye_color": "Brown",
          "hair_color": "Light Brown",
          "specie": "Human"
        },
        {
          "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
          "name": "Tatsuo Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
          "gender": "Male",
          "age": "37",
          "eye_color": "Brown",
          "hair_color": "Dark Brown",
          "specie": "Human"
        },
        {
          "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
          "name": "Yasuko Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
          "gender": "Female",
          "age": "36",
          "eye_color": "Brown",
          "hair_color": "Dark Brown",
          "specie": "Human"
        },
        {
          "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
          "name": "Granny",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
          "name": "Kanta Ogaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
          "gender": "Male",
          "age": "11",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
          "name": "Totoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
          "gender": "Male",
          "age": "1300",
          "eye_color": "Grey",
          "hair_color": "Grey",
          "specie": "Totoro"
        },
        {
          "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
          "name": "Chu Totoro",
          "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
          "gender": "NA",
          "age": "",
          "eye_color": "Black",
          "hair_color": "Blue",
          "specie": "Totoro"
        },
        {
          "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
          "name": "Chibi Totoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
          "gender": "NA",
          "age": "",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Totoro"
        },
        {
          "id": "f467e18e-3694-409f-bdb3-be891ade1106",
          "name": "Catbus",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Yellow",
          "hair_color": "Brown",
          "specie": "Cat"
        }
      ],
      "locations": [
        {
          "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
          "name": "Kusakabe's House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
          "climate": "Mild",
          "terrain": "River",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
          "name": "Matsugo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
          "climate": "Continental",
          "terrain": "River",
          "surface_water": "60",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
          "name": "Satsuki's School House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/Satsuki%27s_School_House.jpg",
          "climate": "Mild",
          "terrain": "River",
          "surface_water": "60",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
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
      "people": [
        {
          "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
          "name": "Kiki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Witch"
        },
        {
          "id": "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
          "name": "Jiji",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Cat"
        },
        {
          "id": "6574cfr2-9w3d-2x1h-8531-gge23iu489ko",
          "name": "Ursula",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Ursula.jpg",
          "gender": "Female",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Red",
          "specie": "Human"
        },
        {
          "id": "4321dse3-6r6s-3r4d-5641-rdq19re765de",
          "name": "Tombo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6f/Tombo.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
          "name": "Osono",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3a/Osono.jpg",
          "gender": "Female",
          "age": "30",
          "eye_color": "Brown",
          "hair_color": "Red",
          "specie": "Human"
        },
        {
          "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
          "name": "Fukuo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/29/Fukuo.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
          "name": "Ursula's Log Cabin",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
          "climate": "TODO",
          "terrain": "TODO",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
          "name": "Koriko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
          "climate": "Mild",
          "terrain": "Hill",
          "surface_water": "50",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "62346d33-caa0-4c17-8016-0aca56f3066b",
          "name": "Karikiya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e3/Majo002.jpg",
          "climate": "Mild",
          "terrain": "City",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "64a996aa-481e-4627-9624-ab23f59a05a9",
          "name": "Guchokipanya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
          "climate": "Continental",
          "terrain": "Hill",
          "surface_water": "50",
          "residents": [
            {
              "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
              "name": "Osono"
            },
            {
              "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
              "name": "Fukuo"
            }
          ]
        }
      ],
      "vehicles": []
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
      "people": [
        {
          "id": "8cb959a8-1959-42f3-bb33-07d7a2e6b830",
          "name": "Seita Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/21/Seita_Yokokawa.jpg",
          "gender": "Male",
          "age": "14",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "c344d561-6654-4aab-b0df-a1570e7e60cb",
          "name": "Setsuko Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a8/Setsuko_Yokokawa.jpg",
          "gender": "Female",
          "age": "4",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "227c01a6-4e29-4582-bc4b-35106a704ab0",
          "name": "Mrs. Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/39/SeitaMother.png",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "023306e3-9fc6-4d1d-b681-d4649dcbfff9",
          "name": "Kiyoshi Yokokawa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f6/SeitaFather3.jpg",
          "gender": "Male",
          "age": "40",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "0e18b23d-1f21-4a83-a6de-f01147624875",
          "name": "Seita's Aunt",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/SeitaAunt.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [],
      "vehicles": []
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
      "people": [
        {
          "id": "d0bb7b5f-3bf0-46c8-959d-0299b3252bd8",
          "name": "Taeko Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Taeko_Okajima.png",
          "gender": "Female",
          "age": "27",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "3f78eba1-f9b0-489b-8686-f4508cdf049d",
          "name": "Toshio",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Toshio.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "52ed5cad-2464-481f-9786-8533b8de95ff",
          "name": "Mr. Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/58/Mr._Okajima.png",
          "gender": "Male",
          "age": "Middle age",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "87e61451-3131-4d01-a3b3-558c9ee1c451",
          "name": "Mrs. Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/18/Mrs._Okajima_%282%29.png",
          "gender": "Female",
          "age": "Middle age",
          "eye_color": "Black",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "0174e644-eddd-4cb7-8503-e0c21291d782",
          "name": "Grandmother Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Grandmother_Okajima_%282%29.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "a88cb7a4-fe4a-4d50-8d8b-c32449e298ba",
          "name": "Nanako Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Nanako_Okajima.png",
          "gender": "Female",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "c8f02850-0c1f-499c-8b5e-d8ad16f3ecc4",
          "name": "Yaeko Okajima",
          "gender": "Female",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a8/Yaeko_Okajima.jpg",
          "age": "16",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "6e960787-5a47-4178-a040-1ef5bf5e4a6c",
          "name": "Tani Tsuneko",
          "img": "https://www.anime-planet.com/images/characters/tani-tsuneko-100171.jpg",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
          "name": "Aiko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Grey brown",
          "specie": "Human"
        },
        {
          "id": "3ab1e0de-4d41-4f67-b2d0-e16d0fef2e6c",
          "name": "Toko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/af/Toko.jpg",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "f4a85428-18b7-4199-ba5a-b6bcfb478e14",
          "name": "Rie",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/00/Rie_01.png",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "dbeeaecb-7817-4b8b-90ca-edc432d3033e",
          "name": "Taeko's House",
          "img": "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1571850401468-9TTOSKJGO49OEAKEJ4O6/Art+of+Only+Yesterday+C+-+8.jpg",
          "climate": "Continental",
          "terrain": "River",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    },
  ]
  }
describe('Prueba para la función filter', () => {
  it('is a function', () => {
    expect(typeof filtrarPeliculas).toBe('function');
  });
  it('is a array', () => {
    expect(typeof dataPrueba).toBe('array');
  });
  it('Debe retornar un nuevo array sin los elementos especificados', () => {
  
    expect(filtrarPeliculas(dataPrueba,"Totoro")).toEqual(peliculaTotoro);
  });
  //it('devuelve peliculas y director filtradas', () => {
    //expect(filtrarpeliculas(title).length).toEqual();

  });
//});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
