---
layout: post
title: Orientacion a objetos con JavaScript 
meta: 
description: En este articulo veremos como podemos hacer orientacion a objetos usando JavaScript.
category:
emote: FutureMan
---

***

JavaScript es un lenguaje que surgió para la web, para poder interaccionar con el usuario y hacer ciertas acciones básicas. En la actualidad JavaScript se ha ampliado ofreciendo nuevas funcionalidades. Se utiliza principalmente en su forma del lado del cliente, aunque existe una versión para el lado del servidor. JavaScript puede tener todo lo que un lenguaje orientado a objetos, tiene que ofrecer.

Para entender como funciona la orientación a objetos en JavaScript, primero hay que empezar definiendo que es la orientación a objetos.

Programación orientada a objetos (POO) es un modelo de lenguaje de programación organizada alrededor de los objetos en lugar de "acciones" y datos en lugar de la lógica. Nos interesa mas saber como vamos a relacionar los objetos y la lógica del programa que los propios datos.

Tenemos que saber algunos términos asociados a la orientación de objetos:
<quote>
<strong>Clase</strong>: Definimos como va a ser nuestro objeto.</p>
<strong>Objeto</strong>: Una instancia de una clase</p>
<strong>Métodos y propiedades</strong>: Características concretas del objeto y acciones que puede realizar.</p>
<strong>Constructor</strong>: Con este método inicializamos las propiedades con los valores que le pasamos. Este método se ejecuta al crear un objeto.</p>
<strong>Herencia</strong>: Con la herencia podemos hacer que una clase adquiera las características de otra.</p>
<strong>Polimorfismo</strong>: Las clases podrían definir el mismo método o propiedad.</p>
</quote>

<a href="http://i.imgur.com/xsxithS.jpg"><img class="aligncenter wp-image-2788" src="http://i.imgur.com/xsxithS.jpg" alt="JavaScript Programacion orientada a objetos" width="523" height="260" /></a>
<h5>Programación orientada a objetos en JavaScript</h5>
Crear una clase con JavaScript tiene esta pinta:

```javascript
function Car(){}
```

Con esto definimos que nuestros coches tienen una serie de caracteristicas (4 ruedas, 1 motor, 5 asientos).

En JavaScript no necesitamos crear un método específicamente para el constructor sino que podemos usar la función que creamos antes para inicializar las características de nuestra clase.
```javascript
function Car() {
  this.wheels = 4;
    this.engines = 1;
      this.seats = 1;
      };
```
Para crear una instancia de la clase que acabamos de crear simplemente llamamos a la palabra <em><strong>new </strong></em>que indica a JavaScript que estas creando un objeto nuevo.
<pre class="lang:default decode:true">var myCar = new Car();</pre>
Pero si lo que queremos es que cada instancia tenga diferentes características pero con la misma estructura, tenemos que añadir paramentos a nuestro constructor

```javascript
function Car(wheels, seats, engines) {
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
};
var myCar = new Car(6, 3, 1);
```
De esta forma, al crear el objeto nuevo, le pasamos los valores que queramos, siguiendo la estructura definida en el constructor.

Para que una clase herede de otra, tenemos que usar su prototipo. Cada objeto tiene un prototipo. De este prototipo hereda todas las propiedades y métodos, por eso si queremos hacer que una clase herede de otra lo que tenemos que hacer es cambiar el prototipo de la clase hija por el de la clase del padre.

```javascript
function Dad() {
    this.atributoDad=4;
}

function Son() {
    this.atributoSon=5;
}
Son.prototype = new Dad;
```
