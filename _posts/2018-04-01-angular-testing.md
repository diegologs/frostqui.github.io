---
layout: post
title: Angular - Testing e2e y unitarios
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
summary: Una vista general sobre qué es Angular y cómo se instala. 
title-page: Qué es Angular y cómo se instala
image: angular-forms
lang: es
tags: [Angular] 
serie: angular

---

## Introducción

Antes de meternos de lleno en testear aplicaciones Angular, es importante saber qué tiposd de tests existen:

- **Tests Unitarios**: Consiste en probar unidades pequeñas (componentes por ejemplo).
- **Tests End to End (E2E)**: Consiste en probar toda la aplicación simulando la acción de un usuario, es decir, por ejemplo para desarrollo web, mediante herramientas automáticas, abrimos el navegador y navegamos y usamos la página como lo haría un usuario normal.
- **Tests de Integración**: Consiste en probar el conjunto de la aplicación asegurando la correcta comunicación entre los distintos elementos de la aplicación. Por ejemplo, en Angular observando cómo se comunican los servicios con la API y con los componentes.

## Testing unitarios con Jasmine

Para hacer testing en Angular se suele usar [Jasmine](https://jasmine.github.io/). Jasmine es un framework Javascript (No es exclusivo de Angular, lo puedes usar en cualquier aplicación web), para la definición de tests usando un lenguaje natural entendible por todo tipo de personas.

Un test en Jasmine tiene esta pinta:

```typescript
describe("A suite name", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
```

- **describe**: Define una suite de tests, es decir, una colección de tests. Ésta función recibe dos parámetros, un string con el nombre de la suite y una función donde definiermos los tests.

- **it**: Define un test en particular. Recibe cómo parámetro el nombre del test y una función a ejecutar por el test.

- **expect**: Lo que espera recibir el test. Es decir, con expect hacemos la comprobación del test. Si la comprobación no es cierta el test falla. En el ejemplo anterior comprobamos si true es true luego el test pasa. Cómo ves no podemos simplemente hacer la comprobación haciendo poniendo la operación **===**, tenemos que usar las funciones que vienen con Jasmine, las cuales son:

    - expect(array).toContain(member);
    - expect(fn).toThrow(string);
    - expect(fn).toThrowError(string);
    - expect(instance).toBe(instance);
    - expect(mixed).toBeDefined();
    - expect(mixed).toBeFalsy();
    - expect(mixed).toBeNull();
    - expect(mixed).toBeTruthy();
    - expect(mixed).toBeUndefined();
    - expect(mixed).toEqual(mixed);
    - expect(mixed).toMatch(pattern);
    - expect(number).toBeCloseTo(number, decimalPlaces);
    - expect(number).toBeGreaterThan(number);
    - expect(number).toBeLessThan(number);
    - expect(number).toBeNaN();
    - expect(spy).toHaveBeenCalled();
    - expect(spy).toHaveBeenCalledTimes(number);
    - expect(spy).toHaveBeenCalledWith(...arguments);

Jasmine también viene con funciones que se pueden ejecutar antes de realizar un test, o después:

- **beforeAll**: Se ejecuta **antes** de pasar **todos** los tests de una suite.
- **afterAll**: Se ejecuta **después** de pasar **todos** los tests de una suite.
- **beforeEach**: Se ejecuta **antes** de cada test de una suite.
- **afterEach**: Se ejecuta **después** de cada test de una suite.

Por ejemplo:

```javascript
describe('Hello world', () => {

  let expected = "";

  beforeEach(() => {
    expected = "Hello World";
  });

  afterEach(() => {
    expected = "";
  });

  it('says hello', () => {
    expect(helloWorld())
        .toEqual(expected);
  });
});
```

Antes de ejecutar el test definido mediante la función **it** se llama a la función **beforeEach** la cual cambia el valor de la variable expected, haciendo que el test pase. 

## Testing unitarios con Angular

Si has creado el proyecto y los componentes usando Angular cli, te habrás dado cuenta de que al generar un componente, también se crea un archivo **.spec.ts**, y eso es porque Angular cli se encarga por nosotros de generar un archivo para testear cada uno de los componentes. Además mete en el archivo el código necesario para empezar a probar y testear los componentes. Por ejemplo, el archivo **notes.component.spec.ts** que se creó cuando generé un componente para crear y mostrar notas tiene esta pinta:


```typescript
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

Lo primero que hace es crear una suite de tests para el componente con el método **describe**. Tras crear la suite crea dos variables que va a necesitar para testear los componentes, el propio componente, que lo mete en la variable **component** y una variable fixture de tipo ComponentFixture del componente, la cual sirve para tener el componente pero añadiendo más información para que sea más fácil de testear.