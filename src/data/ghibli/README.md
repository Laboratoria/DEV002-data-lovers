# Studio Ghibli

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes
animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido
varias nominaciones y premios. De todo este fandom hay un grupo que desea poder
interactuar y ver la información de las animaciones y sus personajes.

1. Presentación de Ghibli "DataLovers"

Esta aplicación web es un sitio donde los fanáticos de Estudios Ghibli pueden conocer y acceder a la información de las peliculas realizadas por Studio Ghibli. El usuario puede visualizar e interactuar con la con las cards que aparecen en la pantalla ,cada una de ellas conformadas por datos como: Título, Año , Director y descripción ; adicional a ello cada card cuenta con una imagen de acuerdo a la película.

Los fanáticos de Ghibli pueden visualizar el orden de manera ascendente y descendente de las peliculas de acuerdo al año en que fueron lanzadas ,también tienen acceso a un espacio de búsqueda para filtrar por nombre de director o nombre de película.

2. Modo de uso:

-El usuario debe ingresar a la página web de la aplicación 
-Lo llevará a la pantalla de inicio donde saldrá la opción "Peliculas" a la que se debe dar click para dirigirse a la otra pantalla
-En la pantalla dos podrá visualizar las cards con cada película e información corta pero importante ,para ver la descripción de cada película deberá hacer click al botón "descripción" para que se pueda abrir una ventana modal con la información 
-Podrá acceder a una opción desplegable para ordenar de forma ascendente o descendente de acuerdo al año de lanzamiento
-En el otro extremo de la opción desplegable tendrá un buscador para que al ingresar texto se pueda filtrar las peliculas por el nombre de cada uno o el director de cada uno
-El usuario podrá ver un texto de calculo agregado con el puntaje promedio de cada película

3. Definición del Producto - Diseño y UX

Se realizó el diseño de acuerdo a las historias de usuario que se fueron definiendo.

Se plantearon 4 Historias de Usuario para lograr una interfaz amigable y además sencilla de acceder para que todos puedan ingresar.

Historias de Usuario 

HU1

Yo como aficionado de Studio Ghibli
quiero poder buscar una película por su nombre o director
para acceder a la información de esa pellícula

![Historia de usuario 1](./src//images/HU-1.jpg)

HU2
Quiero: Ordenar las películas por año de publicación Para: Tener idea del orden cronológico y cómo evolucionó la animación del estudio.

Criterios de Aceptación:

Se muestra un menú desplegable con opción de ordenar por: año
El usuario puede dar click a la opción y se muestran las películas ordenadas por año
Es fiel a los estilos definidos en prototipo de alta
Se puede hacer scroll
Es responsiva (móvil, tablet, pc)
Definición de terminado: -Tuvo al menos un ciclo de feedback/iteración/mejora con usuarios

Pasa los test (definir test según función implementada, en este caso sería ordenar películas por año) -El código se ha subido a git hub
Está desplegado en git hub pages
HU3
Quiero: Filtrar películas por Director (6 directores) Para: Saber los aportes de cada Director/productor participante del SG y saber cuál estilo me gusta más.

Criterios de Aceptación:

Se muestra un menú desplegable con opción de filtrar por: Director
El usuario puede dar click a la opción y se despliegan los Directores, al escoger alguno de ellos se muestran sólo las películas que dirigió
Es fiel a los estilos definidos en prototipo de alta
Se puede hacer scroll
Es responsiva (móvil, tablet, pc)
Definición de terminado: -Tuvo al menos un ciclo de feedback/iteración/mejora con usuarios

Pasa los test (definir test según función implementada, en este caso sería Filtrar películas por Director) -El código se ha subido a git hub
Está desplegado en git hub pages
HU4
Quiero: Calcular el % de películas realizadas por Director Para: Saber cuáles de ellos han sido los que más aporte han hecho y dado vida al SG como lo que es.

Criterios de Aceptación:

Se muestra el cálculo del % de películas realizadas por el director seleccionado impreso en el footer (asociado al click del filtro por director)
Es fiel a los estilos definidos en prototipo de alta
Es responsiva (móvil, tablet, pc)
Definición de terminado: -Tuvo al menos un ciclo de feedback/iteración/mejora con usuarios

Pasa los test (definir test según función implementada, en este caso sería calcular%) -El código se ha subido a git hub
Está desplegado en git hub pages
