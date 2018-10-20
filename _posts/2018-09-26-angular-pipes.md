---
layout: post
title: Angular - Pipes, como se usan para dar formato en la vista
meta: Qué son las pipes en Angular y cuáles son las que vienen por defecto para cambios de divisa por ejemplo
description: Qué son las pipes en Angular y cuáles son las que vienen por defecto para cambios de divisa por ejemplo
excerpt: Artículo muy cortito con información sobre las pìpes, muy útiles para el parseo de información en la vista sin tener que repetir código. Las pipes no son más que etiquetas que se utilizan dentro de la vista para transformar el valor de una variable.
title-page: Pipes en Angular y cómo se usan
image: angular-pipes
lang: es
tags: [Angular] 
serie: angular

---

## Introducción

Imaginemos que desde Angular hacemos llamadas a una API y en una de esas llamadas recibimos un string con una fecha, por ejemplo, 'Fri Apr 15 1988 00:00:00 GMT-0700'
Si queremos pintar esa fecha en la vista pero con otro formato, podemos transformarlo directamente cuando venga de la API para guardar la fecha con el formato que queremos para después pintarlo en la vista, pero si este nuevo formato de fecha solo lo necesitamos para su visualización podemos usar las pipes. 

Las pipes son etiquetas que se ponen al visualizar una variable en un template para transformar el valor de la variable que se está imprimiendo. 

## Cómo usar las pipes

Los pipes se usan poniendo el carácter  **`|`** al pintar una variable, por ejemplo podemos poner:

{% raw %}
```html
  {{ 'BBBBB' | lowercase }}
```
{% endraw %}

Y lo que imprimirá será: **bbbbb**

También se pueden combinar varias pipes, por ejemplo:

{% raw %}
```html
{{ 459.67 | currency: 'USD' | lowercase }}
```
{% endraw %}

Lo que imprimirá: **$459.67** (se han aplicado las dos pipes, pero en este caso, no hay letras para ponerlas en minúsculas).

### Pipes por defecto

Angular ya viene con varias pipes listas para usarse:

- **Currency**: Pipes para el formateo de monedas. Para usarlas hay que pasar a la pipe la moneda que queremos usar, por ejemplo:

  {% raw %}
  ```html
  {{ 345.76 | currency: 'EUR' }}
  ```
  {% endraw %}

  Lo que imprimira: **€345.76** 

- **Date**: Para el formateo de fechas. Igual que en el pipe de currency, hay que pasar un parámetro a la pipe dependiendo del formato de fechas que queremos, por ejemplo: 

  {% raw %}
  ```html
  {{myVar | date: 'shortDate'}}
  ```
  {% endraw %}

  myVar es una variable creada en el componente de tipo **Date**.

  Los formatos de fecha que podemos pasarle a estas pipes son:

  - **'short'**: por ejemplo, 6/15/15, 9:03 AM
  - **'medium'**: por ejemplo, Jun 15, 2015, 9:03:01 AM
  - **'long'**: por ejemplo, June 15, 2015 at 9:03:01 AM GMT+1
  - **'full'**: por ejemplo, Monday, June 15, 2015 at 9:03:01 AM GMT+01:00
  - **'shortDate'**: por ejemplo, 6/15/15
  - **'mediumDate'**: por ejemplo, Jun 15, 2015
  - **'longDate'**: por ejemplo, June 15, 2015
  - **'fullDate'**: por ejemplo, Monday, June 15, 2015
  - **'shortTime'**: por ejemplo, 9:03 AM
  - **'mediumTime'**: por ejemplo, 9:03:01 AM
  - **'longTime'**: por ejemplo, 9:03:01 AM GMT+1
  - **'fullTime'**: por ejemplo,9:03:01 AM GMT+01:00

  También podemos pasar directamente el formato que queremos:

  {% raw %}
  ```html
  {{myVar | date: 'M/d/yy'}}
  ```
  {% endraw %}

- **Decimal**: Para mostrar números con coma decimal. Como argumento, recibe números indicando cuantos decimales queremos antes y después de la coma, por ejemplo:

  {% raw %}
  ```html
  {{ 3.14159265 | number: '3.1-2' }}</p>
  ```
  {% endraw %}

  Indicamos que queremos 3 números antes de la coma y de 1 a 2 elementos tras la coma, lo cual imprimira: **003.14**

- **JSON**: Si imprimimos directamente una varible que contiene un JSON, Angular imprimirá [object Object], pero si usamos esta pipe, directamente imprimirá todo el JSON:

  {% raw %}
  ```html
  <p>{{ myVal | json }}</p>
  ```
  {% endraw %}
  
  myVal es la variable del componente en la que guardamos el JSON. Esta pipe imprimirá: 
  
  **`{ moo: 'foo', goo: { too: 'new' }}`**

- **LowerCase y UpperCase**: Como su nombre indican, para transformar texto a mayúsculas o a minúsculas:

  {% raw %}
  ```html
  <p>{{ 'prueba' | uppercase }}</p>
  ```
  {% endraw %}

  {% raw %}
  ```html
  <p>{{ 'PRUEBA' | lowercase }}</p>
  ```
  {% endraw %}

- **Percent**: Para imprimir porcentajes, se usa igual que los decimales, indicando el número de dígitos que queremos antes y después de la coma:
  
  {% raw %}
  ```html
   <p>{{ 0.38679 | percent: '2.1-2' }}</p>
  ```
  {% endraw %}

  Lo que imprimirá: **38.68%**

- **Slice**: Para recortar arrays. Se pasan dos números el índice del principio y el índice del final:

  {% raw %}
  ```html
   <p>{{ [1,2,3,4,5,6] | slice:1:3 }}</p>
  ```
  {% endraw %}

  El resultado será: **2,3**

## Pipes personalizadas

Si queremos hacer algo más específico, también podemos crear nuestra propia pipe. Para crear pipes, Angular cli viene con un comando para crearlas directamente:

```bash
ng generate pipe
```

Aunque también podemos crearlas a mano por ejemplo, creando un archivo llamado **reversed.pipe.ts**

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reversed'})
export class ReverseStr implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }
}
```

Como ves, primero importamos Pipe y PipeTransform desde Angular core. Con la anotación @Pipe creamos la pipe y le asignamos un nombre, el cual pondremos en el html para usar esta pipe que estamos creando. Con el método transform declaramos una variable que será la que venga desde el html, es decir, la variable sobre la que se aplica la pipe. Si queremos pasar párametros a la pipe desde el html como en las pipes anteriores, tenemos que declararlas en el transform también. 
A continuación hacemos la transformación que queramos a la variable y hacemos un return con la variable nueva.

Para usar esta pipe que acabamos de crear debemos importarla en la sección **imports** del **app.module.ts**

Por último para usarla en cualquier vista, simplemente creamos la pipe con el nombre que le dimos y listo:

{% raw %}
```html
{{ variable | reversed }}
```
{% endraw %}

## Conclusiones

Todas las transformaciones que haces en las pipes las puedes hacer en un método en el componente, pero de ésta forma, se hace más rápido y el código queda limpio. Además si creamos nuestras propias pipes las podemos usar en todos los componentes de la app, lo que facilita la mantenibilidad del código y hace que la aplicación sea más testeable.

Como recomendación, recomiendo tener todas las pipes localizadas en archivos dentro de una misma carpeta, por ejemplo, en un carpeta llamada **pipes**. 

Las pipes también se pueden usar con Observables y con Promises, permitiendo que no tengas que hacer subscribe manualmente a a los observales, en la mayoría de los casos. Te dejo un par de artículos por si te interesa aprender sobre esta funcionalidad:

- [https://alligator.io/angular/async-pipe/](https://alligator.io/angular/async-pipe/)

- [https://angular.io/api/common/AsyncPipe](https://angular.io/api/common/AsyncPipe)
