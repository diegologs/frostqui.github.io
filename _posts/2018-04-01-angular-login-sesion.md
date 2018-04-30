---
layout: post
title: Angular - Cómo hacer un login y cómo recordar la sesión iniciada
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
excerpt: Una vista general sobre qué es Angular y cómo se instala. 
title-page: Qué es Angular y cómo se instala
image: angular-forms
lang: es
tags: [Angular] 
serie: angular

---

## Introducción

Para hacer un login en Lavanda antes que nada necesitamos un backend al que loguearnos, porque, aunque podemos simular la funcionalidad de hacer login, realmente no estaríamos comparando los datos de login con los que tengamos guardados en Angular cosa que no es recomendable. Por lo tanto lo primero es tener un servidor con una base de datos, y una API REST a la que hacer peticiones de login y de registro de datos. Si necesitas un servidor backend con una API sencillita te recomiendo el siguiente turorial:

[https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/](https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/)

Es un tutorial sobre realizar una API CRUD (Create, Read, Update, Delete) utilizando ExpressJS, un framework para la creación de un servidor backend usando Javascript como sintaxis.

## Creando el componente de login

Lo primero que vamos a necesitar es un componente de login para mostar la página de login con el formulario junto a un servicio para realizar las llamadas http al backend.

```bash
ng generate component login
```

Añadimos el componente al routing, en mi caso voy a crear una ruta llamada login, dentro del array de rutas del routing de nuestra app:

```typescript
{ path: 'login', component: LoginComponent,  pathMatch: 'full'}
```

Ahora voy a añadir un formulario sencillito dentro del htm de login:

```html
<div class="container">
  <h1>Iniciar sesión</h1>
  
  <form class="form">
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <button type="submit" id="login-button">Login</button>
  </form>
</div>
```

También he añadido unos cuantos estilos de ejemplo, el resultado es el siguiente:

 <img src="https://i.imgur.com/EdOf7gw.png" class="responsive-img" alt="Se muestra un formulario con un campo de nombre de usuario y otro de contraseña junto a un botón de login"> 

 El siguiente paso es crear un servicio para el que el login realice peticiones http a la API del servidor, para ello creamos un archivo llamado **login.service.ts** dentro de la carpeta de login. A continucación creamos las llamdas HTTP, en este caso voy a usar una API de ejemplo de prueba:


 ```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post('https://reqres.in/api/login', {
      email: username,
      password: password,     
    });     
  }
}
 ```
 Como ves, he creado un método login, el cual recibe el usuario y la contraseña para realizar la llamada post insertando los datos a la API de prueba.

 También tenemos que importar este servicio que acabamos de crear dentro del **app.module.ts**, concretamente en el array de **providers**

 Ahora vamos a conectar el servicio con el componente, para ello lo importamos y lo inyectamos en el componente mediante **inyección de dependencias**:

 ```typescript
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
    this.loginService.login('peter@klaven', 'cityslicka').subscribe(
      res => {
        console.log(res);      
    });

  }
}
 ```

De paso he llamado al método que acabamos de crear en el ngOnInit para que se ejecute al inicio con unos datos de ejemplo para comprobar que el servicio realiza bien la petición http. 

Para llamar a un método en el componente hacemos que el botón tenga un evento **(click)=" "** y le pasamos como argumento el método a ejecutar con los datos del formulario. Para no tener que poner en los inputs la etiqueta **ngModel**, podemos poner la abreviatura **#**.

```html
<div class="container">
  <h1>Iniciar sesión</h1>
  
  <form class="form">
    <input type="text" #username name="username" placeholder="Username">
    <input type="password" #password name="password" placeholder="Password">
    <button type="submit" (click)="logIn(username.value, password.value, $event)" id="login-button">Login</button>
  </form>
</div>
```

Este proceso de conexion de la vista con el controlador, se puede hacer de otra forma (con FormControls y FormGroups), con la cual puedes validar los datos y informar al usuario si ha introducido los campos mal, pero por el momento ésta forma de hacerlo nos vale. No obstante si la quieres utilizar puedes consultar otro artículo que escribí tratando este tema: 

[{{site.baseurl}}/angular-formularios]({{site.baseurl}}/angular-formularios)

Ahora en el controlador de la vista, creamos el método para hacer login llamando al servicio:


```typescript
logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      res => {
       console.log(res);

      },
      error => {
        console.error(error);
        
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

```



En este caso he añadido el método **preventDefault()** para que el formulario no realice la acción por defecto y haga el login bien. Además, he añadido un método que se ejecuta tras hacer el login que sirve para dirigir al usuario a otra página.



## Recordando la sesión iniciada

Bien, ahora estamos logueados en el backend, pero, ¿cómo mantenemos la sesión iniciada entre las distintas páginas? ¿Cómo mantenemos la sesión cuando recargemos la página?

Para hacer esto tenemos que guardar los datos del usuario en la memoria del ordenador de forma local, también podemos usar cookies de sesión, pero es más complicado de implementar. 



## Creando nuestro propio HtppClient

Utilizando lo que hemos aprendido hasta ahora sobre llamadas http podemos hacer llamadas http de todo tipo pero todavía no podemos enviar los headers de autenticación (Basic Auth) para enviar junto a la petición http para usar con APIs protegidas.

Para almacenar el user en memoria del navegador lo mejor es tener un modelo de user para que al guardar el usuario se guarde todo el objeto con toda la información.

Para ello creamos una nueva carpeta llamada **user**, y creamos un archivo llamado **user.model.ts**:

```typescript
export class User {
  username: string;   
}
```

Por el momento vamos a almacenar solo el nombre de usuario y no nos haría falta crear un modelo para ésto, pero si en un futuro tenemos que añadir más campos al usuario nos viene bien tenerlo. 

Ahora creamos un servicio para el usuario (acuérdate de importarlo en app.module.ts en la sección **providers**), que se encargará de guardar el user en memoria y tener un control sobre si el usuario está logueado:


```typescript
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public usserLogged:User;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:User) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }

}
```

Como ves lo único que hacemos es crear un par de métodos, uno para setear el user cuando se loguea, añadiendolo al localStorage del navegador, y otro para devolver el user de localStorage. Las variables que he creado no hacen falta estrictamente, pero las creo por si las quiero usar en un futuro ya que para ver si el user esta logueado, llama cada vez a localStorage cuando solo hace falta hacerlo una vez, cuando se carga toda la app Angular.

Para probar esta funcionalidad tenemos que importar éste servicio que acabamos de crear en **login.component.ts**, creamos el user al hacer login y llamamos al método para que se guarde en memoria:

```typescript
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      res => {
        let u: User = {username: username};        
        this.userService.setUserLoggedIn(u);

      },
      error => {
        console.error(error);

      },
      () => this.navigate()
    );

  }

  navigate() {    
    this.router.navigateByUrl('/home');
  }
}
```

Por último, por ejemplo, para incluir el nombre del usurio que está logueado tenemos que recorgerlo desde el servicio con el método que creamos antes, y con un **ngIf** lo pintamos:

```html
<div *ngIf="usserLogged">
  {{userLogged.username}}
</div>
```
userLogged es una variable de tipo User (hace falta importar el modelo de User) que inicializo en el **ngOnInit()** del componente llamando al método **getUserLoggedIn()** del servicio de user (importado mediante inyección de dependencias)

## Conclusiones

Esta es la forma más simple de hacer un login con Angular, no es la mejor manera ni la más segura pero para una aplicación sencilla puede servir. Para realizar un registro de usurio lo puedes hacer con los conocimientos visto hasta ahora, simplemente creas un componente para el registro con un formulario en el html y lo conectas al componente, cuando el usuario hace click en el botón se realiza una petición POST a backend para que se registre el usuario en la base de datos. Por último si no hay código de error desde backend, llamas a setUserLoggedIn() como hemos hecho antes para dejar el user logueado.

Si quieres seguir aprendiendo y mejorando el login y el registro de tu página y ésto no te parece sufiente te dejo un par de artículos interesantes para que expandas tus conocimientos (en inglés):

- [https://blog.angular-university.io/angular-jwt-authentication/](https://blog.angular-university.io/angular-jwt-authentication/)
- [https://medium.com/@amcdnl/authentication-in-angular-jwt-c1067495c5e0](https://medium.com/@amcdnl/authentication-in-angular-jwt-c1067495c5e0)
