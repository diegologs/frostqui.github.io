---
layout: post
title: Angular - Servicios y cómo hacer llamadas a una API REST
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
excerpt: Una vista general sobre qué es Angular y cómo se instala. 
title-page: Qué es Angular y cómo se instala
image: angular-forms
lang: es
tags: [Angular] 
serie: angular

---

## ¿Qúe es y para qué sirven los servcios en Angular?

Si tenemos un componente que necesita leer y enviar datos de una API REST, lo mejor es delegar esta funcionalidad a los servicios, esto sirve, para mantener una estructura limpia de código. 

Para crear un servicio, podemos crear manualmente un archivo llamado _nombre_componente.service.ts_ (después tenemos que importarlo en el app.module.ts en la seccion providers), o podemos dejar que angular cli lo cree por nosotros:

```bash
ng generate service nombre_componente --module=app
```

El atributo --module=app indica que el servicio que se va a crear se va a importar directamente en el **app.module.ts**

Un servicio tiene la siguiente estructura:

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceName {

  constructor() { }

}
```

La anotación @Injectable indica que el sercio puede ser inyectado mediante inyección de dependencias tal y como vimos en el [artículo anterior](http://127.0.0.1:4000/angular-controladores-typescript), es decir, primero tenemos que importar el servicio en el componente:

```typescript
import { ServiceName } from '../serviceName.service';
```

A continuación lo inyectamos en el constructor del componente:

```typescript
constructor(private service: ServiceName) { }
```

Ya podemos usar los métodos del servicio en el componente **service.nombreFuncion()**.

## Llamadas HTTP

Hasta ahora con lo que sabemos podemos usar los servicios para leer y escribir datos, pero simulados o guardados en la memoria del navegador, para leer o escribir de una API Rest tenemos que hacer llamadas HTTP.

Para usar HttpClient de Angular en cualquier parte, tenemos que importar el módulo HttpClientModule, en la sección **imports** de el **app.module.ts**:

```typescript
import { HttpClientModule } from '@angular/common/http';
```

HttpClient usa Observables de RxJS. Los observables son una colección de futuros eventos que llegan de forma asíncrona. Si quieres aprender más de RxJS puedes visitar su web oficial: [http://reactivex.io/rxjs/](http://reactivex.io/rxjs/).

Aunque lo hayamos importado en la página de forma global, también tenemos que importarlo y inyectarlo en los constructores de los servicios desde los que vayamos a realizar llamadas Htpp:

```typescript
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceName {

  constructor(private http: HttpClient){
  }

}
```

Ahora para realizar llamadas http podemos invocar cualquiera de los siguiente métodos definidos en el HtppClient:

- get
- post
- put
- delete
- patch
- head
- jsonp

Por ejemplo para hacer una llamada get a la API de github:

```typescript
getSeeschweiler(){
  this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
    console.log(data);
  });
}
```

Si ahora inyectamos como dependencia el servicio, llamamos al método getSeeschweiler() que acabamos de crear y abrimos la consola del navegador, podemos observar que la llamada la hace correctamente.

 <img src="https://i.imgur.com/uTYBv68.png" class="responsive-img" alt="La consola del navegador muestra un objeto con varios parámetros"> 

Con esto podemos hacer llamadas http desde sercicios, pero, **¿y si queremos mostrar o enviar desde los controladores información a los servicios?**

Para hacer esto, en lugar de hacer el subscribe en el servcio, tenemos que devolver un **Observable** de la llamada http, es decir:

```typescript
getSeeschweiler(): Observable<any>{
  return this.http.get('https://api.github.com/users/seeschweiler');
}
```
No sin antes importar los observables en el servicio:

```typescript
import { Observable } from 'rxjs/Observable';
```
En este caso he declarado el Observable de tipo **any** pero lo suyo sería crear un **modelo** con los parámtros que vaya a devolver la API, para declarar el Observable de ese tipo.

Ahora, en el controlador, cuando queramos llamar al servicio (siempre y cuando lo hayamos inyectado en el controlador), tenemos que subscribirnos para recibir la información, es decir:

```typescript
this.service.getSeeschweiler().subscribe(
  data => {
    this.data = data;
    console.log(data);
  }
);
```
**this.data** en este caso es una variable que he declarado del mismo tipo que el observable que devuelve el servicio, y data asecas es la información que viene de la llamada http (service es el nombre que le he puesto al servicio al hacer la inyección de dependencias en el constructor). 

**IMPORTANTE** Cuando carga un componente que hace llamadas http, si mostramos una variable que viene de una petición http, no se cargará y tirará error porque en el isntante en el que se abre la página, la petición aún no se ha realizado. Para arreglar esto tenemos que poner un **ngIf** a la variable que viene desde la petición antes de mostrarla en la vista:

{% raw %}
```html
<div *ngIf="data">

{{data}}

</div>
```
{% endraw %}

### Cómo enviar información con llamadas HTTP

Para realizar una llamada POST, o una llamada PUT, por ejemplo, necesitamos pasar información o un objeto al servidor. Para conseguir esto simplemente al realizar la llamada que corresponda, desde el servicio pasamos el objeto correspondiente, por ejemplo:

```typescript
postExample(test_object: ObjectType): Observable<any>{
  return this.http.post('http://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
      });
}
```

Y también podemos pasar como parámetro el objeto para que lo reciba desde fuera:

```typescript
postExample(test_object: ObjectType): Observable<any>{
  return this.http.post('http://jsonplaceholder.typicode.com/posts', test_object});
}
```

En este ejemplo he usado la página de **jsonplacer** que permite hacer pruebas de API REST. Si probamos a hacer un POST y hacemos un **console.log** de lo que llega tras hacerlo, recibiremos un objeto confirmando que el objeto se ha creado correctamente.

### Enviar en las llamdas HTTP los headers de sesión

Si queremos enviar headers de autorización (por ejemplo si una API está protegida y para usarla previamente te has logueado), lo mejor es crear un arhchivo .ts a parte para crear un método para cada llamada Http para inyectar los headers. 

En este ejemplo, sessionData es una clase que tengo para almacenar la sesión. Dentro de este archivo tengo un método para generar los headers Basic auth:

```typescript
   public generateAuthString(username: String, password: String) {
        return 'Basic ' + btoa(username + ':' + password);
    }

```

```typescript
import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpWithHeaders {

    public sessionData: SessionData;


    constructor(private http: Http) {
        this.sessionData = new SessionData();
    }

    generateHeaders() {
        const headers = new Headers();

        if (this.sessionData.amILogged()) {
            headers.append('Authorization', this.sessionData.authToken());
        }

        return headers;
    }

    get(url) {
        return this.http.get(url, {
            headers: this.generateHeaders()
        });
    }


    post(url, data) {
        return this.http.post(url, data, {
            headers: this.generateHeaders()
        });
    }

    put(url, data) {
        return this.http.put(url, data, {
            headers: this.generateHeaders()
        });
    }

    delete(url) {
        return this.http.delete(url, {
            headers: this.generateHeaders()
        });
    }
}
```

**this.sessionData.authToken()** simplemente devuelve los headers de sesión.

Para usar esta clase que acabamos se crear, simplemente lo importamos en el servicio que queramos y llamamos a cada uno de los métodos pasando la url como parámetro para que ejecute la petición http junto con los headers.

Agradecimientos a [@ExtremoBlando](https://github.com/ExtremoBlando) por enseñarme ésta técnica.

### Tratamiento de errores

Al hacer subscribe, ya sea en el servicio o en el controlador, podemos poner un parámetro para saber si se ha producido un error:

```typescript
data => {
    this.data = data;
    console.log(data);
},
err => {
  console.log("Error.")
}
```

Si necesitas más información específica, puedes declarar el parámtro de eror de tipo **HttpErrorResponse** (lo tienes que importar desde @angular/common/http), por ejemplo:

```typescript
this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
    data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error");
      } else {
        console.log("Server-side error");
      }
    }
);
```

## Conclusiones

Con lo que hemos visto en este artículo y con todo lo anterior, no deberías tener problemas en hacer una web entera con Angular, ya que hemos cubierto los conceptos más básicos. Aún asi todavía quedan muchas características que Angular puede ofrecer y que todavía no hemos visto, por lo que te animo a que eches un vistazo a su documentación oficial: [https://angular.io/docs](https://angular.io/docs)



