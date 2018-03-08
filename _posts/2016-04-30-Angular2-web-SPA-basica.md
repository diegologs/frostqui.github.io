---
layout: post
title: Angular2 para crear una web SPA básica
meta: ¿Que son las webs SPA? ¿Cómo se instala Angular2? ¿Cómo se usa Angular2?
description: ¿Que son las webs SPA? ¿Cómo se instala Angular2? ¿Cómo se usa Angular2?
summary: Angular2 nos ofrece la posibilidad de de crear páginas webs SPA, es decir páginas compuestas de una sola página, esto tiene la ventaja de ser rápida, para ofrecer la mejor experiencia a los usuarios de nuestra página web. En este artículo iniciaremos un acercamiento a Angular2 para ver que cosas nos puede ofrecer. 
title-page: Cómo crear una página web SPA con Angular 2
image: angular
lang: es
tags: [Angular, Web Develop, SPA]
---


Saludos, buen señor. En esta ocasión traigo un tutorial sobre la creación de paginas web SPA con Angular2 y TypeScript. 
Para empezar, hay que definir que es SPA. SPA son las siglas de 'Single-page application', se trata de una web compuesta de una solá página, esto permite dar una experiencia mas fluida al usuario, ya que tarda mucho menos en cargar. 
Para comunicarse con el servidor utiliza API REST. Angular2 es el framework que facilita la creación de paginas webs SPA, utilizando para ello TypeScript, que es un lenguaje con una sintaxis muy parecida a Java.
<h2>Instalación de Angular2</h2>
Lo primero que tenemos que descargar es NodeJs, lo puedes descargar de aqui: <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>. Una vez instalado, abrimos su consola de comandos y ejecutamos los siguientes comandos:
<ul>
 	<li><em><b>npm install -g angular-cli@0.0.24</b></em></li>
 	<li><b>ng new main</b></li>
 	<li><em><b>cd main</b></em></li>
</ul>
Hecho todo esto simplemente ejecutamos <em><strong>ng serve</strong></em> para que nos ejecute el servidor en local, en la direccion <strong>localhost:4200</strong>, abrimos esta direccion en nuestro navegador y comprobamos que funciona correctamente.
<h2>Ejemplo de aplicación básica</h2>
Angular2 utiliza componentes. Un componente es un archivo con extension .ts, que contiene un template (nuestro archivo html con la estructura que se muestra en la web), y la lógica de esa página escrita en TypeScript. Veamos este ejemplo:

```typescript
import {Component} from 'angular2/core';

@Component({
selector: 'app',
templateUrl: 'app/app.component.html'
})
export class AppComponent {
 name = 'Tutorial';
 setNombre(nombre:string){
 this.nombre= nombre;
 }
}
```

Como vemos en el código, le pasamos el archivo html en <em>templateUrl</em> y dentro de <em>export class</em>, va la lógica de nuestra página. En este caso, simplemente he creado una variable <em>name</em>, con un string por defecto. A continuación creo una función <em>setNombre</em> para cambiar la variable. Veamos ahora el código html de nuestra página:

```typescript
<h1>Hello {{name}}!</h1>
<button (click)="setName('Frost')">
 Tu nombre 
</button>
```

Simplemente añadimos la etiqueta <em>{{nombre}}</em>, para que coja el valor de la variable del componente. Con la etiqueta <em>(click)="setName('Frost')"</em> lo que hace es llamar a la función de nuestro componente con el valor que le pasamos. Ejecutando este ejemplo nos da como resultado:

<img class="responsive-img" src="http://i.imgur.com/W4UhSod.png" alt="ejemplo angular2">

Cuando hacemos clic en el botón nos cambia el titulo con el string 'Frost'.


<h5>Otro ejemplo</h5>
En este ejemplo voy a demostrar cómo podemos utilizar observables para implementar un ejemplo básico. Para esto nos vamos a basar en dos conceptos, bbservador y observable. Los nombres son similares, pero un observable es algo que emite eventos que pueden ser observados por un observador. En resumen el observador observa y lo observable es la producción de actos que se observan. Primero creamos nuestra clase utilizando un servicio como se muestra a continuación:

```typescript
import {Subject } from 'rxjs/Subject';
import {Customer} from './customer';
export class CustomerEventEmitter extends Subject&lt;Customer&gt;{
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}

import {CustomerEventEmitter} from './customer-event-emitter';
export class PubSubService{
   Stream:CustomerEventEmitter;
   constructor(){
       this.Stream = new CustomerEventEmitter();
   }
}
```

Con este servicio muy sencillo cogemos una cadena de objetos de timo Customer. El siguiente paso es hacer nuestra clase para crear Customers, como se muestra:

```typescript
import {Component,Input} from '@angular/core';
import {PubSubService} from './pub-sub-service';
import {Customer} from './customer';
@Component({
    selector: 'producer',
    templateUrl: './components/pub-sub/producer.html'
})
export class Producer {
    @Input() firstName = '';
    @Input() lastName = '';
    constructor(private pubSubService:PubSubService){
    }
    createCustomer(){
        let customer = new Customer();
        customer.firstName = this.firstName;
        customer.lastName = this.lastName;
        this.pubSubService.Stream.emit(customer);
    }
}
```

Por ultimo creamos nuestra clase para subscribirnos a la cadena de Customers, simplemente llamando a la función 'susbscribe()'

```typescript
import {Component,OnInit} from '@angular/core';
import {PubSubService} from './pub-sub-service';
import {Customer} from './customer';
@Component({
    selector: 'consumer',
    templateUrl: './components/pub-sub/consumer.html'
})
export class Consumer implements OnInit{
    processed = [];
    subscription = null; 
    constructor(private pubSubService:PubSubService){
    }
    ngOnInit(){
        this.subscription = this.pubSubService.Stream.subscribe(customer => this.processCustomer(customer));
    }
    processCustomer(customer){
        this.processed.push(customer);
    }
    stopProcessing(){
        this.subscription.unsubscribe();
    }
}
```
<a href="http://frostq.ml/wp-content/uploads/2016/04/Screenshot_1.png"><img class="responsive-img" src="http://i0.wp.com/frostq.ml/wp-content/uploads/2016/04/Screenshot_1.png" alt="Angular2 ejemplo facils" /></a>

Al introducir los datos y pulsar el boton 'Create Costumer', se añade una fila a la tabla que aparece abajo con los datos introducidos.
