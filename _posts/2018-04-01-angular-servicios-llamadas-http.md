---
layout: post
title: Angular - Servicios y cómo hacer llamadas a una API REST
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
summary: Una vista general sobre qué es Angular y cómo se instala. 
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

Para usar HttpClient de Angular en cualquier parte, tenemos que importar el módulo HttpClientModule, en la sección imports de el **app.module.ts**:

```typescript
import { HttpClientModule } from '@angular/common/http';
```

HttpClient usa Observables de RxJS. Los observables son una colección de futuros eventos que llegan de forma asíncrona. Si quieres aprender más de RxJS puedes visitar su web oficial: [http://reactivex.io/rxjs/](http://reactivex.io/rxjs/).



