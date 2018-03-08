---
layout: post
title: Las mejores librerías Javascript para este 2017
meta: Librerías y frameworks gratis para hacer páginas web con Javascript  
description: Librerías y frameworks gratis para hacer páginas web con Javascript  
summary: En esta lista expongo las que, en mi opninión, son las librerías javascript más útiles o interesantes para el desarrollo web en este 2017. La lista no sigue ningún orden en particular. Si eres desarrollador web quizás descubras alguna utilidad nueva para tu página web
title-page: Mejores librerías JavaScript 2017
image: library
lang: es
tags: [Javascript] 
---


¡Saludos! Hoy os traigo una lista seleccionada personalmente por mí, con las que considero que son las mejores o más utilies librerías Javascript para este 2017.
Decir que no he incluido JQuery por ejemplo al igual que tantas otras porque ya son conocidas por todos. 



## Jquery FlexDataList

Empezamos con Jquery FlexDataList, una librería para incluir autocompletado en un página web. Para usarla tienes que seguir estos pasos:

Incluimos la ruta de la librería en la seccion HEAD de nuestro archivo HTML y sustituimos /path/to/ por la ruta donde descargemos flexdatalist:

```html
<link href="/path/to/jquery.flexdatalist.min.css" rel="stylesheet" type="text/css">
```
Inclimos el archivo JS de la librería también en la sección HEAD sustituyendo /path/to/ por la ruta donde tengamos flexdatalist:

```html
<input type="text" class="flexdatalist" >
```
Ahora solo tenemos que poner el input en el html donde queramos que se autocomplete:

```html
<input type="text" class="flexdatalist" >
```
Para cargar los datos tenemos que hacer una llamda a la función flexdatalist() seleccionando el input con JQuery.

<img src="http://i.imgur.com/V3TONyG.png" class="responsive-img" alt="FlexDataList Jquery"> 

<a href="http://projects.sergiodinislopes.pt/flexdatalist/#examples"><button class="waves-effect waves-light btn">Página oficial</button></a> 

***


## AOS - Animate on scroll library

Se trata de una librería con la que, de una manera muy sencilla, podremos hacer animaciones muy chulas cuando los usuarios de nuestra página web
hagan scroll en la página. La herramienta incluye muchas animaciones por lo sirve de gran ayuda para dejar impresionados a los visitantes de nuestra sitio web.

Para usarla podremos hacer uso del CDN, es decir, añadiendo estas líneas en la sección HEAD, será suficiente para hacer uso de estas animaciones.

```html
<link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
<script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
```
Ahora, para animar un elemento, tan solo tenemos que añadir el nombre de la animación en la propiedad data-aos del elemento que queramos animar, es decir por ejemplo:

```html
<div data-aos="fade-up"></div>
```

<img src="http://i.imgur.com/mBAiInX.png" class="responsive-img" alt="AOS - Animate on scroll librery"> 

<a href="https://michalsnik.github.io/aos/"><button class="waves-effect waves-light btn">Página oficial</button></a>  

***


## Popper.js

Una herramienta que permite crear etiquetas con información sobre un determinado elemento de una página tan solo escribiendo una simple línea de código. Tiene muy buen suporte para AngularJS y para React y la librería no pesa mucho.

Para descargarla en nuestro proyecto, lo tenemos que hacer desde su [Github](https://github.com/FezVrasta/popper.js)

Una vez descargada, podemos crear la etiqueta desde javascript, es decir por ejemplo, para crear una etiqueta situada a la derecha de otro elemento:

```javascript
var popper = new Popper(referenceElement, onPopper, {
    placement: 'right'
});
```

<img src="http://i.imgur.com/3GXwBPa.png" class="responsive-img" alt="Popper.js"> 

<a href="https://popper.js.org/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Bideo.js

Si alguna vez has querido añadir un vídeo de fondo a una web, y no sabes como o te parece muy lioso, con esta librería podrás añadirlo de una manera muy sencilla, compatible con todos los navegadores y responsive para todo tipo de pantallas. 

Para descargarlo, lo puedes hacer desde su [Github](https://github.com/rishabhp/bideo.js)

Para usarlo podemos hacerlo con la etiqueta vídeo, por ejemplo:

```html
 <video id="background_video" loop muted></video>
```

<img src="http://i.imgur.com/HDcd37E.png" class="responsive-img" alt="Bideo.js"> 

<a href="https://rishabhp.github.io/bideo.js/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Cleave.js

Hay veces que necesitamos, que cuando el usuario escriba una fecha, automáticamente se añadan barras sin necesidad de que el usuario las introduzca.
O por ejemplo, queremos que se añadan espacios cuando un usuario escriba el número de teléfono. Para hacer esto, y tener que evitarnos escribir mucho código, podemos hacer uso de esta librería. Además de los ejemplos que he comentado, también tiene otros tipos de formateo en inputs. 

Para descargarlo podemos hacerlo desde su repositorio de [Github](https://github.com/nosir/cleave.js)

Una vez lo metemos en la etiqueta HEAD 
```html
<script src="cleave.min.js"></script>
<script src="cleave-phone.{country}.js"></script>
```
(Sustituimos country por el páis que qureamos para el formateo de las tarjetas de crédito)

Para usarlo, por ejemplo, añadimos:
```html
<input class="input-phone" type="text"/>
```
y luego en el javascript:

```javascript
var cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: '{country}'
});
```

<img src="http://i.imgur.com/dIestCi.png" class="responsive-img" alt="Cleave.js"> 

<a href="http://nosir.github.io/cleave.js/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Granim.js

Con este sencillo script podremos hacer un fondo con degradado que vaya cambiando de color.

Para descargarlo, desde su [Github](https://github.com/sarcadass/granim.js/releases)

Y para usarlo simplemente creamos un elemento **canvas** en la página en la que queramos el fondo y añadimos, el siguiente código javascript:

```javascript
var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#AA076B', '#61045F'],
                ['#02AAB0', '#00CDAC'],
                ['#DA22FF', '#9733EE']
            ]
        }
    }
});
```
Donde canvas-basic es el id del canvas que añadimos anteriormente.

<img src="http://i.imgur.com/1rmUSaH.png" class="responsive-img" alt="Graninm.js"> 

<a href="https://sarcadass.github.io/granim.js/index.html"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Elevator.js

Esta divertida librería añade un botón para volver arriba en la página, solo que añade música y sonidos de ascensor, no tiene mucho más.

Si la quieres, la puedes descargar desde [Github](https://github.com/tholman/elevator.js)

Y para usarla, como en el caso de este código, hacemos que el script se ejecute cuando pulsamos sobre el botón que creamos.

```html
<div class="elevator-button">Back to Top</div>

<script>
// Elevator script included on the page, already.

window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    mainAudio: '/src/to/audio.mp3',
    endAudio: '/src/to/end-audio.mp3'
  });
}
</script>
```

<img src="http://i.imgur.com/FYGJqn6.png" class="responsive-img" alt="Elevator.js"> 

<a href="http://tholman.com/elevator.js/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Jquery Izimodal

Si no quieres perder mucho el tiempo haciendo y diseñando modals, te recomiendo este plugin. Tiene muchos tipos prediseñados, como formularios de login y registro, notificaciones, alertas, etc. 

Si te gustaría usarlo, lo mejor es bajartelo usando el CDN [https://cdnjs.com/libraries/izimodal](https://cdnjs.com/libraries/izimodal)

Ahora tienes que añadir el código que necesites, por ejemplo:

```html
<button data-izimodal-open="modal-id">Open</button>
<!-- Specifying the opening transition -->
<button data-izimodal-open="modal-id" data-izimodal-transitionin="fadeInDown">Open</button>
```

Todos los ejemplos los puedes encontrar en su página web oficial

<img src="http://i.imgur.com/blPhy9v.png" class="responsive-img" alt="Jquery Izimodal"> 

<a href="http://izimodal.marcelodolce.com/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Moment.js

Esta librería es especialmente útil cuando queremos formatear fechas, es decir, si le pasamos al script una fecha, Moment.js podrá transformarla para mostrala 
de otro modo. También es capaz de coger una fecha, y devolver el tiempo que ha pasado desde entonces hasta ahora. Por si fuera poco también tiene soporte para muchos lenguajes, entre ellos el español.

Para descargarla podemos hacerlo desde su [Página oficial](https://momentjs.com/)

En cuento al uso, es muy sencillo, simplemente llamamos a la función moment().format() desde el javascript, por ejemplo:

```javascript
moment().format('MMMM Do YYYY, h:mm:ss a'); // April 3rd 2017, 5:09:39 pm
moment().format('dddd');                    // Monday
moment().format("MMM Do YY");               // Apr 3rd 17
moment().format('YYYY [escaped] YYYY');     // 2017 escaped 2017
moment().format();                          // 2017-04-03T17:09:39+02:00
```
O para tiempos relativos a otra fecha:

```javascript
moment("20111031", "YYYYMMDD").fromNow(); // 5 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 5 years ago
moment().startOf('day').fromNow();        // 17 hours ago
moment().endOf('day').fromNow();          // in 7 hours
moment().startOf('hour').fromNow();       // 10 minutes ago

```

<img src="http://i.imgur.com/oqex34A.png" class="responsive-img" alt="Moment.js"> 

<a href="https://momentjs.com/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Anime.js

Con esta herramienta serás capaz de crear tus propias animaciones para ponerlas en múltiples elementos del html. Estas animaciones pueden ser todo lo personalizables que tu quieras, en otras palabras, puedes cambiar la dirección, la velocidad, el tiempo, la elasticidad, etc.

Para usarla puedes descargarla desde su [Github](https://github.com/juliangarnier/anime)

En cuento a su fucionamineto, tienes que crear tu animación en un fichero JS para posteriormente invocarla desde tu código html de la página web, por ejemplo:

```javascript
var cssSelector = anime({
  targets: '#cssSelector .el',
  translateX: 250
});
```
```html
<div id="cssSelector">
  <div class="line">
    <div class="square el"></div>
  </div>
</div>
```

<img src="http://i.imgur.com/qy0O277.png" class="responsive-img" alt="Anime.js"> 

<a href="http://anime-js.com/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Date dropper

Si un día necesitas incluir en tu página web un calendario donde el usuario puede introducir la fecha que desee, esta librería te lo pone muy fácil. Podrás crear
sencillos y vistosos calendarios, adapatados a todo tipo de pantallas y dispositivos y con una librería que ocupa poquísimo espacio.

Para descargarla puedes hacerlo desde su [página oficial](http://felicegattuso.com/projects/datedropper/)

Empezar a usarla es muy sencillo, simplemente añades algo parecido a esto:

```html
<input type="text" />
<!-- init dateDropper -->
<script>
    $('input').dateDropper();
</script>
``` 

<img src="http://i.imgur.com/wsbH2v0.png" class="responsive-img" alt="Date dropper"> 

<a href="http://felicegattuso.com/projects/datedropper/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Drop.js 

Este script ahorra tener que crear dropdowns al hacer clic sobre un elemento, lo hace por tí. Dispone de multiples plantillas como tarjetas, sliders, modals, hovers, etc.

En su [Github](https://github.com/HubSpot/drop) puedes descargarla.

Ahora para usarla, simplemente importas los dos archivos que vienen, y en el enlace de un link, colocas la etiqueta href con la referencia al drop que quieres crear:

```html
<link rel="stylesheet" href="drop-theme-arrows.css" />
<script src="tether.min.js"></script>
<script src="drop.min.js"></script>
```

<img src="http://i.imgur.com/Swb7EyC.png" class="responsive-img" alt="Drop.js"> 

<a href="http://github.hubspot.com/drop/docs/welcome/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Premonish

Ofrece una funcionalidad muy curiosa, la libería es capaz de "adivinar" el elemento del html sobre el que va a interaccionar el usuario antes de que lo haga,
en otras palabras, predice que elemento va a ser pulsado.

La puedes descargar desde su [Github](https://github.com/mathisonian/premonish)

Para usarla en una página web simplemente:

```javascript
import Premonish from 'premonish';
const premonish = new Premonish({
  selectors: ['a', '.list-of' '.selectors', '.to', '#watch'],
  elements: [] // Alternatively, provide a list of DOM elements to watch
});

premonish.onIntent(({el, confidence}) => {
  console.log(el); // The DOM node we suspect the user is about to interact with.
  console.log(confidence); // How confident are we about the user's intention? Scale 0-1
});
```
Aunque esto es una base, lo puedes personalizar todo lo que quieras, te animo a probarla.

<img src="http://i.imgur.com/yNNtRxZ.png" class="responsive-img" alt="Premonish"> 

<a href="https://mathisonian.github.io/premonish/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Chart.js

Para representar datos, una buena forma es mediante gráficos y tablas. Con esta herramienta resulta muy sencillo la creación de gráficas con JavaScript y con soporte para todo tipo de pantallas y dispositivos. La librería viene con un monton de tipos de gráficas y configuraciones, como por ejemplo, gráficas lineales, de barras, con círculos, con burbujas, etc.

Descarga: [http://www.chartjs.org/](http://www.chartjs.org/)

Si queremos empezar a disfrutarla, tenemos que crear un elemento canvas en el HTML, y a continuación, en el javascript, cargamos los datos en el canvas:

```html
<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>
```

Como ves, cargamos los datos y seteamos los colores que queremos para nuestra gráfica, todo de una manera muy simple

<img src="http://i.imgur.com/SvMhspq.png" class="responsive-img" alt="Chart.js"> 

<a href="http://www.chartjs.org/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Clusterize.js

Si añadimos muchisimas filas a una tabla, en el HTML, al hacer scroll sobre la tabla, notaremos que la tabla se siente con mucho lag. Para arreglar esto puedes usar este script, se encarga de sustituir todas las filas en el HTML por una sola, reduciendo mucho la lentitud al hacer scroll.

Te la puedes bajar de aquí [https://github.com/NeXTs/Clusterize.js](https://github.com/NeXTs/Clusterize.js)

Para usarlo añadimos al HTML algo parecido a esto, e inicializamos mediante JS la tabla:

```javascript
<!--HTML-->
<div class="clusterize">
  <table>
    <thead>
      <tr>
        <th>Headers</th>
      </tr>
    </thead>
  </table>
  <div id="scrollArea" class="clusterize-scroll">
    <table>
      <tbody id="contentArea" class="clusterize-content">
        <tr class="clusterize-no-data">
          <td>Loading data…</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

```javascript
// JavaScript
var data = ['<tr>…</tr>', '<tr>…</tr>', …];
var clusterize = new Clusterize({
  rows: data,
  scrollId: 'scrollArea',
  contentId: 'contentArea'
});
```

<img src="http://i.imgur.com/zFUDaKq.png" class="responsive-img" alt="Clusterize.js"> 

<a href="https://clusterize.js.org/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Notie.js

Quizás esta herramienta no te parezca muy útil, ya que solo añade un script para generar notificaciones en pantalla, pero si quieres hacer un proyecto rápido o no tienes mucho tiempo para diseñar las notificaciones, esta librería te puede venir muy bien. 

Si la quieres probar la puedes encontrar aquí [https://jaredreich.com/projects/notie](https://jaredreich.com/projects/notie)

Para hacer saltar la notificación, simplemente llamamos al metodo notie, por ejemplo: 

```javascript
notie.alert({
  type: Number|String, // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
  text: String,
  stay: Boolean, // optional, default = false
  time: Number, // optional, default = 3, minimum = 1,
  position: String // optional, default = 'top', enum: ['top', 'bottom']
})
```

<img src="http://i.imgur.com/qFifxZ2.png" class="responsive-img" alt="Notie.js"> 

<a href="https://jaredreich.com/projects/notie"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Layzr.js

Layzr ofrece una forma de incluir imágenes en una página web con carga perezosa, es decir, éstas imágenes no se renderizaran en pantalla hasta que no aparezcan. Por ejemplo, si tenemos una web con muchas imágenes, y que además, muchas de ellas no se ven hasta que el usuario hace scroll, este sistema hace que la 
página cargue mucho mas rápido, ofreciendo una mejor experiencia al usuario.

Puedes descargartela de aqui [https://github.com/callmecavs/layzr.js/releases](https://github.com/callmecavs/layzr.js/releases) 

Para inicializar las imágenes tienes que hacerlo de este modo.

```html
<img data-normal="normal.jpg">
```

<img src="http://i.imgur.com/HPuce2w.png" class="responsive-img" alt="Layzr.js"> 

<a href="http://callmecavs.com/layzr.js/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Iconate

Su premisa es muy simple, mediante los conocidos iconos de FontAwesome, esta herramienta es capaz de transformar los iconos en otros al hacerlos pulsar, por ejemplo, al pulsar sobre el icono de desplegar el menú, el icono se transforma, mediante una animación, en el icono de la equis para cerrar el menú. Éste es solo un ejemplo pero hay muchos ejemplos más, te animo a descubrirlos todos.

Para desacargarlo puedes hacerlo desde aquí [https://github.com/bitshadow/iconate](https://github.com/bitshadow/iconate)

Ahora sencillamente ejecutamos el script en el icono para que se transforme:

```javascript
var iconElement = document.getElementById('icon');
var options = {
    from: 'fa-bars',
    to: 'fa-arrow-right',
    animation: 'rubberBand'
};

iconate(iconElement, options);
```

<img src="http://i.imgur.com/W08YYnu.png" class="responsive-img" alt="Iconate"> 

<a href="http://bitshadow.github.io/iconate/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Clipboard.js

Este es el típico icono que aparece para que al pulsar se copie el contenido del input en el portapapeles, esto es especialmente útil cuando queremos ahorrar al usuario tener que seleccionar el texto para copiarlo. Está soportado por todos los navegadores modernos.

Puedes bajartelo de aquí [https://github.com/zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js)

Un ejemplo de uso:

```html
<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard">
</button>
```

<img src="http://i.imgur.com/SmDejVr.png" class="responsive-img" alt="Clipboard.js"> 

<a href="https://clipboardjs.com/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***


## Bounce.js

Para finalizar, una librería muy liviana para incluir sencillas animaciones de rebote, movimiento, aparición, etc. 

Link de descarga: [https://github.com/tictail/bounce.js](https://github.com/tictail/bounce.js)

Por ejemplo para crear una animación

```javascript
var bounce = new Bounce();
bounce.scale({
  from: { x: 0.5, y: 0.5 },
  to: { x: 1, y: 1 }
});
```

Como ves, permite configurar los parámetros a nuestro gusto por lo que es perfecta para cualquier tipo de página web.


<img src="http://i.imgur.com/Lu1KWfJ.png" class="responsive-img" alt="Bounce.js"> 

<a href="http://bouncejs.com/"><button class="waves-effect waves-light btn">Página oficial</button></a>

***

Y hasta aquí todas las librerías, espero que os hayan gustado. Por último añadir que esta lista no sigue ningún orden en concreto, son librerías que personalmente me han parecido muy útiles o interesantes para desarrolladores web.
