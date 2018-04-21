---
layout: post
title: Las mejores liberías para usar en conjunto con Angular
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
summary: En este artículo veremos qué son los componentes y cómo crearlos, además vamos a configurar rutas en la página para visualizar estos componentes que hemos creado.
title-page: Qué es Angular y cómo se instala
image: angular-forms
lang: es
tags: [Angular] 
serie: angular

---

## Introducción

Aunque cualquiera de éstas librerías no hacen exttrictamente falta porque puedes crear tú mismo tus propios componentes, si en algún momento necesitamos algo ya hecho para no complicarnos la vida, podemos recurrir a alguna de las siguientes liberías, exclusivas para ser usadas junto con Angular.

### PrimeNG

Colección de muchos componentes preparados también para móvil. Tiene ciertos temas que puedes escoger para personalizar la apariencia de todos los componentes.

Tiene desde componentes de visualización de datos (tablas, gráficas, estadísticas, etc) a muchos tipos de paneles, botones, menús, incluso tiene un componente drag and drop por lo que no tendrás que buscar otra librería para esta funcionalidad.

<a href="https://www.primefaces.org/primeng/#/"><button class="btn">Página oficial</button></a> 

---

### NG Bootstrap

Si quieres usar Bootstrap junto con Angular, puedes usar directamente Bootstrap como lo harías en cualquier página normal. El problema de ésto es que las partes de Bootstrap que usan JS no te funcionarán porque usan Juqery, y no está adaptado para usarse con Angular. Si necesitas usar los componentes JS de Bootstrap lo mejor que puedes hacer es utilizar esta librería. 

La librería contiene muchos de los componentes de Bootstrap adaptados a Angular, por lo que por ejemplo, podrás usar el dropdown de Bootstrap sin tener que hacer cosas raras.

<a href="https://ng-bootstrap.github.io/#/home"><button class="btn">Página oficial</button></a> 

---

### Ionic

Aunque no es una librería de Angular como tal, la he incluido porque su sintaxis es Typescript y se complementa a la perfección con Angular.

Esta librería ofrece la posibilidad de crear apps híbridas, es decir, aplicaciónes móviles que se ejecutan con un navegador en el móvil. Estas apps tienen la ventaja de ser más rápidas para desarrollar porque con un código muy parecido al que has usado para crear una aplicación web usando Angular, puedes crear la app para el móvil.

Te recomiendo que eches un vistazo a la documentación de su página web porque como digo, más que una librería es un framework entero para la creación de estas apps. Además te dejo un par de artículos para que eches un vistazo de cómo se crea una app con Ionic:

- [https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/](https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/)
- [https://codeburst.io/part-1-simple-ionic-tutorial-from-scratch-from-0-to-live-app-9a79db510a90](https://codeburst.io/part-1-simple-ionic-tutorial-from-scratch-from-0-to-live-app-9a79db510a90)


<a href="https://ionicframework.com/"><button class="btn">Página oficial</button></a> 

---

### Angular material

Ültimamente el diseño Material basado en Google está muy de moda y ésta librería lo pone a nuestro alcance para usar con Angular.

Como con las librerías anteriores se trata de un conjunto amplio de componentes listos para usarse. Estos componentes tienen la particularidad de que su diseño está inspirado en el diseño Material design.

Al igual que PrimeNG ofrece variedad de componentes, aunque no ofrece muchos componentes para la visualización de datos.

<a href="https://material.angular.io/"><button class="btn">Página oficial</button></a> 

---

### NGX Admin

Si queremos incluir un panel de control en nuestra aplicación web, lo mas sencillo y rápido es usar estos componentes para su creación.

Viene incluido con dos temas de colores, uno claro y otro oscuro. En su página oficial puedes ver un ejemplo de panel de control ya en funcionamiento usando estos componentes, como ves aunque está enfocado a un panel de control, viene con mucha variedad de componentes.

<a href="http://akveo.com/ngx-admin/"><button class="btn">Página oficial</button></a> 

---

### Ngrx

Como vimos en [artículos anteriores](http://127.0.0.1:4000/comunicacion-componentes), ngrx se trata de una librería basada en Redux.

Esta libreria sirve para gestionar el estado de la aplicación web en un único punto llamado store.

Este sistema también permite compartir datos entre componentes y ayuda a que aplicaciones grandes sean mantenibles.

<a href="https://github.com/ngrx/platform"><button class="btn">Página oficial</button></a> 

---

### NG animate

Pequeñas animaciones para usar en los componentes de Angular. Aunque Angular viene con un sistema para poder crear nuestras propias animaciones, no está de más una librería que crea estas animaciones por nosotros.

Aunque no vienen muchas animaciones, las que vienen por defecto están bien para animar componentes cuando se cargan o para avisar al usuario de un evento en la página.


<a href="https://jiayihu.github.io/ng-animate/"><button class="btn">Página oficial</button></a> 

---

### NGX Cookie

Es la implementación de una libreria conocida creada para AngularJS. 

Esta librería permite gestionar las cookies que se generan en la página, por ejemplo, cookies de sesión.

<a href="https://github.com/salemdar/ngx-cookie"><button class="btn">Página oficial</button></a> 

---

### NGX Charts

Una librería de componentes específicos de gráficas de todo tipo.

Las gráficas son totalmente personalizables y tienen multitud de parámetros para adaptarse a todo tipo de páginas.

Los tiposde gráficas que se incluyen son los siguientes:


- Horizontal & Vertical Bar Charts (Standard, Grouped, Stacked, Normalized)
- Line
- Area (Standard, Stacked, Normalized)
- Pie (Explodable, Grid, Custom legends)
- Donut
- Gauge
- Linear Gauge
- Force Directed Graph
- Heatmap
- Treemap
- Number Cards
- Bubble/Scatter


<a href="https://swimlane.github.io/ngx-charts/"><button class="btn">Página oficial</button></a> 

---

### Angular notifier

Notificaciones para Angular. Aunque puedes crear tu propio componente para mostrar notificaciones, esa librería viene con unos cuantos ya configurados:

- Default
- Exito
- Información
- Aviso
- Error

Además las notificaciones vienen con animaciones, se pueden ocultar y son personalizables con varios parámtros.

<a href="https://github.com/dominique-mueller/angular-notifier"><button class="btn">Página oficial</button></a> 

---

### Angular split

Ésta libería me pareció muy curiosa cuando lo ví, simplemente lo que hace es crear unos componentes para crear columnas (un sidebar por ejemplo) con la particularidad de que puede ser adaptado su tamaño arrastrando con el ratón. Además es personalizable y ofrece transiciones entre tamaños.

<a href="https://bertrandg.github.io/angular-split/#/"><button class="btn">Página oficial</button></a> 

---

### Dragula

Dragula es una librería pensada para varios frameworks, entre ellos, Angular. Se trata de una librería par implementar componentes y diseños **Drag and Drop**, es decir, interfaces en las cuales el uaurio puede mover y arrastrar los elementos de la página con el ratón o con el dedo en smartphones.

<a href="https://github.com/valor-software/ng2-dragula"><button class="btn">Página oficial</button></a> 

## Conclusiones

Hay muchísimas más librerías pero he puesto las que a mí, personalmente me han parecido más útiles o al menos curiosas. Ésta lista la he escrito sin seguir ningún orden en concreto. Si aún asi necesitas más liberías te animo a que eches un vistazo a las librerías que recomiendan el propio equipo de Angular desde su página oficial:

[https://angular.io/resources](https://angular.io/resources)