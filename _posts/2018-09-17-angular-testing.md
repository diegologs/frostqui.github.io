---
layout: post
title: Angular - Testing unitario
meta: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
description: ¿Cómo crear formularios con Angular? Aprende como usar FormControl, FormGroup y FormBuilder en Angular
excerpt: Una vista general sobre qué es Angular y cómo se instala. 
title-page: Qué es Angular y cómo se instala
image: angular-testing
lang: es
tags: [Angular] 
serie: angular

---

## Introducción

Antes de meternos de lleno en testear aplicaciones Angular, es importante saber qué tipos de tests que existen:

- **Tests Unitarios**: Consiste en probar unidades pequeñas (componentes por ejemplo).
- **Tests End to End (E2E)**: Consiste en probar toda la aplicación simulando la acción de un usuario, es decir, por ejemplo para desarrollo web, mediante herramientas automáticas, abrimos el navegador y navegamos y usamos la página como lo haría un usuario normal.
- **Tests de Integración**: Consiste en probar el conjunto de la aplicación asegurando la correcta comunicación entre los distintos elementos de la aplicación. Por ejemplo, en Angular observando cómo se comunican los servicios con la API y con los componentes.

En este caso vamos a ver como realizar **tests unitarios en Angular**.

## Testing unitarios con Jasmine

Para hacer tests unitarios en Angular se suele usar [Jasmine](https://jasmine.github.io/). Jasmine es un framework Javascript (No es exclusivo de Angular, lo puedes usar en cualquier aplicación web), para la definición de tests usando un lenguaje natural entendible por todo tipo de personas.

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

A contunuación llama al método beforeEach con una función asíncrona (sirve para asegurar que se termina de ejecutarla función asíncrona antes de pasar un test) para crear todas las dependencias del componente, en tese caso, el componente en sí. Si usáramos en el componente un servicio, habría que incluirlo también, creando una sección llamada providers (como en el app.module.ts).

Después vuelve a llamar a la función **beforeEach**, esta vez, sin ser asíncrona. Crea una instancia fixture del componente usando TestBed, el cual se encargará de inyectar las dependencias definidas anteriormente mediante **configureTestingModule**. Para sacar el componente en sí del fixture usa **componentInstance**.

Por último crea un test para comprobar que el componente se crea correctamente, para ello, llama a la función **expect** y espera que se cree bien y tenga error mediante **toBeTruthy()**.

Para correr los tests y ver los resultados con Angular cli el comando es:

```bash
ng test
```

### Testeando clases en Angular

Imaginemos que tenemos un servicio inyectado a un componente que queremos testear. Podemos usar dos técnicas para testear el servicio:

- **Usando el servicio real**:

  ```typescript
  import {LoginComponent} from './login.component';
  import {AuthService} from "./auth.service";

  describe('Login component', () => {

    let component: LoginComponent;
    let service: AuthService;

    beforeEach(() => { 
      service = new AuthService();
      component = new LoginComponent(service);
    });

    afterEach(() => { 
      localStorage.removeItem('token');
      service = null;
      component = null;
    });


    it('canLogin returns true when the user is authenticated', () => {
      localStorage.setItem('token', '12345'); 
      expect(component.isLogged()).toBeTruthy();
    });

  
  });
  ```

  En este caso, a diferencia de la estructura que crea Angular cli, no estoy usando TestBed, porque por el momento no me hace falta. Simplemente creo el componente y el servicio y paso el servicio como parámetro al componente para que se inyecte mediante inyección de dependencias. Cuando hago el test, simplemente llamo al método del componente y hago la comprobación.

  Esta técnica puede venir bien para aplicaciones pequeñas, pero si el componente necesita muchas dependencias puede llegar a ser muy tedioso andar creando todos los servicios. Además esto no favorece la encapsulación porque estamos creando servicios y no estamos aislando el testeo del componente.

  Además de esta forma, tenemos que meter a mano en el localStorage un valor para que el authService funciona y devuelva **true**.

- **Creando un servicio virtual**:

  ```typescript
  import {LoginComponent} from './login.component';

  class MockAuthService { 
    authenticated = false;

    isAuthenticated() {
      return this.authenticated;
    }
  }

  describe('Login component', () => {

    let component: LoginComponent;
    let service: MockAuthService;

    beforeEach(() => { 
      service = new MockAuthService();
      component = new LoginComponent(service);
    });

    afterEach(() => {
      service = null;
      component = null;
    });


    it('canLogin returns true when the user is authenticated', () => {
      service.authenticated = true; 
      expect(component.isLogged()).toBeTruthy();
    });

  
  });
  ```

  Esta vez, en lugar de usar el authService real, creamos nuestra propia clase **MockAuthService** dentro del propio test, la cual tendrá un método con el mismo nombre que el servicio real, pero en su lugar devuelve el valor directamente.

  Como hacíamos antes, creamos el componente y le pasamos el servico, en este caso, el servico virtual que hemos creado. Usando este método no tenemos que usar el localStorage, de esta forma, solo testeamos el componente en sí y no tenemos que depender de lo que haga el servicio internamente.

  Si aún asi crear el servicio virtual resulta costoso, siempre podemos extender del servicio real, sobreescribiendo los métodos que nos interesen:

  ```typescript
  class MockAuthService extends AuthService {
    authenticated = false;

    isAuthenticated() {
      return this.authenticated;
    }
  }
  ```

  También podemos sobreescribir la inyección de dependencias con nuevas clases, por ejemplo:

  ```typescript
  TestBed.overrideComponent(
    LoginComponent,
    {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
  );
  ```

- **Mediante del uso de spy de Jasmine**:

  Jasmine también ofrece la posibilidad de coger una clase y devolver directamente lo que nos interese sin tener que ejecutar internamente sus métodos:

  ```typescript
  import {LoginComponent} from './login.component';
  import {AuthService} from "./auth.service";

  describe('Component: Login', () => {

    let component: LoginComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => { 
      service = new AuthService();
      component = new LoginComponent(service);
    });

    afterEach(() => { 
      service = null;
      component = null;
    });


    it('canLogin returns true when the user is authenticated', () => {
      spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
      expect(component.isLogged()).toBeTruthy();   
    });
  });
  ```

  Como ves, con la función spyOn de Jasmine podemos hacer que el servicio devuelva directamente true en la llamada a el nombre de función que le pasamos como parámetro al spy.

### Testeando llamadas asíncronas

Si por ejemplo tenemos un test que testea un método asíncrono del componente o del servicio (una llamada a una API por ejemplo), podemos hacer lo siguiente:

```typescript
  it('Should get the data', fakeAsync(() => {
  fixture.componentInstance.getData();
  tick();
  fixture.detectChanges();    
  expect(component.data).toEqual('new data');
}));
```

Angular proporciona el método **fakeAsync** para realizar llamadas asíncronas, dejándonos acceso a la llamada a **tick()** el cual simula el paso del tiempo para esperar a que la llamada asíncrona se realice.

### Accediendo a la vista

Para acceder a los elementos html de la vista de un componente, podemos usar su fixture:

```typescript
describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitButton: DebugElement;
  

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    submitButton = fixture.debugElement.query(By.css('button_submit'));

  });
});
```

En este caso, accedemos al botón html de la vista del componente de login mediante el debugElement del fixture, el cual nos da acceso a hacer querys de elementos html de la vista.

Como en javascript podemos acceder o cambiar las propiedades de estos elementos:

```typescript
submitButton.innerText = 'Testing the button';
```

El TestBed del componente nos proporciona una manera de provocar que la vista de actualice con la nueva información en caso de que hayamos cambiado algo en el componente:

```typescript
fixture.detectChanges()
```

### Testing de llamadas http

Para testear las llamdas HTTP podemos hacer dos tests, uno para comprobar que la petición se ha realizado correctamente y otro test para verificar que la información que llega de la API es correcta. Para lo segundo podemos usar la clase MockBackend de Angular, que es capaz de simular un backend con información creada por nosotros, para que cuando el servicio realice la llamda HTTP en realidad llame al MockBackend para que no tenga ni que hacer la llamda real y podamos comprrobar la información que llega al servicio.

No me voy a meter mucho más en este tema, porque sinceramente es complejo de entender. Si aún asi tienes dudas y quieres aprender como testear servicios con llamadas http te dejo esta lista de artículos (en inglés):

- [https://angular-2-training-book.rangle.io/handout/testing/services/http.html](https://angular-2-training-book.rangle.io/handout/testing/services/http.html)
- [https://medium.com/spektrakel-blog/angular-testing-snippets-httpclient-d1dc2f035eb8](https://medium.com/spektrakel-blog/angular-testing-snippets-httpclient-d1dc2f035eb8)

## Conclusiones

Realizar tests, como pasa todos los lenguajes, es un mundo completamente aparte, hay muchos conceptos que aprender, maneras de realizar tests, etc. Como siempre digo este artículo no es más que una pequeña introducción al mundo del testing en Angular, me estoy dejando un montón de técnicas y cosas por ver que nos puede ofrecer Jasmine y Angular. Si quieres ver todas las posibilidades que pueden ofrecer puedes echar un vistazo a su página web oficial y a estos artículos interesantes:

- [https://angular.io/guide/testing](https://angular.io/guide/testing)
- [https://jasmine.github.io/pages/docs_home.html](https://jasmine.github.io/pages/docs_home.html)
- [https://medium.com/frontend-fun/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4](https://medium.com/frontend-fun/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4)
- [https://www.youtube.com/watch?v=D6qPDww2X8k](https://www.youtube.com/watch?v=D6qPDww2X8k)