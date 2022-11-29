# Data Lovers - Pokémon Master

# Índice

* [1. Definición del Proyecto](#1-definicion-del-proyecto)
* [2. Investigación UX](#2-investigación-ux)
* [3. Diseño UI](#3-diseño-ui)
* [4. Herramientas de elaboración](#4-herramientas-de-elaboracion)

***

## 1. Definición del Proyecto

Nuestro sitio web es una página pensada para los fans de Pokemón, quienes encontrarán información de los Pokemon que pueden usar para revisar antes de jugar batallas en el juego Pokemon Go y de esta forma hacer estrategias en sus combates luego de posiblemente ver las debilidades y fortalezas de los Pokemones en la presente Pagina Web; Adicionalmente encuentran información importante en cuanto a datos generales y cantidad de caramelos que requiere el Pokemon para evolucionar que también pueden ayudar en su juego de Pokémon GO.

## Imagen final de la Página Web:

AQUI NO OLVIDAR INSERTARLA

***

## 2. Investigación UX

## 2.1 ¿Quiénes son los principales usuarios del producto?

Personas que en algún momento de su vida han escuchado hablar de Pokémon, quienes tal vez vieron alguna vez la serie, o quienes son Fans destacados por jugar Pokemon GO y va para dirigida a todos pues, es una página en la cual van a encontrar desde datos curiosos de la serie, así como también información de cada uno de los Pokémon, bien sea porque está interesado en conocerla por curiosidad o porque va a combatir en el Juego y quiere tener información a la mano para que su batalla sea la ganadora.


## 2.2 ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Conocer más a fondo la información de los Pokémon, pues nunca basta con lo que nos encontramos en una sola Página Web, siempre el usuario interesado en algun tema en especifico querrá encontrar mucha más información, así que nuestra Página está pensada de forma intuitiva para que en cada Card de los Pokémon se destaque la información más relevante y que a simple vista cumpla con lo que el usuario planea encontrar en un primer acercamiento con una Página Web Pokémon.


## 2.3 ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Se espera visualizar los 251 Pokemones separados por regiones Kanto y Johto, con la información detallada de cada uno, usar filtros que le permitan encontrar con mayor facilidad lo que desea ver, porque son usuarios que buscan de manera rápida la información tal vez con la posibilidad de ganar sus batallas en los Gimnasios Pokémon hablando del juego, o porque simplemente el usuario nuevo quiere informarse de forma práctica y visual sobre esta Guía de Pokémon Máster.


## 2.4 ¿Cuándo utilizan o utilizarían el producto?

Mayormente se usaría cuando el usuario desee ver información importante antes de sus batallas Pokémon, o para ver basado en el juego quizás la cantidad de caramelos que requiere un Pokémon para evolucionar, o si es que no recuerda las evoluciones de alguno de ellos esto enfocado al Juego de Pokemon GO. También se puede cuando el usuario está en un espacio de descanso u ocio y quiere por curiosidad ver algún dato de estos Pokémon.

***
## 3. Diseño UI
## 3.1 Prototipo de baja fidelidad
![Alt text](../../../../../../../../../C:/Users/eprip/OneDrive/Documents/laboratoria-bootcamp/proyectos%20git/DataLovers-Pokemon/DEV002-data-lovers/src/data/pokemon/Imagenes/Prototipo_baja_fidelidad.jpeg)

## 3.2 Testeo de Usabilidad
El testeo se realizó con usuario real y nos aportó algunos puntos que nos ayudaron a mejorar la visual de la página:

* Agregar botones de VOLVER e INICIO.
* Simplificar la información a mostrar en las cards por cada Pokemon, queríamos incluir mucho, pero nos informó los puntos exactos que deberíamos mostrar para que fuera más efectiva dicha información.
* La información de descripción por cada Pokémon se podía mostrar en la misma tarjeta.
* Los filtros a usar.

## 3.3  Prototipo de alta fidelidad

* Prototipo interactivo Figma: 
https://www.figma.com/proto/EFCeqo3mXe1ESkwiGB4WnC/Untitled?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2

![Alt text](../../../../../../../../../C:/Users/eprip/OneDrive/Documents/laboratoria-bootcamp/proyectos%20git/DataLovers-Pokemon/DEV002-data-lovers/src/data/pokemon/Imagenes/F1.jpg)
![Alt text](../../../../../../../../../C:/Users/eprip/OneDrive/Documents/laboratoria-bootcamp/proyectos%20git/DataLovers-Pokemon/DEV002-data-lovers/src/data/pokemon/Imagenes/F2.jpg)
![Alt text](../../../../../../../../../C:/Users/eprip/OneDrive/Documents/laboratoria-bootcamp/proyectos%20git/DataLovers-Pokemon/DEV002-data-lovers/src/data/pokemon/Imagenes/F3.jpg)

***
## 3.4 Historias de Usuario

## Historia Uno

* Cómo: Fan de Pokémon.
* Quiero: Ver la página de inicio/Bienvenida
* Para: Poder ver datos curiosos y botones por regiones sin filtros.
* Criterios de Aceptación:<br>
Ser responsive<br>
Mostrar datos curiosos y los cuadros de Regiones que tendrá disponibles, sin filtros.<br>
Que cumpla con el diseño de alta fidelidad
* Definición de terminado:<br>
Que se vea la página de inicio.<br>
Que el código esté en el repositorio de Github.<br>
Que cumpla los criterios de aceptación.<br>
Que esté desplegada en Github Pages.<br>

## Historia Dos

* Cómo: Fan de Pokémon.
* Quiero: Ver la lista de Pokemones.
* Para: Saber cuales Pokemones están disponibles en las Regiones de Kanto y Johto.
* Criterios de Aceptación:<br>
Ser responsive<br>
Mostrar Pokemones enlistados en tarjetas, en columnas de cuatro, con foto, nombre, número de Pokédex y tipo.<br>
Que sea Scroll<br>
Que cumpla con el diseño de alta fidelidad.<br>
* Definición de Terminado:<br>
Que se vea la lista de pokemones en tarjetas, en columnas de a 4.<br>
Cargar el código al repositorio de Github.<br>
Cumplir los criterios de aceptación.<br>
Desplegar en Github Pages.<br>
Que el README esté completo con el avance que se tiene.<br>
Contar con pruebas unitarias.<br>

## Historia Tres

* Cómo: Fan de Pokémon
* Quiero: Usar los filtros de Ordenar por y filtro de Tipo.
* Para: Facilitar la búsqueda de los Pokemones.
* Criterios de Aceptación:<br>
Que se pueda ordenar de la A-Z, Z-A<br>
Que se vea ordenado por # ascendente y por # descendente <br>
Que permita filtrar por tipo.<br>
Que sea Scroll<br>
Que sea responsive<br>
* Definición de Terminado:<br>
Cumplir los criterios de aceptación.<br>
Cargar el código al repositorio de Github.<br>
Desplegar en Github Pages.<br>
Que el README esté completo con el avance que se tiene.<br>
Contar con pruebas unitarias.<br>

## Historia Cuatro

* Cómo: Fan de Pokémon 
* Quiero: Usar los filtros de Resistencia y Debilidad
* Para: Conocer cada Pokémon según sus resistencias y Debilidades
* Criterios de Aceptación:<br>
Que se pueda filtrar por Resistencias y muestre enlistados los pokemones en tarjetas por columnas de a 4.<br>
Que se pueda filtrar por Debilidades y muestre enlistados los pokemones en tarjetas por columnas de a 4.<br>
Que sea Scroll<br>
Que sea responsive<br>
* Definición de Terminado:<br>
Que las funciones correspondientes estén en el main.js y que cumpla con los filtros definidos. <br>
Cargar el código al repositorio de Github.<br>
Desplegar en Github Pages.<br>
Que el README esté completo con el avance que se tiene.<br>
Contar con pruebas unitarias.<br>

## Historia Cinco

* Cómo: Fan de Pokémon 
* Quiero: Ver la descripción de cada Pokémon con su información relevante e importante.
* Para: Conocer a fondo el detalle del Pokemon y usarlo como información previa a las peleas que pueda tener en el Juego Pokemon Go.
* Criterios de Aceptación:<br>
Que se muestre la descripción de cada Pokémon, cuando el usuario se de clic sobre él, adicional muestre datos generales como peso, altura, tipo, generación, sus debilidades, sus resistencias y por último los caramelos que requiere para evolucionar y su evolución. <br>
Que sea responsive<br>
* Definición de Terminado:<br>
Que este creado en el html la section de esta pantalla.<br>
Que cumpla con los criterios de aceptación.<br>
Que el README esté completo con el avance que se tiene. <br>
Contar con pruebas unitarias.<br>

## Historia Seis

* Cómo: Fan de Pokémon 
* Quiero: Ver alguna estadística que me muestre la cantidad de Pokémon por tipo. 
* Para: Tener una visión unificada de las cantidades con las que cuenta el sitio web.
* Criterios de Aceptación:<br>
Que se muestre la gráfica con la información de cantidad de los Pokemon por tipo que se tienen <br>
Que sea responsive<br>
* Definición de Terminado:<br>
Que esté creada en JS la función para la gráfica a mostrar.
Que el README esté completo con el avance que se tiene.<br>
Contar con pruebas unitarias.

***
## 4. Herramientas de elaboración del proyecto
* HTML
* CSS
* JavaScript









