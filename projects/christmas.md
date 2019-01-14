---
layout: project
title: Christmas game
meta: Christmas game with dart an StageXL
type: project
image: christmas.png
description: Este juego surgió en el invierno del año 2016. Tiene como temática la festividad navideña. El objetivo es simple, disparar regalos a los conejos. El juego tiene algunos fallos pero siemplemente lo creé para probar el lenguaje Dart.
title-page: Christmas game con Dart
tenol: [Dart, WebGL]
redirect_to:
  - http://www.codingpotions.com/
---


<a href="https://frostqui.github.io/christmas/" class="waves-effect waves-light btn">DEMO</a>

Bueno este es un juego que hice para celebrar las festividades navideñas. Quería hacer un juego muy simple que todo el mundo pudiera ver y probar sin la necesidad de instalarlo
en su dispositivo. Como lenguaje para programarlo usé Dart, ya que su sintaxis me resultaba muy parecida a Java. El juego usa una librería para mostrar gráficos en Dart llamada
StageXL.

Lo primero que hice fue cargar y renderizar el personaje de Santa. Le añadi un Key Listener para detectar cuando el usuario pulsaba sobre las teclas de direcciones, haciendo que el
personaje se moviera en la dirección indicada. Para la creación del mapa opté por un sistema de Tiles generado automáticamente, para ello, con las medidas del mapa, 
calculé cuantas tiles me cabían en ese espacio. Haciendo un par de bucles con las dimensiones calculadas, renderizo el tile correspondiente escogiéndolo de una lista aleatoriamente.

Ahora bien, el personaje se mueve pero la cámara no le sigue. Para resolverlo, hice que al moverse el personaje, la camára, que contiene todos los objetos que se estan renderizando,
se mueve en la dirección contraria, consiguiendo el efecto de seguir al personaje.

Luego añadi los árboles y los conejos. Los arboles simplemente se renderizan en una posición aleatoria dentro del mapa. Los conejos tienen un algoritmo que selecciona un punto
aleatorio dentro del mapa, para después mover poco a poco al conejo en esa direccion. 

Para crear un efecto de profundidad, quería que los objetos que se encontran más abajo se renderizaran después para que se colocaran delante de los otros. Para ello mediante
una función que se ejecuta constantemente, ordena según la posición en el eje Y, todos los objetos que se están renderizando, y los vuelve a renderizar con el nuevo orden. De esta 
forma si hay un cambio en la posicion de Y de algún objeto se ve afectado.

Por último añadi la mecánica de los regalos. Simplemente cuando detecta que has pulsado la barra espaciadora, se crea un regalo que avanza en la dirección a la que mira el personaje.
Si colisiona con un conejo, el regalo y conejo se eliminan, y se crea un conejo nuevo para que el juego no tenga final.

Si quieres consultar el código fuente del juego lo puedes hacer aquí:

[https://github.com/Frostqui/Christmas](https://github.com/Frostqui/Christmas)
