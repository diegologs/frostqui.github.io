---
layout: post
title: Desarrollo web con Boostrap. Tutorial para principiantes
meta: Como desarrollar una web usando Boostrap para un diseño responsive
description: Como desarrollar una web usando Boostrap para un diseño responsive
summary: Una de las tareas más difíciles que tenemos como desarrolladores webs es la obligación de adaptar el contenido de nuestra web a todas las pantallas. Afortunadamente contamos con Boostrap, un framework capaz de adaptar todo nuestro contenido. En este artículo veremos como podemos hacer uso de Boostrap para sacarle todo el partido.
category: 
title-page: Boostrap - Desarrollo web
tags: [Boostrap, Desarrollo web] 
---

*** 

<h2>Introducción y primeros pasos</h2>

Bosstrap es un framework creado con la finalidad de crear páginas webs reponsive, es decir, páginas en las cuales el diseño se adapta en función del dispositivo desde
el cual abrimos la página web. 

<h3><b>¿Por qué usar Boostrap?</b></h3>


 - . <b> Facilidad de uso</b>. Simplemente usando sus clases 
 - . <b> Respinsive</b>. Con las nuevas tecnologías queremos que nuestra página web se vea bien en todos los dispositivos. 
 - . <b> Personalizable</b>. Al descargarlo podremos elegir que elementos queremos dependiendo de nuestras necesidades
 - . <b> Gran comunidad</b>. Este framework está muy extendido y si tenemos un problema podremos encontrar mucha información en Internet.


<h3><b>Descarga y configuración de Boostrap</b></h3>

Para usar Boostrap en nuestro proyecto tenemos dos formas:

 . Primera opcion: Descargamos Boostrap desde su página oficial [http://getbootstrap.com/](http://getbootstrap.com/) y descargamos JQuery [https://jquery.com/](https://jquery.com/). 
 Metemos estos archivos que acabamos de descargar en una carpeta dentro del proyecto en el cual queremos usar Boostrap. Ahora tenemos que llamar a Boostrap desde el archivo index.html o en su defecto el archivo donde tenemos todos los estilos por defecto.


```html
 <head> 
  
 	<link href="css/bootstrap.min.css" rel="stylesheet" media="screen"> <! Inicializamos Boostrap con la ruta en la que se encuentra.–> 
 	<meta name="viewport" content="width=device-width, initial-scale=1"> <!– Con esto garantizamos que se vea correctamente en todos los dispositivos móviles –> 
 	
 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> <!– Llamamos antes a JQuery –> 
    	<script src="js/bootstrap.min.js"></script> <!– Llamamos al JavaScript de Bootstrap –> 
 </head>
```
 
   . Segunda opción: CDN. Con este método no tenemos que descargar Boostrap. Simplemente inclimos el enlace del CDN para que se descargue solo.
  
```html
 <head>
	  <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	
	<!-- JQuery -->
	 <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</head>
```
  
<h2>Elementos de Boostrap</h2>

Para usar los elementos de Boostrap tenemos que usar sus clases dentro de los elementos del html. Aquí los elementos más importantes de Boostrap

<h3><b>Grid</b></h3>

Estos son los elementos que, personalmente, me parecen más utilies y son los que más utilizo. Boostrap tiene un sistema para crear columnas, las cuales adaptan su ancho dependiendo
del dispositivo.
Para usar este sistema tenemos que ponerle la clase <b>"row"</b> a un elemento div del html. Acabamos de crear la fila de una columna, pero esta vacía. Para meter columnas dentro de las filas tenemos 
que meter elementos div con la clase <b>"col"</b>

```html
<div class="container"><!– Este elemento es un contenedor. Podemos meter elementos dentro de este contenedor para que se les aplique un margen y se centren –> 
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      1 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
  </div>
</div>
```

  <div class="row">
    <div class="col m6 red lighten-4">
      1 of 2
    </div>
    <div class="col m6 purple lighten-4">
      1 of 2
    </div>
  </div>
  <div class="row">
    <div class="col m4 amber lighten-4">
      1 of 3
    </div>
    <div class="col m4 cyan lighten-4">
      1 of 3
    </div>
    <div class="col m4 teal lighten-4">
      1 of 3
    </div>
  </div>


El primer row es una fila con 2 columnas de igual tamaño y el segundo row es una fila con 3 columnas iguales. Como ves si queremos crear columnas de igual tamaño basta con meter
elementos col dentro de las filas. ¿Qué pasa si queremos crear columnas con un tamaño diferente?
Para crearlas tenemos que especificar el tamaño que queremos. <b>Importante: </b> Las filas de Boostrap tienen un tamaño de 12 unidades, es decir, si creamos columnas más pequeñas
no llegarán a cubrir el ancho de la fila, y si las creamos más grandes saltarán a la siguiente fila.

```html
<div class="container">
  <div class="row">
  
    <div class="col-3">
      1 of 3
    </div>
    <div class="col-6"> <!- Esta columna será más ancha que las otras dos ->
      2 of 3 (más grande)
    </div>
    <div class="col-3">
      3 of 3
    </div>
  
  </div>
</div>
```

  <div class="row">
    <div class="col m3 amber lighten-4">
      1 of 3
    </div>
    <div class="col m6 cyan lighten-4">
      2 of 3 (más grande)
    </div>
    <div class="col m3 teal lighten-4">
      3 of 3
    </div>
  </div>

También podemos definir especificamente que tamaño queremos que tengan las columnas dependiendo del dispositivo. Para ello existen varias clases en Boostrap:

 - -<b> xs</b> (para móviles)
 - -<b> sm</b> (para tablets)
 - -<b> md</b> (para ordenadores)
 - -<b> lg</b> (para ordenadores con pantalla más grande)

 Por ejemplo, si queremos que una determinada columna ocupe todo el ancho en dispositivos moviles, pero queremos que ocupe menos en ordenadores, tenemos que usar la 
 clase "col-xs-12 col-md-6"


<h3><b>Botones</b></h3>

Para añadir un botón en Boostrap tenemos que usar la clase <b>"btn"</b>. Podemos usar varios tipos dependiendo del uso que le vayamos a dar. El boton por defecto es "default"

```html
<!-- Botón standart -->
<button type="button" class="btn btn-default">Default</button>

<!-- Botón primario -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Botón de exito -->
<button type="button" class="btn btn-success">Success</button>

<!-- Botón de información  -->
<button type="button" class="btn btn-info">Info</button>

<!-- Botón de aviso -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Botón de peligro  -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Botón con énfasis en un link  -->
<button type="button" class="btn btn-link">Link</button>
```

Para aumentar o disminuir el tamaño del botón tenemos que añadir la clase .btn-lg, .btn-sm, o .btn-xs dependiendo del tamaño que queramos.

<h3><b>Imágenes</b></h3>

Para conseguir que las imágenes sean responsive solo tenemos que añadir la clase <b>".img-responsive"</b>. Bootstrap se encargará de aumentar o disminuir el tamaño de la imagen
según lo necesite.

<h3><b>Otros elementos</b></h3>

Añadir colores de fondo a un elemento directamente con una clase de Boostrap

```html
<p class="bg-primary">...</p>
<p class="bg-success">...</p>
<p class="bg-info">...</p>
<p class="bg-warning">...</p>
<p class="bg-danger">...</p>
```

<p class="blue">...</p>
<p class="green lighten-3">...</p>
<p class="cyan lighten-5">...</p>
<p class="yellow lighten-3">...</p>
<p class=" red lighten-2">...</p>

Forzar a elementos a que se visualicen o no de una forma muy comoda:

```html
<div class="show">...</div>
<div class="hidden">...</div>
```

Centrar contenido

```html
<div class="center-block">...</div>
```

<h2>Conclusiones</h2>
 
 Boostrap es un framework muy potente y muy extendido en la actualidad. Tiene multitud de elementos (muchos no los he puesto en este artículo) a nuestra disposición que 
 nos facilitarán enormemente la vida para desarrollar webs responsive adatadas a las nuevas tecnologías. Si quieres seguir aprendiedo acerca de este framework te invito a que
 busques más información en su página web [http://getbootstrap.com/css/](http://getbootstrap.com/css/)
  
  

