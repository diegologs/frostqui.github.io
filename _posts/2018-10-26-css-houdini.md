---
layout: post
title: CSS Houdini - Qué es y cómo usarlo
meta: Haciendo deploy de Angular sobre Nginx en Clouding.io. Cómo crear tu propio servidor VPS
description: Haciendo deploy de Angular sobre Nginx en Clouding.io. Cómo crear tu propio servidor VPS
excerpt: Aparte de echar un vistazo rápido a lo que pueden ofrecer los servidores en clouding.io, hago un tutorial sobre el procedimiento para hacer deploy o despliegue de aplicaciones Angular usando Nginx
title-page: Cómo desplegar Angular en un servidor Ubuntu en Clouding.io
image: css-houdini
lang: es
tags: [Github] 
---

## ¿Qué es el CSS Houdini?

En pocas palabras, CSS Houdini trata de ser un nuevo estándar para extender CSS mediante Javascript. Ingenieros de Mozilla, Apple, Opera, Microsoft, HP, Intel y Google se han unido para llevar este proyecto a cabo. Pero espera, entonces ¿CSS Houdini todavía no está preparado? ¿Qué navegadores pueden soportarlo? No, CSS Houdini todavía no está listo, sigue en fase beta pero pinta tan bien que yo me he adelantado y me he dicidido a aprenderlo. En cuanto a los navegadores, gracias a [Surma](https://github.com/surma) podemos ver en la página web que ha creado el siguiente gráfico:

**Añadir imagen**

Te dejo la web por si quieres echar un vistazo al gráfico: (https://houdini.glitch.me/)[https://houdini.glitch.me/]

¿Y que significa que se puede extender CSS? Pues muy sencillo, actualmente con Javascript puedes escribir sentencias CSS, pero con este nuevo estándar lo que se quiere hacer es añadir nuevas sentencias a CSS, es decir, que cada uno se pueda implementar sus propias propiedades CSS. Todo esto se hace gracias a una nueva implementación de bajo nivel para Javascript sobre el motor de renderizado de los navegadores por eso es que no está soportado totalmente todavia por los navegadores. 

Por ejemplo desde que se propuso CSS Grid y Flexbox pasaron años hasta que se implementó totalmente en CSS. Inlcuso hoy en día hay muchos navegadores que no lo soportan todavía. CSS Houdini viene a resolver este problema.

Vamos a echar un vistazo a todo lo que puede ofrecer y qué cosas implementa.


## Worklets

Parecidos a los web workers de Javascript. Es decir es un código JS ejecutado en un hilo a parte de hilo principal. Los Worklets de por sí ofrecen poco al desarrollador pero son importantes para el funcionamiento de más cosas que veremos a continuación. Los ingenieros de CSS Houdini no quería usar los web workers que ya existen porque son costosos y pesados para muchas tareas por eso se han implementado sus propios threads usando ES6. 

## Paint API 

Sirven para añadir imágenes en el CSS. Con esta implementación podemos usar un algo así como canvas 2D para pintar imágenes, píxeles, etc. Si por ejemplo escalamos el elemento al que lo hemos aplicado, se puede repintar con el nuevo tamaño. También sirve para definir cómo se va a pintar el elemento a sí mismo. También podemos por ejemplo, aplicar efectos por fuera del elemento como en las sombras box-shadow. Esta API por suerte, si miras el gráfico anterior, ya se puede usar en algunos navegadores. Puedes ver si tu navegador acepta Paint API con este ejemplo:

<p data-height="400" data-theme-id="light" data-slug-hash="jzNBwp" data-default-tab="css,result" data-user="lonekorean" data-pen-title="CSS Paint API Detection" class="codepen">See the Pen <a href="https://codepen.io/lonekorean/pen/jzNBwp/">CSS Paint API Detection</a> by Will Boyd (<a href="https://codepen.io/lonekorean">@lonekorean</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Para usarlo, tenemos quie registrar el worklet encargado de la gestión del paint Worklet. El Worklet no puede acceder al DOM y no puede acceder a funciones globales como **setIntervak**, esto se hace para que se puedan ejecutar en hilos:

```js
await CSS.paintWorklet.addModule('path/to/paint-worklet.js');
```

En el Worklet podemos hacer:

```js
// https://drafts.css-houdini.org/css-paint-api/ 

registerPaint('sample-paint', class {
  // Mirará las propiedades CSS que definamos
  static get inputProperties() { return ['--foo']; }
  // Podemos pasar parámetros a la propiedad CSS
  static get inputArguments() { return ['<color>']; }
  // Si queremos habilitar transparencias
  static get contextOptions() { return {alpha: true}; }

  paint(ctx, size, props, args) {
    // ctx - Elemento a pintar
    // size - Tamaño
    // props - Propiedades
    // args - Argumentos

    // Aquí pintamos
  }
});
```

El método paint se ejcuta cada vez que el elemento se repinte. El elemento ctx contiene el elemento que se va a pintar, básicamente es como un Canvas2D aunque con algunas limitaciones.

Si quieres usar esto ya, han sacado una librería que lo implementa con buen rendimiento en Chrome y en Firefox: [https://github.com/GoogleChromeLabs/css-paint-polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill)

Aquí puedes encontrar la demo: [https://googlechromelabs.github.io/css-paint-polyfill/](https://googlechromelabs.github.io/css-paint-polyfill/)

Te dejo otra demo en Codepen por si quieres ver el código en acción: 

<p data-height="400" data-theme-id="light" data-slug-hash="wmwJQX" data-default-tab="css,result" data-user="lonekorean" data-pen-title="Hello Houdini: Placeholder Box" class="codepen">See the Pen <a href="https://codepen.io/lonekorean/pen/wmwJQX/">Hello Houdini: Placeholder Box</a> by Will Boyd (<a href="https://codepen.io/lonekorean">@lonekorean</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>