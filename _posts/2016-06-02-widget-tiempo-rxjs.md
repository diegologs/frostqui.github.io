---
layout: post
title: Cómo usar RxJS para crear un widget que muestre el tiempo 
meta: ¿Qué es RxJS? ¿Cómo se usa RxJS? ¿Para qué sirve? ¿Cómo podemos usarlo para crear un widget que muestre el tiempo?
description: ¿Qué es RxJS? ¿Cómo se usa RxJS? ¿Para qué sirve? ¿Cómo podemos usarlo para crear un widget que muestre el tiempo?
excerpt: Si siempre has querido hacer un widget asíncrono, con este pequeño tutorial, aprenderemos a realizar un widget que podremos colocar en cualquier página web en el que podremos comprobar la temperatura que hace en determinada zona, y todo sin tener que recargar la página.
title-page: RxJS para programar un widget del tiempo
image: weather
lang: es
tags: [RxJS, Javascript, HTML, CSS]
redirect_to:
  - http://www.codingpotions.com/widget-tiempo-rxjs
---


<a href="http://codepen.io/Frostq/full/EgEwrN/" class="waves-effect waves-light btn">DEMO</a>

Saludos, buen señor. Hoy vamos a aprender a hacer un widget del tiempo usando <strong>RxJS</strong>, pero antes hay que saber que es RxJs y que es la programación reactiva.
RxJs es una librería para JavaScript para la creación de programas asíncronos (No esperamos, el programa no pregunta si una operación en concreto se ha completado, sólo comprueba si ha llegado algún mensaje) basados en eventos.
La programación reactiva es un paradigma de la programación que se basa en los flujos de datos y a la propagación de los datos.
La programación reactiva aprovecha las ventajas del patrón <strong>Iterator</strong> y las ventajas del patrón <strong>Observer</strong>. Es posible escribir sentencias del estilo filtrar, ordenar, seleccionar, etc; sobre eventos.
La diferencia es que la consulta es evaluada conforme llegan los datos. Uno puede evaluar datos en tiempo real.

Bien, vamos a aprovechar las ventajas de la programación reactiva para el desarrollo web.

<h2>Creación del widget</h2>
Para la creación de nuestro widget vamos a utilizar la API de OpenWheaterMap, para ello lo primero que tenemos que hacer es registrarnos en su página oficial:  

<a href="http://openweathermap.org/current">http://openweathermap.org/current</a>

En la sección API Keys es donde encontraremos nuestra clave para nuestro widget.
Lo primero que tenemos que hacer es añadir la declaración de nuestra API Key y la url de la API, para ello añadimos lo siguiente dentro de la sección <strong>script </strong>de nuestro código html:

```html
const API_KEY = "SUSTITUYE_ESTO_POR_TU_API_KEY";
const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
appid=${API_KEY}`;
```

El siguiente paso es seleccionar los dos elementos DOM de nuestro html con los que vamos a interactuar, el texto de la temperatura y el input donde introducimos la localización:

```html
var weatherText = document.querySelector('#weather');
var searchInput = document.querySelector('#location-input');
```

Una vez hecho esto toca recoger la información y mandársela a la API con una petición HTTP, para ello utilizamos una función RxJS llamada <em><strong>Rx.Observable.fromEvent()</strong></em> en conjunción de un <em><strong>debounce</strong></em> de 50mms, que se encargará de registrar un nuevo evento 500ms después del evento anterior. Tras esto mapeamos la información y se la enviamos a la API como sigue:

```html
var searchInputSource = Rx.Observable.fromEvent(searchInput, 'keyup').debounce(500);

var requestOnFindStream = searchInputSource.map(ev =&gt; {
    return API_URL + "&amp;q=" + ev.target.value;
});


function convertToCelsius(kelvin) {
 return (kelvin - 273.15).toFixed(1);
}
```

Invocamos la función <em><strong>flatMap() </strong></em>para crear un nuevo stream a partir de una cadena de strings. Por último queda subscribirse al observable y convertir la temperatura a grados Celsius de esta manera:

```html
var responseStream = requestOnFindStream
            .flatMap(requestUrl =&gt; {
                return Rx.Observable.fromPromise($.getJSON(requestUrl));
            })
            .map(response =&gt; convertToCelsius(response.main.temp))
            .startWith(0);

responseStream.subscribe(temp =&gt; {
            weatherText.innerHTML = `${temp} °C`;
  });
  ```
<img class="responsive-img" src="http://i2.wp.com/frostq.ml/wp-content/uploads/2016/05/Screenshot_1.png" alt="ejemplo de rxjs">

Para terminar puedes consultar la <a href="http://codepen.io/Frostq/full/EgEwrN/"><em><strong>DEMO</strong></em></a> del resultado final.
