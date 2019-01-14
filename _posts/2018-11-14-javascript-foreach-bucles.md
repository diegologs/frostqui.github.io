---
layout: post
title: Javascript - foreach y todo sobre los bucles js 
meta: Entra y descubre qué bucle de los que hay en javascript es mejor para cada situación. Además echamos un vistazo a las instrucciones break y continue aplicadas a los bucles js
description: Entra y descubre qué bucle de los que hay en javascript es mejor para cada situación. Además echamos un vistazo a las instrucciones break y continue aplicadas a los bucles js
excerpt: Aprende cómo funcionan los bucles en javascript. Echamos un vistazo a todos los bucles que existen en js y los problemas que existen al usar cada uno de ellos. Además vemos cómo funcionan las instrucciones break y continue, usadas junto a los loops en muchos lenguajes de programación 
title-page: Javascript - foreach y todo sobre los bucles en js 
image: javascript-foreach
lang: es
tags: [Javascript]
redirect_to:
  - http://www.codingpotions.com/javascript-foreach-bucles
---


## ¿Qué es un loop en Javascript? Conceptos generales

Antes de empezar me gustaría explicar qué son los loops en javascript, bueno realmente que son los bucles en general ya que son aplicables a todos los lenguajes de programación. 

Un loop es una serie de instrucciones que se utilizan para no tener que repetir código, si por ejemplo queremos mostrar por pantalla un mensaje 10 veces, en lugar de pegar y copiar la instrucción 10 veces, podemos crear un bucle. Generalmente todos los lenguajes de programación tienen entre su sintaxis, la creación de bucles **for** y bucles **while**

## Javascript, usando los bucles for y while

Un bucle **for** se compone de una instrucción en la cual una variable contador se define y se incrementa hasta el límite tope que hayamos puesto. También podemos hacer que el contador vaya disminuyendo en el bucle.

Veamos con un ejemplo rápido:

```javascript
for(let i=0; i<10; i++){
    console.log('Iteracción: ' + i);
}
```

Un bucle **while** se trata de una manera de hacer que el código se repita hasta que se cumpla determinada condición. Un bucle while se puede usar como un bucle for si hacemos que la condición de salida del bucle sea cuando sobrepasamos el contador, aunque tendremos que incrementar manualmente la condición.

```javascript
let i = 0
while(i<10){
    console.log('Iteracción: ' + i);
    i++;
}
```

Si estas familiarizado con la sintaxis de Javascript seguramente ya conocías de sobra estos bucles pero no está de más recordarlo por si hay alguien que lo desconoce. 

## Instrucciones break y continue

Para ambos bucles, existen dos instrucciones que pueden resultar bastante útiles en algunas situaciones. 

La instrucción **break** sirve para salir del bucle **for** si se cumple una condición. Hasta ahora si quería salir del bucle siempre podías poner un **if** justo al empezar el bucle para comprobar si podemos seguir en el bucle, pero esto hace que la variable se siga.

```javascript
for (i = 0; i < 10; i++) { 
    if (i<5) {   
        connsole.log("Contador: " + i);
    }
}
```

<img src="https://i.imgur.com/DcawNfK.jpg" class="responsive-img" alt="Componentes de Angular material"> 

Aunque no se pinte el contador, la variable se sigue incrementando. Si por ejemplo tenemos un bucle que se va a ejecutar 1000 veces, si nos salimos en la segunda ejecución, el bucle seguirá ejecutándose aunque no se muestre nada.

Aquí es donde entra en juego la instrucción **break** en javascript y en general en muchos lenguajes, para optimizar los bucles y que no se ejecuten de más.

Si pones un if dentro del bucle como antes y dentro la instrucción **break**, en cuanto se ejecute, saldrá del bucle y no se ejecutará más pase lo que pase. Por ejemplo:

```javascript
for (i = 0; i < 1000; i++) {
    if (i === 3) { break; }
    connsole.log("Contador: " + i);
}
```

En este ejemplo, en cuanto el contador valga 3, saldrá del bucle y no ejecutará las 996 interacciones posteriores.

La instrucción **continue**, sirve para saltarse instrucciones específicas, es decir, si llega a esta instrucción el bucle se saltará lo que ponga a continuación y pasará a la siguiente instrucción del bucle. Un ejemplo de la instrucción continue en sintaxis js:

```javascript
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    connsole.log("Contador: " + i);
}
```

Si ejecutas el código anterior y miras en la consola del navegador, podrás observar que no pinta el contador cuando vale 3.

Estas dos instrucciones se pueden usar junto a una etiqueta para referenciar el bloque al que se aplica, por ejemplo:

```javascript
var fruits = ["Apple", "Banana", "Cherries"];
list: {
    text += fruits[0] + "<br>"; 
    text += fruits[1] + "<br>"; 
    break list;
    text += fruits[2] + "<br>"; 
    text += fruits[3] + "<br>"; 
}
```

## Cómo usar el bucle foreach en javascript

Javascript también tiene un bucle foreach, pero no es muy recomendable usarlo, ahora os cuento el por qué. Primero veamos lo que es exactamente. El bucle foreach en js, y en general en muchos lenguajes, es un bucle que simplemente recorre los objetos de un array. Esto también se puede hacer con un bucle for normal:

```javascript
for (i = 0; i < array.length; i++) {
    connsole.log(array[i]);
}
```

El bucle que voy a poner a continuación funciona como un bucle foreach de otros lenguajes pero técnicamente no lo es porque con las versiones mas recientes de Javascript (ES6) ya incluyen un bucle forEach propiamente dicho. Este bucle se llama bucle for in:

```javascript
for (var x in array) {
    console.log(x);
}
```

Como ves simplifica mucho el bucle, pero entonces,  ¿qué desventajas tiene usar for in en javascript?

Pongamos este ejemplo:

```javascript
var a = [];
a[5] = 3;
for (var x in a) {
    console.log(x);
}
```

Lo que todo el mundo esperaría es que el array va a pintar 5 veces undefined y una vez el número 3, que corresponde con el valor que hay en el array en la 5º posición, como si que pasaría si hacemos esto mismo pero con un bucle for normal, pero esto no es así, lo que va a mostrar en la consola es una vez el número 3 y nada más. Esto es debido a que lo que hace es pintar únicamente los valores del array que tengan un valor. Si esta funcionalidad la esperábamos si que nos puede servir, pero si no sabemos si el array va a tener casillas undefined puede ser que no sea lo que estamos buscando.

Otro de los problemas de usar for each es que no está garantizado el orden numérico a la hora de recorrer el array, sobre todo en versiones más antiguas de los navegadores.

Otro de los problemas de estos bucles es que primero se recorre todas las propiedades del array para sacar sus propiedades, simplemente para sacar el nombre, si queremos sacar su valor vamos a necesitar otra lectura, haciendo que este bucle sea más lento que un bucle for normal.

## for in vs for of en javascript

Hay otro tipo de bucle que funciona muy parecido al bucle for in visto anteriormente, el bucle for of. La sintaxis es exactamente la misma, se diferencia del anterior en que el bucle for of itera sobre los objetos que son iterables, un array por ejemplo. En cambio el bucle for in está pensado para iterar sobre las propiedades de los objectos. Si lo aplicamos sobre un objecto devolvera las claves (el nombre de sus propiedades pero no su valor)

Como hemos visto antes, se puede usar también for in para recorrer un array, pero no es recomendable. Veamoslo con un par de ejemplos:

Ejemplo de bucle for in:

```javascript
var oldCar = {
    make: 'Audi',
    model: 'A4',
    year: '2010'
};

for (let key in oldCar) {
    console.log(key + ' - ' + myCar[key]);
}
```
Si hacemos este mismo bucle pero con un **for of** se mostrará por pantalla:
```
make
model
year
```
Ejemplo de bucle for of:

```javascript
let animals = ['sheep', 'pig', 'rabbit'];

for (let animal of animals) {
    console.log(animal);
}
```
El bucle for of solventa los problemas que hemos visto con los bucles for in si se usa sobre arrays.

## Bucle foreach en ES6

Cuando sacaron ES6 incluyeron una nueva forma de recorrer los elementos de un array:

```javascript
myArray.forEach(function (value) {
  console.log(value);
});
```

Pero este bucle también añadió nuevos inconvenientes. Con este bucle no puedes hacer **break** para salir del bucle ni **return**, excepto estos problemillas, el bucle es bastante recomendable. Este bucle se suele usar en favor del bucle for cuando necesitamos encapsular código, es decir, como pasamos al bucle una función, dentro de la función vamos a tener todo encapsulado y esto es recomendable. También se suele usar para recorrer los elementos de una lista o array para aplicar una función o un cálculo sobre ellos, aunque también existe otra manera que vamos a ver a continuación.

## Función map en js para recorrer arrays y listas

Otra cosa que fue añadida en JS fueron los **maps**. Los maps sirven para ejecutar operaciones a cada elemento de los arrays. Igual que el bucle forEach, se pasa una función con el item que se va a procesar. Los **maps** son mas rápidos que los bucles forEach y por lo tanto mas recomendables. Solamente se aconseja el uso del bucle foreach en js cuando no se pueda hacer con un map. Ejemplo:

```javascript
var numbers = [4, 9, 16, 25];

const squares = numbers.map(x => x * x);
```

Para este ejemplo he usado sitaxis **arrow** es decir, en lugar de declarar una función sin nombre como antes, simplemente poniendo a la izquierda lo que recibe la función y una flecha **=>** se consigue el mismo resultado y mucho mas claro. 

Las funciones map devuelven otra vez el array, es decir, se pueden concatenar varios map uno detrás del otro haciendo que el código quede mucho más simple y claro.

## Conclusiones

Si ya has usado Javascript con anterioridad seguramente que ya conocías los bucles que he descrito, pero yo al menos, no sabía bien cuando usar uno o otro y cuáles son las desventajas o los problemas de usar este tipo de bucles en javascript. 

Aparte de la función **map** existen otras funciones relacionadas con sitaxis parecidas como la función **filter** que devuelve solo los elementos de un array que cumplan un determinado criterio, o la función reduce, que va acumulando los resultados de cada operación del item del array para usarlo con la siguiente operación. Te dejo un vídeo y par de artículos que hablan del tema por si los quieres echar un vistazo:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/rRgD1yVwIvE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [JavaScript map, filter y reduce para dummies](http://blog.builtbyedgar.com/javascript-map-filter-y-reduce-para-dummies/)
- [JavaScript Functional Programming — map, filter and reduce](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
- [Learn map, filter and reduce in Javascript](https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4)
