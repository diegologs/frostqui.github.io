---
layout: post
title: ¿Cuántas tecnologías web existen?
meta: Crear juegos 3D en Java  
description: Iniciación para crear juegos 3D en Java. Construiremos nuestro propio motor 3D desde 0 que podremos usar de base para crear videojuegos.
summary: Quizás Java no sea uno de los mejores lenguajes para la creación de videojuegos, mucho menos para videojuegos en 3D, pero como veremos en este artículo, podemos crear un motor gráfico en 3D bastante decente como base para muchos juegos.
title-page: ¿Cuántas tecnologías web existen?
image: tecnologias-web
tags: [Web] 
---

## Introducción

La realidad es que exixten cientos o incluso miles de tecnologías y frameworks distintos para el desarrollo web, contarlas todas sería imposible ya que cada poco tiempo 
aparecen nuevas tecnologías. En este post vamos a ver las tecnologías más famosas y importantes para que sepas qué opciones tienes a la hora de 
desarrollar una web o aplicación web. Antes de empezar es importante diferenciar dos conceptos: frontend y backend

El frontend es la parte del lado del cliente en la web, es decir, la apariencia y lo que el usuario ve en la página.
El backend en cambio es la parte del lado del servidor, es decir, bases de datos, y toda la lógica de la web no visible para el usario.

## Tecnologías para el frontend

Para el frontend hay varios tipos que podemos diferenciar:

#### Frameworks CSS

Archivos CSS ya creados con muchos estilos predefinidos que ayudan al programador 

    - Bootstrap: Una de las más utilizadas en la actualidad. Recientemente han sacado su versión 4.
    - Foundation:
    - Semantic UI:

#### Frameworks JS

    - Angular: En su primera versión, AngularJS, su tenías que utilizar JS para usarlo, pero en las versiones actuales (Angular 4) se utiliza Typescript con lo cual si
    Javascript no es tu fuerte, ésta es tu mejor opción ya que la sintaxis de Typescript es muy parecida a Java.

    - React:

    - Vue:

    - Ember

#### Task runners

Sirven de gran ayuda para programar ciertas tareas, como por ejemplo, ejecutar analizadores de código cada vez que se guarda un archivo, comprimirlos automáticamente, etc

    - Gulp:

    - Grunt:


#### Transpiladores Javascript
    
Podemos escribir código con otra sintaxis, y gracias a los transpiladores, será transformado a código Javascript

    - Typescript:
    - CoffeScript:
    - Babel: 
    
#### Transpiladores CSS

De igual manera, también exixten transpiladores para transformar código en CSS, en este caso se usan para aumentar las características de CSS ahorrando mucho código:
     
     - Sass
     - Less

## Tecnologías para el backend

Para el backend lo más importante es elegir 

#### Java
    
    - Spring: El más utilizado de esta categoría. Puedes hacer desde un backend con API REST a uno con SOAP. También ofrece inyección de dependencias.  
    - Struts: Se usa mucho en ámbitos empresariales. No es una libería muy ágil pero ahora bastante código a los programadores.
    - Vaadin: El menos utilizado de estos tres. Ofrece la posibilidad de seguir un patrón MVC o MVP. También ofrece librerías UI y de componentes para facilitar la vida a los programadores.

#### Python
    
    - Django: El más popular dentro de python. Puedes crear aplicaciones web una forma muy sencilla y limpia
    - TurboGears: Combina muchas librerías de python en una. Muy extensible y configurable.

#### NodeJS
    
    - ExpressJS: El más popular con diferencia. Muchas otras librerías de nodejs parten de ésta. No ofrece integraciones con bases de datos por lo que tendremos que instalar más librerías junto a Express.
    - Koa: Basado en ExpressJS pero con la finalidad de ofrecer una experiencia minimalista para mejorar el rendimiento. Ofrece soluciones muy eficaces para controlar la ejecucción de javascript de forma asíncrona.
    - Sails: Uno de los más sencillos de utilizar. Con este framework tendremos que seguir el patrón MVC. Por defecto ofrece integraciones con multitud de bases de datos de una forma muy sencilla.
     

#### Golang
    
    - Revel: El más popular. Esta librería, a diferencia de las demás, viene con un montón de características para que no tengas que instalar librerías adiccionales. No ofrece por defecto integración con MongoDB.
    - Gin: Muy minimalista esto hace que muchas de las cosas las tengas que hacer o buscar por tu cuenta.
    - Martini: Termino medio entre un ecosistema completo y simplicidad. Es más lento que Gin. No está tan actualizado respecto a los demas frameworks.
    - Gorilla: Modularidad. Es muy fácil de escalar ya que todo se basa en modulos separados. Ofrece por defecto websockets.
    
#### Ruby
    
    - Rails: Muy sencillo de utilizar, con ORM para bases de datos. No escala muy bien para aplicaciones muy grandes. 

