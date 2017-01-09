---
layout: post
title: Tutorial WebGL con Dart - Primeros pasos
meta: WebGL nos puede servir para mostrar gráficos en 3D, en este tutorial enseño como empezar a usarlo con Dart 
description: Tutorial en español para la creación de gráficos en 3D usando WebGL y Dart.
summary: WebGL nos puede servir para mostrar gráficos en 3D, en este tutorial enseño como empezar a usarlo con Dart 
category:
title-page: Tutorial WebGl y Dart
tags: [Dart, WebGL]
---

***

WebGL es una API basada en OpenGL mediante la cual podemos crear gráficos o pequeños juegos en 3D para el desarrollo web. Para ello, necesitamos que el navegador que estemos utilizando
soporte WebGL (actualmente la mayoria lo soportan). Si quieres saber más información puedes consultar la wikipedia ([https://es.wikipedia.org/wiki/WebGL](https://es.wikipedia.org/wiki/WebGL)),
o puedes echar un vistazo a estos ejemplos, por si te sirven de inspiración: [https://www.chromeexperiments.com/webgl](https://www.chromeexperiments.com/webgl).

Para esta guia, vamos a utilizar Dart para la programación
de un simple escenario en 3D, que nos puede servir como base para futuros proyectos. WebGL también se puede utilizar con JavaScript o con otros lenguajes 
pensados para la web.

<h2>Primeros pasos con Dart y WebGL</h2>

Lo primero es crear nuestro proyecto Dart. Para ello voy a dejar que el IDE que estoy utilizando ([WebStorm](https://www.jetbrains.com/webstorm/])), lo genere por mí.
Ahora, abrimos nuestro archivo <b>index.html</b> y creamos el canvas en el que se dibujaran los elementos, para ello añadimos la siguiente linea dentro del <b>body</b>:

```html
<canvas id="game" width="900px" height="500px"></canvas>
```

Notar que he añadido dentro de la etiqueta del canvas, el id para poder identificarlo en nuestro código en dart, así como, la anchura (width) y la altura (height), aunque estas últimas se pueden añadir a posteriori.

El siguiente paso es añadir código al archivo dart. Lo primero es importar lo que vamos a utilizar:

```JavaScript
import 'dart:html' as html;
import 'dart:web_gl' as GL;

GL.RenderingContext gl;
```
Añadimos la funcion main() si no la tenemos ya. Dentro vamos a inicializar WebGL en el canvas que creamos anteriormente, en caso de que el usuario no disponga de WebGL, hacemos una alerta.
En caso contrario, llamamos a la funciona start() que es la que vamos a utilizar para empezar a cargar WebGL.

```JavaScript
void main() {
 var canvas = html.querySelector("#game");

  gl = canvas.getContext("webgl");

  if(gl == null) gl = canvas.getContext("experimental-webgl");

  if(gl != null){
    start();
  }else{
    html.window.alert("Tu navegador no soporta WebGL");
  }
}
```
Tras cargar WebGL en la variable gl, comprobamos si es <b>null</b>, en este caso intentamos cargar experimental-webgl (para navegadores Chrome).

Ahora toca implementar la funcion start().

```JavaScript
void start(){
  gl.clearColor(0.3,0,3.0,1.0);
  gl.enable(GL.RenderingContext.DEPTH_TEST);
  gl.clear(GL.COLOR_BUFFER_BIT|GL.DEPTH_BUFFER_BIT);
}
```
Con la funcion clearColor especificamos que color se va a cargar cuando llamemos a gl.clear(). La siguiente instruccion sirve para habilitar la prueba de WebGL de profundidad.
Por último limpiamos el buffer de bits. Si queremos cambiar la resolucion de renderizado tenemos que añadir la siguiente instruccion:

```JavaScript
gl.viewport(0, 0, 900, 500);
```
Esto ajustará la resolucion al ancho y el alto que le especifiquemos, en este caso 900x500, nuestro ancho y alto del lienzo. Lo mejor, en este caso, es 
añadir una variable para el ancho y el alto de nuestro lienzo para usarlo directamente en esta instrucción.


Si ahora ejecutas el proyecto y vas al navegador, si puedes ver un cuadrado de color azul, es que lo has hecho bien. De momento no tenemos nada, simplemente el lienzo, en 
articulos posteriores cargaremos los shaders, y empezaremos a dibujar las figuras. 






