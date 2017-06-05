---
layout: post
title: Cómo crear un blog en GitHub pages con Jekyll 
meta: Creación de un blog usando Jekyll, un generador de páginas estáticas.
description: Creación de un blog usando Jekyll, un generador de páginas estáticas.
summary: En este artículo veremos como crear un blog en github pages utilizando Jekyll para generar páginas estaticas. Utilizando Github como hosting, además de Jekyll, podemos crear un blog de forma muy sencilla. El ejemplo es esta misma web en la que te encuentras, creada con este mismo método.
title-page: Jekyll para programar un blog en GitHub en español
image: blog
tags: [Jekyll, GitHub]
---


Este blog se encuentra alojado en GitHub pages, por lo que para realizarlo he decidido utilizar Jekyll para su programación, un generador de páginas estaticas. A continuación voy a explicar los pasos que di para su realización. 

Lo primero que hay que hacer es crear un repositorio en GitHub para alojar los archivos de la página web, mi repositorio se encuentra en [https://github.com/Frostqui/my-blog](https://github.com/Frostqui/my-blog).

A continuación creamos una rama con el nombre "gh-pages", y en los ajustes de GitHub, le indicamos que utilice este repositorio para la página web.

Lo sieguiente que hay que hacer es clonar nuestro repositorio en local y poner el archivo de configuración, para ello creamos un archivo en la raíz de nuestro proyecto llamadado "_conf.yml" con la siguiente configuración:

<pre><code class="language-yaml">
markdown: redcarpet
baseurl: /my-blog
exclude: ['README.md']
</code></pre>

De esta forma, le indicamos a Jekyll que no utilice el archivo README, y cual es la ruta base de nuestro repositorio. 
Lo siguiente será inicializar JeyKill para ello, descargamos [Ruby](https://www.ruby-lang.org/es/) y ejecutamos el comando:

<blockquote>
      gem install jekyll bundler
</blockquote>

Tras esto ejecutamos JeKyll para que genere un servdior en local para poder ver los cambios al desarrollar:

<blockquote>
      jekyll serve --watch --baseurl ""
</blockquote>

Cuando se ejecuta, jekyll crea una carpeta llamada _sites, hay que acordarse de añadir esta carpeta al archivo .gitignore para no añadirla al repositorio.

Jekyll utiliza un sistema de plantillas, para utilizarlo, tenemos que crear una carpeta llamada "_layouts", dentro de esta carpeta creamos el archivo "default.html". En este archivo vamos a incluir todas las librerias y archivos css y el navbar (la barra de navegacion de arriba) para que Jekyll lo utilice en todas las páginas. Para ello añadimos el código html de forma normal, pero añadiendo la etiqueta

{% raw %}
{{content}}
{% endraw %}

para que se cargue en ese lugar el contenido que creemos.

Creamos archivo index.html y añadimos al principio la plantilla que estamos utilizando:
<blockquote>
      layout: default
</blockquote>

Para añadir posts, tenemos que crear una carpeta llamada "_posts". Estos posts, tienen que ser archivos con extensión .md y con el siguiente nombre: 2016/09/16-nombre-del-post
Como veis el nombre tiene que estar formado por la fecha separada mediante barras y el nombre del post separado por guiones.
El siguiente paso será añadir los pots a la pagina de inicio, mediante el uso de un bucle for recorriendo los posts, para ello añadimos el siguiente código:


<blockquote>
{% raw %} 

  {% for post in site.posts %}
  
  {{post.title}}
  
  {{ post.description }}
  
  {% endfor %} 

{% endraw %}
</blockquote>

Con esto ya tenemos la funcionalidad muy básica de nuestro blog alojado en GitHub con Jekyll, a partir de aqui la página se puede extender y personalizar a gusto de cada uno.
