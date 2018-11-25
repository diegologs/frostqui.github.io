---
layout: post
title: Tutorial Angular 2 - Cómo empezar a usarlo y conceptos básicos 
meta: Aprende Angular 2 gratis y en español. En este artículo echamos un vistazo a su instalación y primeros pasos con este framework para el frontend
description: Aprende Angular 2 gratis y en español. En este artículo echamos un vistazo a su instalación y primeros pasos con este framework para el frontend
excerpt: Angular2 nos ofrece la posibilidad de de crear páginas webs SPA, es decir páginas compuestas de una sola página, esto tiene la ventaja de ser rápida, para ofrecer la mejor experiencia a los usuarios de nuestra página web. En este artículo iniciaremos un acercamiento a Angular2 para ver que cosas nos puede ofrecer. 
title-page: Tutorial Angular 2 - Cómo empezar a usarlo y conceptos básicos 
image: angular
lang: es
tags: [Angular]
lastmod: 2018-10-22T00:00:00+00:00
---

## Curso gratis de Angular 2

**ATENCIÓN** Si quieres aprender Angular desde 0, he creado un curso gratuito para todo el mundo para que tu formación sea mucho más sencilla. Para apuntarte solo tienes que poner tu correo en el formulario de abajo ¿fácil no?, solo con eso te voy a enviar una serie de correos con información, artículos, recursos, etc para aprender Angular de una forma práctica y en español.

<div>
    <!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
    <style type="text/css">
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup" class="angular_form">
    <form action="https://github.us14.list-manage.com/subscribe/post?u=cd16a671a63cd217caf6b2f3f&amp;id=660c4f875a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        <h2 class="form_title">Apúntate gratis al curso</h2>
    <div class="mc-field-group">
        <label for="mce-EMAIL">Tu email: </label>
        <input type="email" value="" name="EMAIL" class="required email form_email" id="mce-EMAIL">
    </div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cd16a671a63cd217caf6b2f3f_660c4f875a" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Empezar a aprender Angular" name="subscribe" id="mc-embedded-subscribe" class="button button_form_angular"></div>
        </div>
    </form>
    </div>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    <!--End mc_embed_signup-->
</div>

## Qué es Angular 2

Angular es un framework para la creación de páginas web. A diferencia de otros frameworks javascript como ReactJS o VueJS, Angular no usa Javascript, usa un lenguaje llamado Typescript. Si no lo conoces no te preocupes, no es un lenguaje raro, es un lenguaje basado en javascript, pero que añade cosas nuevas como tipado, sistema de orientación a objetos mejor que Javascript etc. Además de todo esto, puedes seguir usando código con sitaxis Javascript dentro de Typescript, ya que al compilar Typescript, se convierte todo a Javascript para que el navegador pueda entenderlo.

Hace años salió Angular bajo el nombre de AngularJS porque usaba Javascript, pero hace un tiempo, a partir de la versión 2, se reescribió todo el código de Angular para poder usar Typescript, por lo que si ya sabes usar AngularJS no te va a servir nada para Angular 2. Actualmente han sacado nuevas versiones de Angular (las más importantes son Angular 4 y Angular 6) pero desde Angular 2 todo lo aprendido te sirve para versiones posteriores.

Otra particularidad de Angular es que está orientado a la creación de aplicaciones web SPA, es decir, las siglas de Single Plage Application, o lo que es lo mismo, cuando un usuario abre una página creada con Angular o con cualquier otro framework SPA carga todas la aplicación a la vez en segundo plano. Esto hace que la carga inicial sea un poco más lenta, pero se gana en rendimiento al cambiar de páginas dentro de la web ya que ya está todo cargado.

La arquitectura de Angular es MVC o lo que es lo mismo, modelo vista controlador. Esta arquitectura permite tener una separación de la lógica de los datos y de la vista. Otro dato es que Angular está basado en componentes web, es decir, un componente web es una forma de programar partes de una web reulizables. Por ejemplo si creamos un calendario con sus datos y su vista, este calendario se puede usar en toda la web con el mismo código de tal forma que solo lo tengamos que cambiar en un solo sitio. Mola ¿eh?

## Cómo instalar Angular 2

Para usar Angular necesitas tener instalado NodeJS en tu equipo, para ello dirigete a esta página y sigue las guías de instalación para tu equipo:

[https://nodejs.org/en/](https://nodejs.org/en/)

Para comprobar que se te ha instalado bien ejecuta en una consola o en CMD si estás en windows (Abre el menú de windows y teclea CMD):

```bash
node -v
```
También vas a necesitar NPM (el gestor de paquetes de node para librerías Javascript). Con las versiones nuevas de nodejs, npm ya viene instalado cuando instalas nodejs pero por si acaso ejecuta:

```bash
npm -v
```

Si te sale un mensaje de error significa que no lo tienes instalado o que no se ha instalado bien, para instalarlo manualmente hazlo siguiendo la guía de esta página:

[https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)

El siguiente paso es descargar Angular CLI, ¿y qué es Angular CLI? Angular CLI es una serie de comandos que nos ayuda en la gestión, configuración y despligue de proyectos Angular. Para descargar Angular CLI ejecuta este comando en la consola:

```bash
npm install -g @angular/cli
```

Con este comando tendremos a nuestra disposición los comandos de Angular CLI.

## Cómo crear una aplicación con Angular 2, ejemplo básico

Para empezar a usarlo tenemos que crear un proyecto Angular 2 con una serie de archivos, por suerte al instalar Angular CLI este proceso es automático. Para crear la base de un proyecto Angular ejecuta:

```bash
ng new NOMBRE
```

Sustituye NOMBRE por el nombre que le quieras dar al proyecto, el que quieras.

Ahora tienes que entrar dentro del proyecto que acabas de crear con la consola:

```bash
cd NOMBRE
```

Cambia NOMBRE por el nombre que has puesto antes y estarás dentro de la carpeta. Angular crea los archivos base necesarios y para que funcione correctamente lo mejor es ejecutar este comando para que termine de instalar todas las dependencias que hacen falta:

```bash
npm install
```

Cuando termine este proceso ejecuta:

```bash
ng serve --open
```

Si todo ha salido bien estarás viendo una página con el logo de Angular indicando que acabas de crear tu primer proyecto Angular que te servirá de base para crear una aplicación web con Angular

<img src="https://i.imgur.com/eFs6dpB.png" class="responsive-img" alt="Verás el logo de Angular y un menú de navegación con 3 links"> 


# Estructura de un proyecto y hola mundo con Angular 2

Si has instalado Angular y has creado un proyecto con el comando **ng new**, angular habrá creado una serie de carpetas y archivos base para cualquier aplicación angular.

 <img src="https://i.imgur.com/2wdzEwT.png" class="responsive-img" alt="Genera una carpeta src, e2e, node_modules y un montón de archivos"> 

Hay muchos archivos y carpetas, por lo que voy a definir para que sirven las más importantes, es decir, las que vas a necesitar por el momento

- **node_modules**: Si has trabajado con anterioridad con proyectos NPM ya te sonará. Se trata de la carpeta donde se instalan todas las dependencias de Angular, no tienes que tocar ningún archivo de esta carpeta.

- **src**: Una de las carpetas más importantes, contiene toda la lógica de la aplicación. Dentro de esta carpeta se encuentra una subcarpeta **app** con un componente hello world de prueba. También hay un archivo index.html que sera el punto de entrada a nuestra web. Por último está el archivo app.module.ts dentro de la carpeta app, en este archivo se importan todos los componentes que se vayan a usar.

- **.angular-cli.json**: Configuración propia de angular, no tienes que tocarlo por el momento.

- **package.json**: Archivo que contiene el nombre de las dependencias instaladas

Los componentes en Angular se crean dentro de la carpeta app, en este caso hay un componente creado llamado app también, con un archivo para el html, otro para el css y otro con extensión .ts de typescript desde el que se define la lógica de la aplicación. Lo recomendable es crear una carpeta dentro de **app** para cada componente que vayamos a crear, así no tendremos todos los componentes mezclados.

Si abres el archivo **app.component.html** podrás observar que hay una línea en la que pone:

{% raw %}
```html
Welcome to {{ title }}!
```
{% endraw %}

Las dobles llaves en las vistas en Angular sirven para renderizar una variable del componente. Si ahora abres el componente **app.component.ts**, te darás cuenta de que se defile la variable **title**:

```javascript
title = 'app';
```

Si cambias el valor de esta variable, por ejemplo a **hola mundo en Angular 2** y tienes la página servida mediante el comando **ng serve** al abrir la web otra vez en el navegador el mensaje que aparece en la web abrá cambiado. Lo bueno de Angular es que puedes tener la página servida con el comando ng serve, que si cambias algún archivo, el comando se refresca sin que tengas que hacer nada para que veas directamente los cambios en la web abierta sin tener que reabrir la página.

# Ejemplos de páginas hechas con Angular 2

En Internet hay muchas empresas usando Angular para sus páginas webs, te voy a dejar algunos ejemplos por si te quieres inspirar o para que veas cómo funcionan:

- [Copa Airlines](https://www.copaair.com/en/web/us)
- [Google cloud blog](https://cloud.google.com/blog/)
- [One football](https://onefootball.com/en/home)
- [Teradata](https://teradata.github.io/covalent/#/)
- [Radio.com](https://player.radio.com/station-directory)

Y así podría alargar mucho la lista, como ves son varias las empresas, inclído Google, las que apoyan y utilizan Angular en el día a día. Además Angular tiene mucha comunidad de desarrolladores detrás, otro motivo más para usarlo.

## Conclusiones

Como ves empezar a usar utilizar Angular no lleva mucho tiempo, en cuestión de unos minutos tienes una base con la que empezar a programar aplicaciones web. La documentación de Angular es muy completa también por lo que te animo a que la eches un vistazo para que te vayas familiarizando con las herramientas que ofrece. Si vienes de un lenguaje como Java, este framework te va a resultar como estar en casa debido a su similitud con Typescript, el lenguaje de Angular.