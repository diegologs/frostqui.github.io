---
layout: post
title: Integración continua con Jenkins
meta: 
description: La integración continua es una práctica de desarrollo de software en la cual los desarrolladores de software suben su código a un repositorio central donde automáticamente pasan las pruebas métricas y de calidad. Esta técnica se suele realizar regularmente para detectar fallos cuanto antes y así mantener el código siempre actualizado. En este articulo veremos como hacer integración continua usando Jenkins.
category: 
emote: DxCat
tags: Jenkins Integracion 
---

***

Saludos, buen señor. Antes de empezar a ver como se instala y como se configura Jenkins es importante saber qué es la integración continua, ya que Jenkins es un software open source de integración continua escrito en Java.

<h5>Integración continua</h5>
La integración continua es una práctica de desarrollo de software en la cual los desarrolladores de software suben su código a un repositorio central donde automáticamente pasan las pruebas métricas y de calidad.
Esta técnica se suele realizar regularmente para detectar fallos cuanto antes y así mantener el código siempre actualizado.

Jenkins es un sistema corriendo en un servidor que es un contenedor de servlets, como Apache Tomcat. Soporta control de versiones como Git y tiene la posibilidad de instalar variedad de plugins para aumentar su funcionalidad.

<h5>Instalación y configuración de Jenkins</h5>

Para instalar Jenkins lo primero que tenemos que hacer es descargar el archivo .war desde su página oficial:

<a href="https://jenkins.io/index.html">https://jenkins.io/index.html</a>

Nos dirigimos a la direccion en la que hemos guardado el archivo .war mediante linea de comandos o cmd y ejecutamos el siguiente comando:
<quote>java -jar jenkins*.war</quote>
Otra opción es meter el archivo en nuestro server Tomcat en la carpeta webapps.

Nos dirigimos a la dirección <em><strong>http://localhost:8080/ </strong></em>y vemos que todo funciona correctamente.

<img class="responsive-img" id="post-image"  src="http://i0.wp.com/frostq.ml/wp-content/uploads/2016/06/Screenshot_1.png">

Si queremos que Jenkins se pueda utilizar para aplicaciones Java lo que tenemos que hacer es dirigirnos, en el menú de la izquierda, a <strong>Administrar Jenkins </strong>y despues a <strong>Configurar el Sistema </strong>para añadir nuestro JDK de Java. Al añadir un JDK podemos hacerlo añadiendo la ruta donde tenemos instalado el JDK o podemos hacer que Jenkins lo instale automáticamente.

<img clas="responsive-img" id="post-image" src="http://i2.wp.com/frostq.ml/wp-content/uploads/2016/06/Screenshot_2.png">

En mi caso quiero que coja el código de <strong>Git, </strong>pero no viene por defecto, aunque podemos instalarlo mediante plugin. Para ello, volvemos a pulsar en el menú “<strong>Administrar Jenkins</strong>” y pulsamos en la opción “<strong>Administrar Plugins</strong>”. Se nos mostrará la información de los plugins, pulsando en la pestaña “<strong>Todos los plugins</strong>”, nos aparece una lista con todos los plugins que podemos instalar, así que filtramos por “<em>git plugin</em>” y lo seleccionamos para su instalación, y pulsamos el botón “<strong>Instalar sin reiniciar</strong>”.
<h5>Creación de una tarea</h5>
Pulsamos en el menu de la izquierda en el botón <strong>"Crear nueva tarea", </strong>introducimos el nombre y marcamos la opción "<b>Crear un proyecto de estilo libre", </b>en la siguiente pantalla añadimos una descripción y en la seccion <strong>"Configurar el origen del código fuente" </strong>seleccionamos Git, e introducimos la URL de nuestro repositorio de GitHub

<img clas="responsive-img" id="post-image" src="http://i1.wp.com/frostq.ml/wp-content/uploads/2016/06/Screenshot_3.png">

Mas abajo en la sección<strong> "Disparadores de ejecuciones" </strong>podemos decidir cada cuanto tiempo se va a integrar el codigo de Git, en mi caso voy a seleccionar la opcion de <strong>"Consultar repositorio (SCM)" </strong>con un programador de <strong>H/20 * * * *</strong> para que pregunte a Git si tiene algún cambio y los integre automáticamente.

<img clas="responsive-img" id="post-image" src="http://i1.wp.com/frostq.ml/wp-content/uploads/2016/06/Screenshot_4.png">

Por último puedes darle al botón <strong>"Construir ahora"</strong> en el menú de la izquierda para que integre nuestro proyecto, dejado del menú de la izquierda aparecerá el resultado de la integración.

