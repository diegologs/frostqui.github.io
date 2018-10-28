---
layout: post
title: Cómo aumentar la velocidad en Angular para que cargue más rápido
meta: Cómo aumentar el rendimiento en Angular 2 o posterior. Cómo eliminar la carga inicial de la aplicación web
description: Cómo aumentar el rendimiento en Angular 2 o posterior. Cómo eliminar la carga inicial de la aplicación web
excerpt: Hoy en día en es muy importante que las páginas web carguen rápido. Angular al ser un framework para crear webs SPA, todos los scripts los carga al iniciar la página haciendo que tarde mucho en cargar. En este artículo veremos técnicas clave para aumentar el rendimiento.
title-page: Angular 2, cómo optimizar y aumentar el rendimiento de aplicaciones 
image: angular-2
lang: es
tags: [Angular]
lastmod: 2018-10-22T00:00:00+00:00
---


## Introducción

¿Quieres que tu web cargue rápido cuando entran los usuarios? ¿Estas usando Angular 2 y tu aplicacion carga despacio? Pues en este artículo echaremos un vistazo a las técnicas clave para aumentar el rendimiento. Angular 2 al ser un framework para crear webs SPA (Single Page Application),carga todos los recursos y scripts al iniciar la página de forma que navegar entre las "páginas" sea instantáneo. 

## Build en producción

Esta técnica es la más sencilla de implementar, simplemente cuando vamos hacer el build (compilar los archivos Angular) para subirlo a producción, tenemos que añadir el siguiente parámetro (Si el proyecto lo hemos creado usando Angular cli):

```bash
ng build --prod
```
Con este parámetro le estamos indicando al compilador de Angular que se optimice para que el tamaño de los archivos compilados sea menor y por tanto que carguen antes.

Si tu versión de angular cli es < 1.0.0 entonces tienes que añadir también otro parámetro:

```bash
ng build --prod --aot
```

Con el parámetro __--aot__ hacemos que el compilador revise el código para optimizarlo, en las versiones de angular cli superiores a la 1.0.0 (Angular 4) este parámetro no hace falta ponerlo ya que al poner __--prod__ por defecto ya añade el __aot__.


## Server Side Rendering

¿Que es server side rendering? Server side rendering (SSR) significa que el los scripts pueden ser ejecutados en un servidor para que cuando un usuario abra la página estén ya cargados, aumentando el rendimiento. La otra opción, la más habitual, es client side rendering, simplemente significa que el propio usuario carga los scripts en su ordenador. La desventaja principal de server side rendering es que se realizan más llamadas a servidor y por tanto navegar por la web es un poco más lento, pero la carga inicial es mucho más rápida que client side rendering.

__Server side rendering__:


<img src="https://i.imgur.com/Jy66YPC.png" class="responsive-img" alt="Server side rendering"> 

__Client side rendering__:


<img src="https://i.imgur.com/9SaQIDy.png" class="responsive-img" alt="Client side rendering"> 

Para hacer que una aplicación web hecha con Angular tenemos que hacer uso de una librería llamada Angular Universal:

```bash
npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader 
```

Lo primero que teenemos que hacer es añadir Angular Universal a AppModule:

```typescript
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    // El appId es un identificador único en la página
    BrowserModule.withServerTransition({appId: 'my-app'}),
    ...
  ],

})
export class AppModule {}
```
El siguiente paso es crear un archivo en el mismo nivel que AppModule llamado app.server.module.ts

```typescript
import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

import { REQUEST } from './request';


export function getRequest() {
  return {cookie: document.cookie};
}

@NgModule({
  imports: [
    
    AppModule,
    ServerModule, 
    ModuleMapLoaderModule // <-- *Importante
  ],
 
  bootstrap: [AppComponent],

  providers: [
    {
      provide: REQUEST,
      useFactory: (getRequest)
    }
]

})
export class AppServerModule {}

```

Tambíen creamos un archivo llamado request.ts:

```typescript
import { InjectionToken } from '@angular/core';

export const REQUEST = new InjectionToken<string>('REQUEST');
```

Para configurar el servidor que vamos a crear para cargar los scripts, tenemos que crear un arhivo llamado main.server.ts en la raiz de __src__:

```typescript
import { InjectionToken } from '@angular/core';

export const REQUEST = new InjectionToken<string>('REQUEST');
```

También creamos su archivo de configuración json, llamado __tsconfig.server.json__:

```json
{
    "extends": "../tsconfig.json",
    "compilerOptions": {
     
      "outDir": "../out-tsc/app",
      "baseUrl": "./",
     
      "module": "commonjs",
      "types": []
    },
    "exclude": [
      "test.ts",
      "**/*.spec.ts"
    ],
   
    "angularCompilerOptions": {
      "entryModule": "app/app.server.module#AppServerModule"
    }
  }
```

Creamos en la raíz de nuestro proyecto el archivo __server.js__, el servidor express:

```typescript
require('zone.js/dist/zone-node');
require('reflect-metadata');

const express = require('express');
const fs = require('fs');

const { platformServer, renderModuleFactory } = require('@angular/platform-server');
const { ngExpressEngine } = require('@nguniversal/express-engine');

const {ModuleMapLoaderModule} = require('@nguniversal/module-map-ngfactory-loader');
// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist-server/main.bundle`);

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

// Set the engine
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');

app.set('views', './');
app.use('/', express.static('./', {index: false}));

app.get('*', (req, res) => {
  res.render('index', {
    req,
    res
  });
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
```

También hay quue cambiar los scripts del archivo __packcage.json__, para que ejecuten y compilen adecuadamente el nuevo servidor express que hemos creado

```json
"scripts": {
    ...
    "build:universal": "ng build --prod && ng build --prod --app 1 --output-hashing=false && cpy ./server.js ./dist",
    "serve:universal": "npm run build:universal && cd dist && node server"
    ...
},

```

Por último hay que añadir el nuevo server al archivo **.angular-cli.json**, en mi caso lo tengo así:

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "project": {
    "name": "lavanda",
    "ejected": false
  },
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "serviceWorker": true,
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    },
    {
      "root": "src",
      "outDir": "dist/dist-server",
      "assets": [
        "assets",
        "manifest.json",
        "favicon.ico"
      ],
      "platform": "server",
      "index": "index.html",
      "main": "main.server.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.server.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "project": "src/tsconfig.app.json",
      "exclude": "**/node_modules/**"
    },
    {
      "project": "src/tsconfig.spec.json",
      "exclude": "**/node_modules/**"
    },
    {
      "project": "e2e/tsconfig.e2e.json",
      "exclude": "**/node_modules/**"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "component": {
    }
  }
}
```

Si te das cuenta, he añadido otro objeto dentro del array de apps.

Si ejecutamos __npm run serve:universal__ y abrimos en el navegador **http://localhost:8000/** se abrirá la aplicación angular pero habiendo cargado con anterioridad en el servidor express.

## Service workers

Imagina que vas conduciendo un coche con la radio puesta, las canciones van sonando sin que tengas que interaccionar con la radio pero si quieres cambiar de canción cambias la emisora. En este símil, la radio son los service workers, código en segundo plano que se ejecuta sin que el usuario tenga abierta la página. Esto sirve para cargar la web más rápido y para que la web funciona offline. Para añadir los web workers a la app Angular, primero instala los web workers:

```bash
npm install @angular/service-worker --save
``` 

Para habilitarlos, ejecuta (versiones de angular cli superiores a la 1.6):

```
ng set apps.0.serviceWorker=true
```

o añade manualmente en el archivo __angular.cli.josn__:

```json
{

  "apps": [

    { "serviceWorker": true }
  ]

}
```

Ahora al hacer build, angular genera nuevos archivos js:

- __ngsw-manifest.json__: Manifest con todos los recursos de nuestra web
- __sw_register__: Archivo que registra el service worker
- __worker-basic__: Archivo de apoyo para el funcionamiento de los service workers.

Si queremos que nuestra app pueda ser instalable en dispositivos móviles, añade un archivo llamado __manifest.json__ dentro de la carpeta __src__:

```json
{
  "name": "Nombre de la app",
  "short_name": "Nombre corto",
  "theme_color": "#FFFFFF",
  "background_color": "#3F51B5",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "icons": [
    {
      "src": "\/android-chrome-36x36.png",
      "sizes": "36x36",
      "type": "image\/png",
      "density": "0.75"
    },
    {
      "src": "\/android-chrome-48x48.png",
      "sizes": "48x48",
      "type": "image\/png",
      "density": "1.0"
    },
    {
      "src": "\/android-chrome-72x72.png",
      "sizes": "72x72",
      "type": "image\/png",
      "density": "1.5"
    },
    {
      "src": "\/android-chrome-96x96.png",
      "sizes": "96x96",
      "type": "image\/png",
      "density": "2.0"
    },
    {
      "src": "\/android-chrome-144x144.png",
      "sizes": "144x144",
      "type": "image\/png",
      "density": "3.0"
    },
    {
      "src": "\/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image\/png",
      "density": "4.0"
    }
  ]
}
```

 - __name__: El nombre completo de la app
 - __short_name__: Nombre corto que se muestra en el cajón de aplicaciones del movil, junto al icono
 - __theme_color__: Color junto al icono de la app
 - __background_color__: Color de fondo 
 - __start_url__: Punto de entrada a nuestra app
 - __display__: Standalone para apps móviles
 - __orientation__: Orientación de la app
 - __icons__: Iconos de la app con sus respectivos tamaños para diferentes aplicaciones

Ahora, al abrir la página web, en chrome, cuando abrimos las opciones de desarrollador, en la pestaña Application, observaremos que el service worker se ha registrado correctamente:

<img src="https://i.imgur.com/6yJf5Aa.png" class="responsive-img" alt="Service worker con Angular"> 

Si abrimos dos veces la web en el móvil usando Chrome, dejando pasar 5 minutos, aparecerá un cartel preguntando si instalar la app, al aceptar, automáticamente se añadirá la web junto a las aplicaciones del móvil.


## Conclusión

Aunque se puede optimizar aún más las aplicaciones Anagular mediante web workers (ejecutar la lógica de Angular en un thread aparte), es más complicado de implementar que las técnicas que he enseñado anteriormente. En mi caso con estas optimizaciones he logrado hacer que la web de Angular cargue en menos de 3 segundos la primera vez que se abre (antes tardaba más de 10 segundos), y que cargue casi instantáneamente cuando la tenemos cargada en la caché (antes tardaba unos segundos).
