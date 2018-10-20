---
layout: post
title: Angular - Seguridad, protegiendo vistas con guards
meta: Qué es un guard en Angular y cómo usarlos para el router en Angular. Protegiendo vistas privadas
description: Qué es y como crear guards para el router en Angular. Protegiendo vistas privadas
excerpt: Si lo que quieres es proteger páginas en Angular para que determinados usuarios no puedan acceder a determinadas zonas de la web, éste es tu artículo. Además echar un vistazo a los guards básicos, también repasamos ciertos guards especiales que activan cuando el usuario abandona la página, por ejemplo.
title-page: Guards en Angular
image: angular-security
lang: es
tags: [Angular] 
serie: angular

---

## Introducción

Hay veces que queremos que determinadas áreas de nuestra aplicación web estén protegidas y solo puedan ser accedidas si el usuario ésta logueado (un panel de control por ejemplo) o incluso que solo puedan ser accedidas por determinados tipos de usuarios. Para conseguir esto con Angular se usan los guards. Los guards pueden ser extensibles para que permitan acceder bajo las condiciones que nosotros queramo, podemos incluso hacer peticiones a un backend antes de que el usuario entre en la página.

Dentro de los guards hay 4 tipos principales:

- **CanActivate**: Mira si el usuario puede acceder a una página determinada.

- **CanActivateChild**: Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.

- **CanDeactivate**: Mira si el usuario puede salir de una página, es decir, podemos hacer que aparezca un mensaje, por ejemplo, de comfirmación, si el usuario tiene cambios sin guardar.

- **CanLoad**: Sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado a hacerlo.

## Cómo se crea un guard

Los guards se implementan para ser inyectandos por lo tanto tenemos que usar la etiqueta @Inyectable, como si fuera un servicio. Si necesitas saber como crear servicios te recomiendo un [artículo anterior que escribí sobre este tema]({{site.baseurl}}/angular-servicios-llamadas-http)

Los guards devuelven **true** o **false** para permitir el paso o no de un usuario a la ruta. También pueden devolver un Observale o una Promise si el guard no puede responser inmediatamente y tiene que esperar.

Vamos a crear un guard de ejemplo, que se encargue de hacer que una ruta solo pueda ser accedida si el usuario está logueado:

```typescript
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: LoginService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.authService.isLogged()) {
            console.log('No estás logueado');
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}

```
Lo primero que hacemos es poner la etiqueta **@Injectable**, como hemos dicho antes, y a continuación, creamos la clase con el nombre que queramos y implementamos de CanActivate. LLamamos al constructor con las dependencias que necesitemos, en este caso, el authService para recuperar el user que esté logueado, y el router, para redirigir al usuario a la página de inicio en caso de que no esté logueado.

Después llamamos al método **canActivate()** y hacemos la comprobación. si el usuario no está logueado lo llevamos a la página de inicio con router.navigate y devolvemos **false**. Si esta logueado, devolvemos **true**.

Para que funcione, tenemos que importar el guard en el **app.module.ts**, en la sección **providers**

Para usar este guard en una ruta, lo importamos en el archivo de rutas y añadimos un campo a la ruta llamado **canActivate** con el guard que acabamos de crear:

```typescript
 { path: 'films', component: FilmListComponent,  canActivate: [CanActivateViaAuthGuard] },
```

Si lo que queremos es que todas las páginas hijas de una ruta estén protegidas lo que tenemos que hacer es cambiar la un par de cosas del guard. EL guard ahora no implementará de CanActivate sino de CanActivateChild, y el método de dentro de la clase, como es obvio, también cambiará a **CanActivateChild()**. El resto de cosas del guard se mantienen.

Para usar este guard para todos los hijos hacemos lo mismo que antes (añadiendo el guard en el componente padre), añadiéndolo a la ruta, pero esta vez el campo de la ruta se llamará **canActivateChild**.

Cambiando lo que hemos hecho antes por **CanDeactivate** o por **CanLoad** podemos usar este tipo de guards.

Por ejemplo una posible implementación de un guard **CanDeactivate**:

```typescript
import { CanDeactivate } from '@angular/router';
import { CanDeactivateComponent } from './app/can-deactivate';

export class ConfirmDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  canDeactivate(target: CanDeactivateComponent) {
    if(target.hasChanges()){
        return window.confirm('Do you really want to exit?');
    }
    return true;
  }
}
```

En este ejemplo, comprobamos que el componente sobre el que está definido el guard tiene cambios sin guardar. 

Los guards también pueden recibir como parámetro el propio componente sobre el que se usa el guard por si queremos usarlo dentro del propio guard.

## Conclusiones

Lo bueno de los guards es que puedes crear varios para usarlos en varias rutas. Además si quieres usar varios guards en la misma ruta, también peudes hacerlo, simplemente separando los guards con una coma:

```typescript
 canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
 canActivateChild: [AlwaysAuthChildrenGuard],
```

Si combinas estos conceptos, con los del [artículo anterior]({{site.baseurl}}/angular-login-sesion) puedes construir una aplicación bastante sencilla con login, registro, y una parte privada solo para usuarios registrados. 

Si quieres aprender más sobre este tema te dejo un par de artículos en inglés que me han resultado interesantes:

- [Documentación oficial de Angular](https://angular.io/guide/router)
- [Angular Authentication: Using Route Guards](https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3)
- [Router Guards](https://codecraft.tv/courses/angular/routing/router-guards/)
- [Implementing Guard in Angular 5 App ](https://dzone.com/articles/implementing-guard-in-angular-5-app)