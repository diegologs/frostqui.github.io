---
layout: post
title: Angular - Comunicación entre componentes
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
excerpt: En este artículo veremos qué son los componentes y cómo crearlos, además vamos a configurar rutas en la página para visualizar estos componentes que hemos creado.
title-page: Qué es Angular y cómo se instala
image: angular-share-data
lang: es
tags: [Angular] 
serie: angular

---

## Introducción

Sabemos como crear componentes, pero **¿cómo se conectan componentes entre sí?**

Una de las ventajas de los componentes web es que puedes crearlos pensando en que puedes usarlos en varios sitios, para ello puedes requerir que cada uno se pueda "personalizar". Por ejemplo, imagina que creas un componente para pintar un botón. Si a ese botón le pones un texto, en cualquier sitio donde uses ese componente va a mostrar el mismo texto, ¿no sería genial poder cambiar el texto dependiendo del texto que necesitemos en ese momento? 

El ejemplo anterior es un ejemplo de comunicación desde el padre al hijo, pero también se puede hacer al revés, por ejemplo, para hacer una acción en el componente padre cuando ocurra algo en el hijo como pulsar un botón por ejemplo.

Dentro de la comunicación entre componentes en Angular, hay varios tipos dependiendo de lo que necesitemos. A continuación vamos a verlos:

<img src="https://i.imgur.com/qUJqrV1.jpg" class="responsive-img" alt="Comunicación entre componentes en Angular"> 

## Comunicación desde el componente padre al hijo mediante input

La que más se suele utlizar. Consiste en usar la etiqueta **@Input** de Angular. Ésta etiqueta se pone en el componente hijo para indicar que esa variable proviene desde fuera del componente, es decir desde el componente padre usamos el selector del hijo para incluirlo en el html y le pasamos el valor que queremos pasar al hijo:

En el componente hijo:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Message from parent: {{childMessage}}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childMessage: string;

  constructor() { }

```

En el componente padre:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [childMessage]="parentMessage"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  parentMessage = "message from parent"
  constructor() { }
}
```

Para el ejemplo he puesto el template html de los componentes directamente en el controlador para ahorrar espacio pero funciona igual si tienes un archivo html a parte. El valor de la variable **childMessage** viene desde el componente padre y se la pasamos desde el html mediante **[childMessage]**.


## Comunicación desde el componente hijo al padre mediante ViewChild()

Mediante ViewChild, el padre crea el componente hijo y tiene acceso a sus datos y atributos:

En el hijo:

```typescript
import { Component} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "Hola Mundo!"

  constructor() { }

}
```

En el padre:

```typescript
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  template: `
    Message: {{message}}
    <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child;

  constructor() { }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}
```

La particularidad de éste método es que tenemos que esperar a que la vista esté totalmente cargada para acceder a los atributos del hijo. Para ello creamos un método de Angular llamado **ngAfterViewInit()** en el que simplemente inicializamos la variable con el valor del atributo del hijo (el hijo lo declaramos como  @ViewChild(ChildComponent)).



## Comunicación desde el componente padre al hijo mediante output y eventos

Éste método es útil cuando queremos queremos informar de cambios en los datos desde el hijo, por ejemplo, si tenemos un botón en el componente hijo y queremos actualizar los datos del padre.

En el hijo:

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
```

En el padre:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Message: {{message}}
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  message:string;

  receiveMessage($event) {
    this.message = $event
  }
}
```

En el hijo declaramos un evento de tipo **EventEmitter** y con la pulsación del botón ejecutamos un método para lanzar el evento al padre. Desde el padre creamos una función para recibir el mensaje desde el evento y incluimos en la etiqueta del html **(messageEvent)="receiveMessage($event)** para conectar el evento al método que hemos creado.

## Compartir datos usando servicios

Si has seguido mi **[serie de artículos sobre Angular]({{site.baseurl}}/series/angular)** ya te sonarán los servicios. Los servicios, además de para realizar llamadas y peticiones Http, también sirven para compartir información desde unos componentes a otros **que no estén relacionados**, es decir, que no sean padre e hijo.

Para ello en el servicio creamos un método para setear el valor de una varibale y otro para devolverlo, de ésta manera, si tenemos los servicios importados en los componentes usando **inyección de dependencias** podemos desde uno de los servicios actualizar el valor de la variable, y desde el otro de los componentes, recoger el valor de la misma variable.

## Usando la librería ngrx

**Ngrx** (basado en Redux para React) es una librería para Angular para el manejo de estados mediante RxJS. Ngrx se compone de varias partes:

- **Store**: Aunque no exactamente, ésta parte, se puede definir como la "base de datos del lado cliente". Aquí se almacena el estado de nuestra aplicación Angular.
- **Reducer**: Los reducers cogen el estado de la app y le aplican **funciones puras**. Una función pura es una función que, para una misma entrada, siempre devuelve el mismo resultado. Como resultado de aplicar reducers al estado de la app, se obtiene una nueva app que se guarda en el store.
- **Actions**: Las actions tienen la información y los tipos necesarios para que los reducers lo apliquen para modificar el estado.

La principal ventaja de usar Ngrx junto con Angular es que reduce la complejidad de la arquitectura, sobre todo para aplicaciones grandes. Además de que tener todo el estado de una aplicación Angular en un solo sitio facilita mucho las labores de desarrollo.

Si quieres saber cómo aplicar ngrx a Angular te dejo un par de artículos:

- [https://medium.com/stratajet-tech/a-beginners-guide-to-ngrx-store-bc2184d6d7f0](https://medium.com/stratajet-tech/a-beginners-guide-to-ngrx-store-bc2184d6d7f0)
- [https://medium.com/@nomanbinhussein/getting-started-with-ngrx-5cec2788b25f](https://medium.com/@nomanbinhussein/getting-started-with-ngrx-5cec2788b25f)

## Conclusiones

Hemos visto muchas formas de compartir información entre componentes, y usar una o otra forma, dependerá de cómo sea la aplicación web que quieres desarrollar.

Si no te quieres complicar, lo más común suele ser la comunicación padre hijo mediante @Input y la del hijo con el padre mediante eventos. Si necesitas que muchos componentes accedan a los mismos datos, vas a necesitar servicios. Lo más recomendable es instalar siempre la librería **NgRx** ya que te va a permitir de una manera muy cómoda comapartir datos entre componentes con reactividad, es decir, si desde uno de los componentes cambias el store, automáticamente los cambios se ven reflejados en todos los componentes que tiren de ese store.