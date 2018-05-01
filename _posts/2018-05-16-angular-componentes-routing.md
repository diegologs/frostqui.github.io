---
layout: post
title: Angular - Componentes y Routing
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
excerpt: En este artículo veremos qué son los componentes y cómo crearlos, además vamos a configurar rutas en la página para visualizar estos componentes que hemos creado.
title-page: Qué es Angular y cómo se instala
image: angular-components
lang: es
tags: [Angular] 
serie: angular

---

## Qúe es un componente

Como vimos [anteriormente]({{site.baseurl}}/introduccion-instalacion-angular), Angular se basa en componentes. Un componente on un conjunto de características que actualmente están siendo añadidas por el W3C, se basa en la creación de fragmentos con vista, estilos y controladores de forma que puedan ser reutilizadas en distintas partes de la web. Por ejemplo, pongamos que creamos un componente que reciba una lista de elementos y los pinte en el html. Una vez creado podemos añadir este componente de lista que hemos creado en varios sitios de tal forma que le podemos pasar los elementos que queremos pintar para que los pinte. Esto ofrece la ventaja de no tener el código modular, es decir, si tenemos que efectuar un cambio en la manera en la que visualizamos las listas, por ejemplo, solo lo tenemos que realizar una vez para todas las listas.

Un componente se puede componer de varios archivos: vista, estilos, controladores, servicios, etc.

La vista (html) y los estilos (css), definen qué y cómo queremos representar la web. En los controladores se encuenta la lógica de los componentes. Desde este archivo podemos inicializar las variables para la vista, actualizarlos, llamar a otros archivos, crear funciones, etc. Desde los servicios es donde se hacen las llamadas para gestionar los datos, por ejemplo guardar datos, es decir, desde los controladores es mejor no gestionar datos directamente, sino que lo mejor es delegar estas funciones a los servicios.


## Creando componentes en Angular

Para crear los componentes en Angular existen dos maneras de hacerlo: la método sencillo y el manual.

### Método sencillo

Si estamos usando [Angular cli](https://cli.angular.io/), en nuestro proyecto, existe un comando para generar componentes:

Por ejemplo, imaginemos que queremos crear un componente para mostrar el navbar en todas las páginas:

```bash
ng generate component navbar
```

Si navegamos ahora a la carpeta **app** del proyecto veremos que Angular cli ha creado por nosotros una carpeta llamada **navbar**. Dentro de la carpeta navbar se ha creado un archivo css, un archivo html y un archivo .ts (controlador) junto con un .spec.ts (tests). Otro detalle a tener en cuenta es que Angular ha importado por nosotros el nuevo componente en el archivo **app.module.ts**.

### Método manual

Como podrás imaginar, este método consiste en crear los archivos que te hagan falta manualmente para el componente. También tendrás que importarlo manualmente en el archivo **app.module.ts**. 

Angular recomienda separar los componentes en carpetas según su funcionalidad, de esta forma será más fácil localizarlos y el código será más fácil de mantener.

Para crear un controlador vacío (archivo .ts) la estructura es la siguiente (por ejemplo para el componente de navbar):

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {

  constructor() { }

}
```

Importamos 'Component' de @angular/core, llamamos a @Component y le pasamos tres cosas (de momento):

- **selector**: El selector es el nombre que va a tener la etiqueta html que se crea con el componente, es decir, para el navbar será `<app-navbar></app-navbar>`, es decir desde el html de cualquier otro componente, poniendo esa etiqueta se pintará el navbar. Angular tiene una convención de nombre para el selector, kebab-case, es decir el nombre de los selectores tiene que ser una palabra guión otra palabra: algo-ejemplo.

- **templateUrl**: La url de la vista html asociada al componente.

- **styleUrl**: La url del estilo CSS asociado al componente. 

Por último hacemos export class y el nombre de la clase.

## Routing en Angular

Con esto sabemos crear componentes sueltos (todavía sin funcionalidad) pero qué pasa si hemos creado un componente para una página entera, es decir, ¿cómo se crean páginas en Angular, y cómo asignarles una ruta en la página?

Para ello necesitamos hacer uso del routing de Angular, necesitamos el archivo con las rutas.

Creamos un archivo al mismo nivel que el **app.module.ts** y lo llamamos **app.routing.ts**. Una vez creado importamos las rutas de Angular:

```typescript
import { RouterModule, Routes } from '@angular/router';
```

Ahora, creamos una variable con las rutas:

```typescript
const appRoutes = [
    { path: '', component: ItemListComponent,  pathMatch: 'full'}
];
```
- **path**: La ruta a que queremos configurar
- **component**: Componente asociado a esa ruta. Para que funcione tienes que importar el componente en la parte de arriba, por ejemplo:

  ```typescript
  import { ItemListComponent } from './item-list/item-list.component';

  ```
- **pathMatch**: Esto es opcional, significa que toda la ruta URL tiene que coincidir.

Ahora, imaginemos que queremos crear una página para mostrar en detalle los items de la lista, entonces necesitamos que Angular genere una ruta para cada item, eso se puede hacer de la siguiente manera:

```typescript
 { path: 'hero/:id', component: ItemDetailComponent }
```

**:id** indica que se generarán rutas con distintos id, luego dentro del controlador del detalle de item, recogeremos este valor y mostraremos el item correspondiente. 
Para recoger este valor, en el componente, tenemos que incluir en el constructor:

```typescript
this.myId = activatedRoute.snapshot.params['id'];
```
**this.id** es una variable que he creado en el componente.


Y si queremos iuna página 404 que aparezca cuando una ruta no coincide con alguna de las anteriores:

```typescript
 { path: '**', component: PageNotFoundComponent }
```

Al final del fichero introducimos:

```typescript
export const routing = RouterModule.forRoot(appRoutes);
```

El fichero completo, sin la ruta a la página 404, quedaría de la siguiente manera:

```typescript
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const appRoutes = [
    { path: '', component: ItemListComponent,  pathMatch: 'full'},
    { path: '', component: ItemListComponent, },
];
export const routing = RouterModule.forRoot(appRoutes);
```

Ahora, tenemos que importar las rutas en el archivo **app.module.ts**, para ello importamos la ruta y lo añadimos, esta vez en la parte de **imports**:

```typescript
import { routing } from './app.routing';

...

  imports: [
    BrowserModule,
    routing
  ],
```

Si pruebas las páginas con estos cambios te darás cuenta de que todavía no se muestran las nuevas rutas, esto pasa porque en el archivo **app.component.html** que es el primer componente que se carga, tenemos que quitar el html que viene por defecto para poner una etiqueta especial:

```html
<router-outlet></router-outlet>
```
Ahora sí que se tendrían que cargar todas las rutas. 

Dentro de esta etiqueta especial es donde se cargarán las vistas de las rutas. Por ejemplo antes de esta etiqueta podemos meter el navbar poniendo una etiqueta con el nombre del selector que tenga el navbar, por ejemplo:

```html
<app-navbar></app-navbar>
```

### Componentes hijos

Para que un componente tenga componentes hijos asociados, lo tenemos que especificar en el routing:

```typescript
const appRoutes = [
    { path: '', component: ItemListComponent,  pathMatch: 'full'},
    { path: '', component: ItemListComponent, },
];
```

Los componentes hijos se dibujarán en el router outlet que coloquemos en el padre, es decir por ejemplo, podemos crear un componente padre que sea AdminComponent y dentro componentes hijos para cada página dentro de la sección de admin, de esta forma, si colocamos el navbar, por ejemplo, en el componente padre (además del router outlet), el navbar se dibujará en todas las páginas hijas. 

Por defecto, todos los componentes de la página son hijos del componete AppComponent por lo que podemos usar este componente para incluir funcionalidad en todos los componentes de la página.

### ¿Y en el navbar cómo podemos poner links a páginas de nuestra web? 

Ya no podemos usar el atributo href, a no ser que queramos navegar a una página fuera de la web.

Para poner un link ahora tenemos que usar:

```html
  <a routerLink="/list" routerLinkActive="active">List</a>
```

De esta manera, por ejemplo navegaremos a la url list, y si la tenemos configurada en el **app.routing.ts** se cargará su vista dentro del router-outlet visto anteriormente.

## Conclusiones

Con esto ya sabemos cómo crear componentes y como asignarlos a rutas, aunque ésto es solo una parte de todo lo que se puede hacer con rutas y componentes.
Si quieres obtener más información sobre estos temas visita la documentación oficial de Angular (en inglés): 

[https://angular.io/guide/router](https://angular.io/guide/router)

