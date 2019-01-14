---
layout: post
title: Angular - FormControl y FormGroup para crear formularios reactivos
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
excerpt: Una manera de ahorrar código en Angular y mantenerlo limpio y mantenible es usar FormControl y FormGorup para crear formularios reactivos. Además echaremos un ojo a FormBuilder, azúcar sintáctico para no tener que usar FormGroup y FormBuilder
title-page: Angular - FormGroup y FormBuilder 
image: angular-forms
lang: es
tags: [Angular] 
redirect_to:
  - http://www.codingpotions.com/angular-formularios
---

## Introducción

Angular 2 (en adelante) soporta la creación de formularios de dos tipos diferentes, mediante templates (como lo hacíamos con AngularJS) o de forma reactiva.
Cuando hablamos de formularios reactivos no usamos la directiva ngModel, sino que creamos modelos con los que Angular creará los formularios, manteniendo la lógica de nuestra
aplicación web en una sola parte, haciendo que el código sea más fácil de testear y más fácil de mantener.

## Formularios reactivos

Para usarlos tenemos que declarlos en el @NgModule:

```typescript
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ...,
    ReactiveFormsModule
  ],
  declarations: [...],
  bootstrap: [...]
})
export class AppModule {}
```

Antes de continuar es importante definir qué es un FormControl y un FormGroup.

FormControl es un objeto qué se usa en los formularios para tener un control sobre su valor y su estado en el formulario. Para usarlo:

```typescript
const ctrl = new FormControl('some value');
console.log(ctrl.value);     // 'some value'
```

FormGroup es un cojunto de FormControls, el estado de este objeto depende del estado de todos sus objetos, es decir, si uno de los FormControl es inválido, el grupo entero es inválido. Para usarlo:

```typescript
const form = new FormGroup({
  first: new FormControl('Nancy', Validators.minLength(2)),
  last: new FormControl('Drew'),
});
```

¿Y cómo podemos conectar estos oobjetos con los formularios del HTML? Es bastante sencillo, por ejemplo:

```html
<form novalidate [formGroup]="group">
  Name: <input type="text" formControlName="name">
  Location: <input type="text" formControlName="location">
</form>
```

En el componente creamos un formGroup con el nombre group con dos FormControl, name y location. Como ves, ya no utilizamos ngModel para conectar los inputs con sus valores del componente.

Para entender todo esto mejor vamos a usar un ejemplo real.

## Ejemplo

Imaginemos que queremos crear un formulario de registro, para ello creamos la siguiente interfaz:

```typescript
export interface User {
  name: string;
  password: string;
  passwordRepeat: string,
  }
}
```
Ahora en nuestro componente creamos un FormGroup con FormControl para cada uno de los campos:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({...})
export class SignupFormComponent implements OnInit {
  user: FormGroup;
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      passwordRepeat: new FormControl('')
    });
  }
}
```

Ahora creamos el formulario en el HTML del template y conectamos los campos como hemos hecho antes:

```html
<form novalidate [formGroup]="user">
  <label>
    <span>Full name</span>
    <input
      type="text"
      placeholder="Your full name"
      formControlName="name">
  </label>
  <label>
      <span>Email address</span>
      <input
        type="password"
        placeholder="Your passwornd"
        formControlName="password">
    </label>
    <label>
      <span>Confirm address</span>
      <input
        type="password"
        placeholder="Confirm your password"
        formControlName="passwordRepeat">
    </label>
  <button type="submit">Sign up</button>
</form>
```

¿Y qué pasa con el botón de submit? Pues se hace exactamente igual que al hacerlo con templates:

```html
<form novalidate (ngSubmit)="onSubmit()" [formGroup]="user">
...
</form>
```

## Validadores

Lo primero para validar es importar en el componente los validadores:

```typescript
import { FormControl, FormGroup, Validators } from '@angular/forms';
```

Para validar la información de los campos del formulario, podemos usar las funciones que nos ofrece Angular o implementar las nuestras propias, para ello cambiamos los objetos:

```typescript
ngOnInit() {
  this.user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
  });
}
```
Con Validators.requiered aseguramos que el dato exista y con minLength aseguramos que al menos el usuario introduzca dos caracteres. Como puedes ver, si queremos añadir más de 
un validador, lo podemos hacer mediante un array de validadores. 

Si ahora queremos añadir una contraseña para comprobar que las contraseñas coinciden es tan fácil como hacer:

```typescript
function passwordMatchValidator(g: FormGroup) {
   return g.get('password').value === g.get('passwordRepeat').value
      ? null : {'mismatch': true};
}
```
Para usarlo lo metemos con los otros validadores y listo.

También podemos hacer que el botón de submit esté deshabilitado mientras que no esté todo validado:

```html
<form novalidate (ngSubmit)="onSubmit()" [formGroup]="user">
  ...
  <button type="submit" [disabled]="user.invalid">Sign up</button>
</form>
```
Para mostrar, por ejemplo, mensajes de error personalizados:

```html
<div
  class="error"
  *ngIf="user.get('name').hasError('required') && user.get('name').touched">
  Nombre requerido
</div>
```
Añadiendo estilos css a gusto de cada uno, el aspecto que tiene el formulario es este:

 <img src="https://i.imgur.com/bkUV7nZ.png" class="responsive-img" alt="Formulario en Angular"> 

## FormBuilder

Ahora que entendemos bien estos conceptos, podemos que dejar que Angular añada azúcar sintáctico para que cree el FormGroup y el FormControl.

Para ello vamos a hacer uso del FormBuilder, primero lo importamos junto con lo que vamos a necesitar:

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

A continuación lo inyectamos en el constructor:

```typescript
 constructor(private fb: FormBuilder) {}
 ```

 Ahora refactorizamos el código para usar el FormBuilder:

 ```typescript
ngOnInit() {
  this.user = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
  });
}
```
Y ya estaría, como ves no añade funcionalidad nueva, simplemente es una manera de dejar el código más bonito y mantenible.

## Conclusiones

Personalmente, recomiendo el uso de FormBuilder (o en su defecto FormGroup con FormControl) sobre NgModel, sobre todo para formularios, 
ya que Angular proporciona mecanismos que facilitan la validación de los parámetos y el estado de los mismos, haciendo que el código sea mucho 
más visual y limpio.

