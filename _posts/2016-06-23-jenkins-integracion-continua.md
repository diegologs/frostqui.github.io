---
layout: post
title: Tutorial Jenkins. Qué es y cómo hacer integración continua
meta: Aprende cómo empezar a usar Jenkins para disfrutar de la integración contínua. Además de ver cómo instalar Jenkins y cómo usarlo vemos Blue Ocean el mejor plugin para crear tareas
description: Aprende cómo empezar a usar Jenkins para disfrutar de la integración contínua. Además de ver cómo instalar Jenkins y cómo usarlo vemos Blue Ocean el mejor plugin para crear tareas
excerpt: La integración continua es una práctica de desarrollo de software y del desarrollo web, en la cual los desarrolladores de software suben su código a un repositorio central donde automáticamente pasan las pruebas métricas y de calidad. Y Jenkins es la herramienta perfecta para realizar integración continua, además es muy simple de utilizar.
title-page: Jenkins tutorial en español, integración continua
image: jenkins
lang: es
tags: [Devops]
lastmod: 2018-12-02T00:00:00+00:00
---

## Introducción - ¿Qué es la integración continua?

Lo primero que te vas a preguntar es ¿qué es Jenkins?, pero antes de resolver a esta pregunta hay que preguntarse, ¿qué es la integración continua y para que sirve? 

La integración continua es una práctica de desarrollo de software, en la cual los programadores suben su código a un repositorio central donde automáticamente pasan las pruebas métricas y de calidad.
Esta técnica se suele realizar regularmente para detectar fallos cuanto antes y así mantener el código siempre actualizado.

Es decir, la integración continua es una manera de automatizar tareas cuando se sube el código, aunque también se puede utilizar para desplegar las aplicaciones. En un repositorio compartido viene bien utilizar un herramienta de integración continua para mantaner una integridad en el código.

Por ejemplo desde la rama de master podemos escribir una serie de pruebas al hacer un pull o un merge request. Si las pruebas se pasan hacemos que se suba y se despliegue automáticamente en producción.

Esto no son más que un ejemplo pero básicamente con integración continua se pueden hacer todo tipo de cosas ya que realmente estamos programando tareas automáticas. Se conoce como integración continua porque la idea es ir subiendo el código regularmente para "integrarlo", propiamente dicho,en el repositorio para no tener conflictos, además haciendo despliegues cada poco tiempo aseguramos una versión estable del programa.

Muy bien, visto este concepto, vamos a ver cómo aplicar integración continua con jenkins.

## Qué es Jenkins

Jenkins CI no es más que un sistema desplegado en un servidor que nos ayuda en la tarea de hacer integración continua y programar tareas automáticas cuando ocurra una determinada acción. A este tipo de servicios se los conoce como CI/CD (Coninuous integration / Continuous deploy) y no es el único existen un montón de sistemas parecidos, aunque en este post me voy a basar en Jenkins ya que es uno de los más conocidos, aunque te dejo enlaces a otros sistemas por si este no te convence y buscas otra opción:

- [Travis CI](https://travis-ci.org/)
- [Codeship](https://codeship.com/)
- [Circle CI](https://circleci.com/)

Además te dejo una lista en la que hacen una comparación de todos los sistemas CI [https://github.com/ligurio/awesome-ci](https://github.com/ligurio/awesome-ci)

Jenkins se integra a la perfección con Git para poder ejecutar tareas con determinadas acciones Git, por ejemplo cuando se lanza un pull request, cuando se pushea a una determinada rama, cuando se crea una rama, etc. Además de integrarse con Git, también tiene la posibilidad de instalar muchos plugins para extender su funcionalidad. 

## Cómo instalar Jenkins

Para instalar Jenkins en tu servidor primero te tienes que bajar una versión desde su página web oficial: [https://jenkins.io/download/](https://jenkins.io/download/)

Como ves, hay dos versiones, la LTS y la Weekly, la versión LTS la sacan anualmente de tal forma que sea lo más estable posible, si por el contrario, quieres estar siempre a la última escoge la Weekly, aunque puede tener ciertos bugs.

Lo bueno es que para ambas versiones ofrecen descargas para todo tipo de servidores y sistemas por lo que no vas a tener problema en ningún servidor, incluso hay una versión en docker por si lo quieres tener en un contenedor aislado.

Para instalarlo, depende del sistema en el que lo vayas a ejecutar, pero básicamente se resume en descargar el paquete disponible desde tu repositorio de paquetes de la distro en el que se instale, o si lo preferimos, descargar el .war y ejecutarlo de la siguiente manera:

```bash
java -jar jenkins*.war
```
De todas formas te dejo un enlace oficial en inglés de como instalarlo en los diferentes sistemas: [https://jenkins.io/doc/book/installing/](https://jenkins.io/doc/book/installing/)

En mi caso particular voy a instalarlo en docker para hacer pruebas en local y poder gestionarlo facilmente. Para ello simplemente he descargado la imagen de docker desde Kitematic (una GUI de docker que recomiendo) y la he ejecutado.

## Configuración de Jenkins y cómo instalar plugins

Tras ejecuta Jenkins nos dirigimos a la ruta en local donde lo hayamos configurado, en mi caso, **http://localhost:32769/** y nos aparecerá una imagen tal que así:

<img src="https://i.imgur.com/QY7wDC6.png" class="responsive-img" alt="Pantalla de bienvenida de Jenkins"> 

Como ves lo que tienes que hacer es dirigirte a la ruta que indica para poner la contraseña del administrador, en mi caso, al ser en docker, el asistente de instalación ya me dió la contraseña en consola:

<img src="https://i.imgur.com/hIHonUk.png" class="responsive-img" alt="Salida de consola de docker con la clave de Jenkins"> 

Tras poner la consola nos preguntará si queremos instalar los plugins recomendados:

<img src="https://i.imgur.com/V5URftf.png" class="responsive-img" alt="¿Instalar plugins en Jenkins?"> 

Yo voy a seleccionarlos manualmente para ver que opciones tenemos y poder decidir mejor. En la siguiente pantalla aparecerá algo tal que así:

<img src="https://i.imgur.com/6L7Fi1b.png" class="responsive-img" alt="Cómo instalar plugins en Jenkins"> 

Como puedes ver hay un montón de opciones ordenados en categorías junto a su descripción. Los que aparecer marcados por defecto son los recomendados. Esta parte es subjetiva, cada uno instala los que considere mejor para su caso de uso. 

A mi personalmente me gusta mucho **build-name-setter** para poder poner nombres a los builds por ejemplo si queremos diferenciar ciertos builds y econtrarlos con facilidad. También me gusta mucho **rebuilder** para volver a ejecutar un build anterior con los mismos parámetros. En cuanto a las build tools marco **nodejs** y desmarco **gradle** ya que personalmente no lo voy a utilizar. El de **cobertura** lo instalo por si quiero pasar tests en un proyecto. Por último en Source Code Management selecciono **Github** que es con lo que suelo trabajar y desmarco **suversion**. Estos son los que a mí, personalmente, me parecen los mejores plugins de Jenkins, pero como he dicho antes, aquí cada uno que seleccione lo que más le interese. 

Hacemos clic en install y esperamos a que instale Jenkins y los plugins que hemos seleccionado. Tranquilo porque si posteriormete quieres añadir plugins nuevos lo puedes hacer desde el panel de control.

<img src="https://i.imgur.com/dgKq4Pm.png" class="responsive-img" alt="Pantalla de instalación de Jenkins"> 

Por último nos va a pedir un usuario para usar con Jenkins, aunque también podemos continuar como admin. Y listo ya tenemos Jenkins instalado y listo para empezar a usar.

## Primeros pasos con Jenkins: Tutorial para empezar a usarlo

Lo que vas a leer a continuación no se trata de un manual exhaustivo ni de un tutorial de Jenkins en profundidad, simplemente es una aproximación y una guia básica de funcionamiento. Tanto si eres usuario con conocimientos básicos o una persona que se dedique en específico al devops, te recomiendo que leas este tutorial de cómo funciona Jenkins por si te sirve algo para tu caso de uso particular.

Tras instalarlo la pantalla principal que aparecerá es como esta:

<img src="https://i.imgur.com/hhzMRLG.png" class="responsive-img" alt="Panel de control de Jenkins"> 

Jenkins se basa en tareas. Como su nombre indica una tarea es un trabajo o un conjunto de instrucciones que podemos programar para que ocurran con una determinada acción. Si pinchas en crear una nueva tarea:

<img src="https://i.imgur.com/LRjES5i.png" class="responsive-img" alt="Cómo crear una tarea en Jenkins"> 

Voy a crear una tarea de ejemplo para ver como funciona este sistema. Para ello pongo un nombre a la tarea y selecciono crear proyecto estilo libre para poder configurarlo a mi gusto:

<img src="https://i.imgur.com/X6xxQdL.png" class="responsive-img" alt="Cómo crear una tarea en Jenkins"> 

Si has elegido plugins distintos al mío seguramente te salgan otras opciones. La primera sección es para la configuración básica como el nombre del proyecto la descripción, cómo vamos a querer las ejecuciones si queremos desechar las antiguas automáticamente, etc.

Más abajo podrás encontrar el origen del código, en mi caso he puesto git y he pegado la dirección del repositorio de Gihub, como ves, puedes seleccionar el origen de la rama, credenciales y qué disparador vamos a querer. Las ejecuciones pueden ser desde scripts, cuando se haga otro build, periódicamente (en cuyo caso hay que indicar cada cuanto tiempo), disparadores para gitscm y periódicamente consultando el repositorio.
Yo voy a escoger **consultar repositorio** y voy a introducir H/15**** para que se ejecute si hay un cambio en el repositorio cada 15 minutos.
Si no sabes lo que significa H/15**** esta expresión no te preocupes porque te voy a dejar un generador de estas expresiones, para que sepas cómo programar tareas en Jenkins: [https://crontab.guru/](https://crontab.guru/)

<img src="https://i.imgur.com/HorCwUi.png" class="responsive-img" alt="Selección del código fuente"> 

Al final encontramos dónde queremos que se ejecuten las tareas y qué queremos ejecutar antes y despues. Desde las opciones de entorno de ejecución podemos configurar cómo se van a ejecutar los build, si vamos a poner ficheros de configuración, por ejemplo, o si vamos a indicar rutas para los PATH de node y npm, o de si vamos a darle un nombre específico a la ejecución (si tenemos instalado el plugin), etc.

<img src="https://i.imgur.com/LlPTGBz.png" class="responsive-img" alt="Entorno de ejecución"> 

Para decidir qué queremos ejecutar hay muchas opciones dependiendo del tipo de proyecto que vayamos a ejecutar, pueden ser comandos de línea de comandos, comandos nodejs, comandos de windows, etc. Como ves se puede adaptar a todo tipo de proyectos y topdavía se puede ampliar más con plugins. También se pueden encadenar distintos pasos por ejemplo ejecutar un script de shell y luego uno de windows.

<img src="https://i.imgur.com/PHN3Eor.png" class="responsive-img" alt="Seleccion de lo que queremos ejecutar"> 

Por último decidir que hacemos despues, si notificar usuarios, guardar logs, imprimir resultados, hacer commit, publicar cobertura etc. 

Tras crear la tarea tendrás acceso al panel de control de la tarea, desde aquí podrás seleccionar si lanzarla manualmente, ver los logs, las builds anteriores, volver a configurar la tarea, etc. En mi caso sale el icono del último build en rojo indicando que algo ha fallado:

<img src="https://i.imgur.com/mwfIYtw.png" class="responsive-img" alt="Entorno de ejecución"> 

Si hacemos clic sobre el build, podemos ver su estado y la salida de consola para ver exactamente que ha fallado.

## Blue ocean el mejor plugin para Jenkins para crear pipelines

Con esto ya seríamos capaces de tener tareas automatizadas funcionando pero como la creación de tareas es algo tediosa, hay un plugin muy famoso el cual recomiendo encarecidamente que se llama Blue Ocean. Este plugin sirve para crear pipelines al completo gestionando mucho mejor la conexión con el repositorio. Para instalarlo te tienes que dirigir a la configuración de Jenkins > Andministración de plugins > Todos los plugins, buscas Blue ocean y lo instalas.

<img src="https://i.imgur.com/nc700kf.png" class="responsive-img" alt="Cómo crear una pipeline con Blue Ocean"> 

Como ves la interfaz de usuario es mucho más amigable y más pensada para todo el mundo. Desde aquí vas a poder configurar los pipelines mucho mas fácil. Además te permite seleccionar mejor cuando saltan los builds, por ejemplo, al crear un pull request, al aceptarlo, al crear una rama, etc, que hasta ahora no lo habíamos hecho. 

<img src="https://i.imgur.com/AKFKtF0.png" class="responsive-img" alt="Cómo crear una pipeline con Blue Ocean"> 

Si quieres mas información o necesitas un tutorial más exhaustivo sobre el plugin te dejo su página oficial: [https://jenkins.io/projects/blueocean/](https://jenkins.io/projects/blueocean/)

## Conclusiones

En este tutorial para Jenkins hemos visto por encima que crear todo el sistema de integración continua es un rollo, si tienes un proyecto muy pequeño no sé si merece la pena el esfuerzo de montar todo, pero a la larga viene muy bien para no perder tanto tiempo al haciendo los builds, despliegues, etc, de forma manual. Para los proyectos open source también viene bien para restringir cada merge. Si el merge no cumple ciertos requisitos de estilo o no pasa los tests, el merge no se puede hacer. La integración continua es perfecta para tener un control de lo que pasa en el proyecto, para saber cómo de estable es un proyecto y para avisar a la gente cuando un build a producción ha salido mal.

Otra cosa que no he comentado es que se pueden hacer esquemas predefinidos para los proyectos, por ejemplo te puedes hacer un esquema para proyectos front con ciertos comandos, otro para proyectos backend etc, de esta forma una vez has creado uno crear los demás es cosa de dos clics. 

Te dejo un vídeo tutorial de jenkins en español donde se ve con ejemplos cómo usar jenkins:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/ma6x5sn3Rzg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Te dejo enlaces a artículos en inglés con más información y más detallada si te interesa Jenkins y quieres aprender más:

- [Pipeline as a Code using Jenkins 2](https://medium.com/@maxy_ermayank/pipeline-as-a-code-using-jenkins-2-aa872c6ecdce)
- [End-to-End Multibranch Pipeline Project Creation ](https://jenkins.io/doc/tutorials/build-a-multibranch-pipeline-project/)
- [Configuring CI/CD on Kubernetes with Jenkins](https://medium.com/containerum/configuring-ci-cd-on-kubernetes-with-jenkins-89eab7234270)