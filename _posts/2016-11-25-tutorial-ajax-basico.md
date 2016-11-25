---
layout: post
title: Tutorial AJAX - Creando una página que muestre citas aleatorias.
meta: Ajax tutorial en español sencillo
description: En este post explico como hacer una web que muestra citas celebres. Usando AJAX podemos hacer actualizaciónes en la página sin tener que recargarla.
source: 
category:
title-page: Tutorial AJAX - Citas aleatorias
tags: [Proyectos, UX, UI, Creavelas]
---

***

<a href="https://codepen.io/Frostq/full/VjEZqm/" class="waves-effect waves-light btn">DEMO</a>

En este post voy a explicar como hacer una página que muestre citas célebres aleatorias, para ello voy a utilizar HTM,CSS y JavaScript para el diseño de la página, y la API de andruxnet para generar las citas célebres. Para realizar peticiones a la API voy a usar AJAX.

AJAX es de carácter reactivo, es decir, puede cambiar la web, o realizar consultas a un servidor, después de cargar la página y sin interferir en su visualización, es decir, podemos cambiar un dato del html de la página sin tener que recargarla.
Para el desarrollo web, nos interesa ofrecer la mejor experiencia al usuario, y para ello usando AJAX, vamos a hacer una llamada a la API y a cambiar la página sin tener que recargarla.

<h2>Creación de la página</h2>

Para hacer la página voy a usar Boostrap, y para ello hay que importarlo, ya que personalmente, me parece una librería que facilita mucho el diseño, sobre todo para el diseño responsive. 
Puedes descargar Bootstrap desde la página oficial (http://getbootstrap.com/), o directamente importarlo en tu proyecto usando CDN, añadiendo lo siguiente dentro del <head>

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

Lo siguiente que hago es descargar JQuery desde su página oficial (https://jquery.com/). Jquery es una librería para JavaScript que me va a permitir seleccionar de una manera mas fácil los elementos html para cambiarlos de forma dinámica, aparte de que lo voy a usar para hacer peticiones a la API usando AJAX (no recarga toda la página cuando hace la petición).

En cuanto al código HTML del quote generator, lo que hago simplemente es crear un elemento <div> en el que voy a meter otros 3 <div>, uno para el texto de la cita, otro para el autor de la cita y otro en el que lo voy a dividir en dos columnas (mediante el uso de Bootstrap) para meter un botón para compartir en twitter y un botón para generar otra cita.

```html

<div class="titulo">Random quote by Frostq </h2>
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-6 main-content col-centered">
            <div class="centered_content">
                </br>
                <div class="quote">
                    <em><span id="text"></span></em>
                </div>
                </br>
                <div class="quote-autor">
                    <span id="author"></span>
                </div>
                </br>
                <div class="row">
                    <div class="col-sm-6 tweet">

                        <a class="twitter-share" id="twitterlink" data-size="large" target="_blank"></a>

                    </div>
                    <div class="col-sm-6">
                        <button class="boton btn green">Random quote</button>

                    </div>
                </div>


            </div>
        </div>
    </div>

</div>
```
Respecto al css lo único que hago es añadir unos estilos muy simples para dejarlo mas bonito, esta parte es a gusto de cada uno.
```css
body {
    background-color: #dae0e3;
    font-family: 'Droid Sans', sans-serif;
}


.main-content{
	   float: none;
    margin: 0 auto;
	background-color:white;
	margin-top:10px;
	height:30%;
  -webkit-box-shadow: 5px 5px 16px 1px rgba(0,0,0,0.24);
-moz-box-shadow: 5px 5px 16px 1px rgba(0,0,0,0.24);
box-shadow: 5px 5px 16px 1px rgba(0,0,0,0.24);

}

.titulo{
	text-align: center;
  margin-top:9%;
  color:grey;

}

.centered_content{
	text-align:center; 	

}

.btn {
  border-radius: 5px;
  padding: 10px 25px;
  float:right;
  font-size: 22px;
  text-decoration: none;
  margin-top: 15px;
    font-weight: bold;
    margin-right: 15px;
  color: #fff;
  position: relative;
  display: inline-block;
}

.btn:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
}


.green {
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15B358;
}

.green:hover {
  background-color: #48E68B;
}

.twitter-share{
  display:block;
    background: url("https://static.addtoany.com/images/blog/tweet-button-2015.png");
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  height: 82px;
  padding-bottom: 2px;
  width: 200px;  
}

#text{
 
  font-size:1.8em;
  
}

#author{
 
  font-size:1.4em;
  
}
```
Para finalizar el quote generator, voy a explicar las funciones que he añadido en la parte de JavaScript con Jquery.

La primera función nos va a permitir generar la cita y sustituirla en nuestro código html. Lo primero es usar AJAX para llamar a la API , en caso de que la petición sea correcta nos devolverá un JSON con la cita y el autor, que acto seguido las guardaremos en variables. Después lo que hago es cambiar el atributo 'href' del botón para compartir en twitter, para que el usuario pueda twittear la frase que ha generado. Por último selecciono con Jquery el texto de la cita y el autor y lo cambio por el que ha generado la API.

```javascript
function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "dITqRwBOt6mshm55nVGnfBU8bAVLp1MqSdRjsn3G3wFvdesZxZ"
            , Accept: "application/json"
            , "Content-Type": "application/x-www-form-urlencoded"
        }
        , url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat='
        , success: function (response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;


            if (inIframe()) {
                $('#twitterlink').attr('href', 'https://twitter.com/intent/tweet?&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor + "   /   " + "http://codepen.io/Frostq/pen/VjEZqm" + " @DiegoLopGr"));


            }
            $("#text").html(r.quote);
            $("#author").html(" - " + r.author + " - ");



        }
    });
}
```
Solo queda hacer un par de funciones, una para que al pulsar el botón de compartir en Twitter, se abra el enlace en una pestaña nueva del navegador, y la función principal que se ejecuta al cargar la página web donde hacemos las llamadas a las funciones anteriores.

```javascript
$("document").ready(function () {
    getQuote();
    $('.boton').on('click', getQuote);

});


function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
```

<img class="responsive-img" src="http://i0.wp.com/frostq.ml/wp-content/uploads/2016/08/Screenshot_1.png" alt="ejemplo peticion ajax">

