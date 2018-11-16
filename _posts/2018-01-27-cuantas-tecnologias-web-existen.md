---
layout: post
title: ¿Cuántas tecnologías web existen? Echamos un vistazo a los mejores frameworks
meta:  Las mejores y más populares tecnologías y frameworks para crear páginas web, tanto para frontend como para backend
description: Las mejores y más populares tecnologías y frameworks para crear páginas web, tanto para frontend como para backend
excerpt: Hoy en día existen muchísimas tecnologías para desarrollar web. En este artículo voy a motrar cuáles son los frameworks más interesantes y populares para del desarrollo web en el año 2018.
title-page: ¿Cuántas tecnologías web existen?
image: tecnologias-web
lang: es
tags: [Web]
lastmod: 2018-11-16T00:00:00+00:00
---

## Introducción

La realidad es que exixten cientos o incluso miles de tecnologías web, contarlas todas sería imposible ya que cada poco tiempo 
aparecen nuevas tecnologías. En este post vamos a ver las tecnologías más famosas y importantes para que sepas qué opciones tienes a la hora de 
desarrollar una web o aplicación web. Antes de empezar es importante diferenciar dos conceptos: frontend y backend

El frontend es la parte del lado del cliente en la web, es decir, la apariencia y lo que el usuario ve en la página.
El backend en cambio es la parte del lado del servidor, es decir, bases de datos, y toda la lógica de la web no visible para el usuario.

En este artículo voy a mostrar las tecnologías web más populares (a fecha 2018) de cada tipo.

## Tecnologías web para el frontend

Los navegadores web solo entienden código escrito en HTML, CSS o Javascript, es decir, los frameworks y herramientas expuestos a continuación pueden
ser sustituidos por código en Javascript puro.

#### Frameworks CSS

Archivos CSS ya creados con muchos estilos predefinidos que ayudan al programador. Es decir, contienen estilos y códigos JS listos para ser usados como clases
en etiquetas HTML para crear una web de una manera más sencilla.

- **Bootstrap**: Una de las más utilizadas en la actualidad. Buena compatibilidad con el diseño responsive y buena documentación. Recientemente han sacado su versión 4.

- **Foundation**: Alternativa muy buena a Boostrap. Tiene mucha flexibilidad, aunque puede resultar difícil de aprender.

- **Semantic UI**: El mas fácil de aprender, el nombre de sus clases está diseñado para que resulten fáciles de memorizar. Es el que más pesa de los 3.

 <img src="https://i.imgur.com/yKVqvjs.png" class="responsive-img img-100" alt="Boostrap logo"> 
 <img src="https://i.imgur.com/b6c2NbQ.png" class="responsive-img img-100" alt="Foundation logo"> 
 <img src="https://i.imgur.com/RKU8hFE.png" class="responsive-img img-100" alt="Semantic UI logo"> 


#### Frameworks JS/TS

El más conocido y que lleva usándose muchos años es Jquery. Jquery sirve para tener que escribir menos código JS, que para proyectos sencillos está bien, pero actualemente no recomiendo su uso.
Para proyectos de dimensiones más grandes recomiendo los siguientes frameworks:

- **Angular**: En su primera versión, AngularJS, su tenías que utilizar JS para usarlo, pero en las versiones actuales (Angular 4) se utiliza Typescript con lo cual si
Javascript no es tu fuerte, ésta es tu mejor opción ya que la sintaxis de Typescript es muy parecida a Java. Su rendimiento es menor a los frameworks de la competencia.

- **React**: Promovido por Faceebook. A diferencia de Angular, React no es un framework completo. Tiene una comunidad muy completa con un montón de librerías para usar con este framework.
Tiene una curva de aprendizaje alta para aplicaciones muy grandes.

- **Vue**: Uno de los frameworks más fáciles de aprender. Se puede usar como sustituto de Jquery o incluso para aplicaciones más grandes. Tiene muchas similitudes con React y con AngularJS.
La comunidad en torno a este framework es menor aunque con el tiempo se esta popularizando.

- **Ember**: Sigue las buenas prácticas. Muy estable, aunque difícil de aprender. Antiguamente era muy popular pero con el paso del tiempo su comunidad ha ido disminuyendo.

 <img src="https://i.imgur.com/Z5kpa28.png" class="responsive-img img-100" alt="Angular logo"> 
 <img src="https://i.imgur.com/F9skwZa.png" class="responsive-img img-100" alt="React logo"> 
 <img src="https://i.imgur.com/IKzWBcs.png" class="responsive-img img-100" alt="VueJs logo"> 
 <img src="https://i.imgur.com/I3nT8vz.png" class="responsive-img img-100" alt="Ember logo"> 

#### Task runners

Sirven de gran ayuda para programar ciertas tareas, como por ejemplo, ejecutar analizadores de código cada vez que se guarda un archivo, comprimirlos automáticamente, etc

- **Gulp**: Uno de los más populares actualmente. Usa sintaxis javascript. Más rápido que Grunt.

- **Grunt**: Antiguamente era muy popular pero su comunidad ha ido disminuyendo. Usa una sintaxis JSON. Para proyectos muy grandes puede ser problemático por la longitud de su código.

- **Webpack**: El más reciente. Aunque no es técnicamente un task runner, webpack permite compilar y comprimir muchos archivos con dependencias a archivos js estáticos. 

 <img src="https://i.imgur.com/UAbMNA6.png" class="responsive-img img-100" alt="Gulp logo"> 
 <img src="https://i.imgur.com/tmynA35.png" class="responsive-img img-100" alt="Grunt logo"> 
 <img src="https://i.imgur.com/M0mO0k3.png" class="responsive-img img-100" alt="Webpack logo"> 

#### Transpiladores Javascript

Dentro de las tecnologías web existen, en concreto en el lado del front existen herraminetas que permiten escribir código con otra sintaxis, y gracias a los transpiladores, será transformado a código Javascript (el único lenguaje aparte de HTML y CSS que entiende el navegador)

- **Typescript**: Una sintaxis muy parecida a Java. Tiene tipado estático y azúcar sintáctico. No tiene gestor de paquetes.
- **CoffeScript**: Cada vez se usa menos. Añade abstracciones sintácticas y rendimiento a Javascript aunque no añade tipado fuerte estático. 
- **Babel**: Babel transpila el código ES6+ a código ES5. El compilador es bastante lento y el código compilado suele tener menos rendimiento. 

 <img src="https://i.imgur.com/vAt09XW.png" class="responsive-img img-100" alt="Typescript logo"> 
 <img src="https://i.imgur.com/ODoDvYK.png" class="responsive-img img-100" alt="Coffescript logo"> 
 <img src="https://i.imgur.com/FOUigiQ.png" class="responsive-img img-100" alt="Babel logo"> 

#### Transpiladores CSS

De igual manera, también exixten transpiladores para transformar código en CSS, en este caso se usan para aumentar las características de CSS:

- **Less**: Fácil de aprender. Sintaxis parecida a CSS. Escrito en Javascript y muy popular con buena comunidad. No soporta uso de más condicionales, por ejemplo, los ternarios.
- **Sass**: Muy potente. Muy recomendado para aplicaciones ruby. Simplifica el código CSS existente. Para compilar código SCSS es necesario tener instalado ruby.

 <img src="https://i.imgur.com/PnuHOJR.png" class="responsive-img img-100" alt="Less logo"> 
 <img src="https://i.imgur.com/b9eBxhs.png" class="responsive-img img-100" alt="Sass logo"> 

## Tecnologías para el backend

A diferencia de en el frontend, en el backend, existe más variedad de lenguajes con los que podemos crear un servidor conectado a una base de datos.
Muchas de estas tecnologías web para el backend se pueden usar junto con los frameworks para el frontend, es decir, podemos poner como motor de plantillas Angular por ejemplo, aunque lo más típico es que se conecte frontend y backend mediante una API para que sean independientes.

#### Java

- **Spring**: El más utilizado de esta categoría. Puedes hacer desde un backend con API REST a uno con SOAP. También ofrece inyección de dependencias.  
- **Struts**: Se usa mucho en ámbitos empresariales. No es una libería muy ágil pero ahora bastante código a los programadores.
- **Vaadin**: El menos utilizado de estos tres. Ofrece la posibilidad de seguir un patrón MVC o MVP. También ofrece librerías UI y de componentes para facilitar la vida a los programadores.

 <img src="https://i.imgur.com/QHT6FzK.png" class="responsive-img img-100" alt="Spring logo"> 
 <img src="https://i.imgur.com/JwVFDIk.png" class="responsive-img img-100" alt="Struts logo"> 
 <img src="https://i.imgur.com/amUB8sH.png" class="responsive-img img-100" alt="Vaadin logo"> 

#### Python

- **Django**: El más popular dentro de python. Puedes crear aplicaciones web una forma muy sencilla y limpia
- **Flask**: Es un microframework, sirve para exponer páginas o una API pero no implementa nada más.
- **TurboGears**: Combina muchas librerías de python en una. Muy extensible y configurable.

 <img src="https://i.imgur.com/786krcK.png" class="responsive-img img-100" alt="Django logo"> 
 <img src="http://flask.pocoo.org/static/logo.png" class="responsive-img img-100" alt="Flask logo"> 
 <img src="https://i.imgur.com/s61gMz1.png" class="responsive-img img-100" alt="TurboGears logo"> 

#### NodeJS

- **ExpressJS**: El más popular con diferencia. Muchas otras librerías de nodejs parten de ésta. No ofrece integraciones con bases de datos por lo que tendremos que instalar más librerías junto a Express.
- **Koa**: Basado en ExpressJS pero con la finalidad de ofrecer una experiencia minimalista para mejorar el rendimiento. Ofrece soluciones muy eficaces para controlar la ejecución de javascript de forma asíncrona.
- **Sails**: Uno de los más sencillos de utilizar. Con este framework tendremos que seguir el patrón MVC. Por defecto ofrece integraciones con multitud de bases de datos de una forma muy sencilla.

 <img src="https://i.imgur.com/C8w2tHr.png" class="responsive-img img-100" alt="ExpressJS logo"> 
 <img src="https://i.imgur.com/5v42tDZ.png" class="responsive-img img-100" alt="Koa logo"> 
 <img src="https://i.imgur.com/1qnrFFI.png" class="responsive-img img-100" alt="Sails logo"> 

#### Golang

- **Revel**: El más popular. Esta librería, a diferencia de las demás, viene con un montón de características para que no tengas que instalar librerías adicionales. No ofrece por defecto integración con MongoDB.
- **Gin**: Muy minimalista esto hace que muchas de las cosas las tengas que hacer o buscar por tu cuenta.
- **Martini**: Termino medio entre un ecosistema completo y simplicidad. Es más lento que Gin. No está tan actualizado respecto a los demas frameworks.
- **Gorilla**: Modularidad. Es muy fácil de escalar ya que todo se basa en módulos separados. Ofrece por defecto websockets.

 <img src="https://i.imgur.com/RUciX20.png" class="responsive-img img-100" alt="Revel logo"> 
 <img src="https://i.imgur.com/trOzzeN.png" class="responsive-img img-100" alt="Gin logo"> 
 <img src="https://i.imgur.com/yaVks0l.gif" class="responsive-img img-100" alt="Martini logo"> 
 <img src="https://i.imgur.com/b3KYKiE.png" class="responsive-img img-100" alt="Gorilla logo"> 
#### Ruby

- **Rails**: Muy sencillo de utilizar, con ORM para bases de datos. No escala muy bien para aplicaciones muy grandes. 

 <img src="https://i.imgur.com/Z7bLivl.png" class="responsive-img img-100" alt="Ruby on rails logo"> 

## Conclusiones

Como ves existen un montón de frameworks y librerías y todavía exieten muchos más que no he puesto. Escoger uno o otro dependerá de los gustos de cada uno y de la magnitud del proyecto
que se vaya a realizar. El mundo web es un mundo en constante cambio, esto quiere decir que las tecnologías que están de moda hoy, mañana pueden no estarlo, por eso es importante tener
una mentalidad abierta para adaptarte a los posibles cambios que puedan surgir.


