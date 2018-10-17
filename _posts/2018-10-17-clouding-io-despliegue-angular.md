---
layout: post
title: Cómo desplegar Angular en un servidor Ubuntu en Clouding.io
meta: Haciendo deploy de una aplicación Angular sobre Nginx en Clouding.io
description: Haciendo deploy de una aplicación Angular sobre Nginx en Clouding.io
excerpt: Aparte de echar un vistazo rápido a lo que pueden ofrecer los servidores en clouding.io, hago un tutorial sobre el procedimiento para hacer deploy o despliegue de aplicaciones Angular usando Nginx
title-page: Cómo desplegar Angular en un servidor Ubuntu en Clouding.io
image: angular-deploy
lang: es
tags: [Devops] 
---

## Introducción

Clouding.io es un servicio online que ofrece servidores cloud VPS y en este artículo voy a probar cómo van, aprovechando para mostrar como hacer un despliegue de una app Angular. 

Echando un vistazo a sus precios me han parecido muy asequibles, además ofrecen bastantes características como que por ejemplo, guardan tres copias de cada servidor para poder restaurar en caso de que una de ellas falle. De todas formas si quieres saber más sobre lo que ofrecen y ver sus precios lo puedes hacer desde su web oficial:

[https://clouding.io/](https://clouding.io/)

## Creando un servidor

Voy a explicar paso a pàso cómo crear un servidor en clouding.io por si alguien no sabe cómo hacerlo y quiere hacerlo siguiendo mis pasos.

Tras registrarnos en su [página](https://clouding.io/) y validar nuestra cuenta, aparece el panel de control. Como todavía no tenemos creado ningún servidor, no aparece ninguno en la página. Para crear uno simplemente pulsamos sobre el botón.

<img src="https://i.imgur.com/Axqqf1R.png" class="responsive-img" alt="Imagen Panel de control de clouding.io"> 

La siguiente pantalla que aparece sirve para configurar el servidor que vamos a crear. El primer paso es escribir un nombre y seleccionar el sistema operativo o la app que queremos, ellos ya se encargan de instalar y configurar la máquina por nosotros. Entre las apps disponibles se encuentra docker,lo cual me ha sorprendido porque viene muy bien si tenemos una app dockerizada y la queremos desplegar fácilmente, aunque me ha parecido extraño que no incluyeran Wordpress, ya que es el CMS más popular con diferencia.

En mi caso voy a seleccionar una máquina Ubuntu 16.04 ya que es la distro con la que me siento más cómodo. También se puede seleccionar cuánto procesador y espacio SSD vamos a querer. Además podemos pedir que nos hagan backups automáticos lo cual es muy cómodo si no queremos hacerlos nosotros mismos.

<img src="https://i.imgur.com/i7OgcRU.png" class="responsive-img" alt="Imagen Panel de configración de clouding.io"> 

## Configurando el servidor

Una vez creado el servidor, vuelves al panel principal, si haces clic en el servidor que acabas de crear, la página te muestra en detalle los datos del servidor, además tienes acceso a controles básicos del servidor, como, por ejemplo, apagarlo, reiniciarlo, redimensionar, ver los logs etc. Una cosa que me ha gustado es que tienes acceso a los logs directamente sin tener que meterte en la consola del servidor, además tienes acceso a una consola de emergencia en el propio navegador lo cual es muy útil si quieres hacer un cambio rápido y no quieres entrar por ssh al server. 

<img src="https://i.imgur.com/PbpYfQR.png" class="responsive-img" alt="Imagen Panel de control de clouding.io"> 

Además de los controles antes mencionados, también tienes una pestaña para ver el estado de las conexiones y los puertos, y otras dos pestañas para gestionar los backups y las snapshots.

Una vez visto el panel de control vamos a entrar en el server para configurarlo. Clouding.io nos muestra un pequeño tutorial sobre cómo conectarnos al servidor. En mi caso voy a conectarme por SSH a través de la consola Linux de mi ordenador. 

Si eres usuario de Windows te recomiendo que utilices [Putty](https://www.putty.org/) para poder conectarte cómodamente.

<img src="https://i.imgur.com/aPFTvlA.png" class="responsive-img" alt="Imagen Mensaje al conectarse al servidor"> 

Como ves en la imagen, cuando entramos la primera vez aparece un mensaje advirtiéndonos que tengamos cuidado con ciertos comandos si lo acabamos de instalar por el tema de las actualizaciones, por si te pasa, que sepas que es por eso. 

El primer paso para que funcione Angular es instalar Nginx, es decir, un servidor web, también nos vale Apache pero a mí personalmente me gusta mas Nginx. Para instalarlo ejecutamos:

```bash
sudo apt-get install nginx
```

El siguiente paso es instalar el firewall de Nginx para que permita el acceso a los usuarios. Nginx viene con un servicio llamado **ufw** para la gestión de este firewall. Hay varios tipos dependiendo de lo que necesitemos:

- Nginx Full: Abre los puertos 8080 (HTTP) y el 443 (HTTPS)
- Nginx HTTP: Abre solo el puerto 8080 (HTTP) 
- Nginx HTTPS: Abre solo el puerto 443 (HTTPS)

En mi caso, por simplicidad voy a escoger el Full, para ello ejecutamos:

```bash
sudo ufw allow 'Nginx Full'
```
Si te sale que no se encuentra el comando tienes que instalar ufw manualmente:

```bash
sudo apt-get install ufw
```
Al instalar Nginx Ubuntu lo activa por nosotros, para ver si está funcionando correctamente ejecutamos:

 ```bash
 sudo systemctl status nginx
 ```

 Si accedes a la IP del servidor tienes que ver la página por defecto de Nginx:

<img src="https://i.imgur.com/XRLWttf.png" class="responsive-img" alt="Imagen Página de bienvenida de nginx"> 


## Deploy de Angular

 Para hacer el deploy de una app Angular lo primero que hay que hacer es compilar Angular, es decir, transformar todos los archivos TypeScript a archivos .js entendibles por el navegador, afortunadamente Angular viene con un comando para compilar todos los archivos:

 ```bash
ng build --prod
 ```
Si todo ha ido bien Angular habrá creado una carpeta dentro de nuestro proyecto llamada **dist** con los ficheros compilados.

Ahora hay que subir estos archivos al servidor. Para ello puedes subirlos mediante ftp, o descargarlos desde git desde el servidor, o incluso usando integración continua, eso depende de cada uno. En mi caso los voy a subir mediante FTP usando Filezilla.

Si no sabes como subir los archivos al servidor, te recomiendo que le eches un vistazo a este artículo sobre el uso de Filezilla:

[https://raiolanetworks.es/blog/manual-filezilla-cliente-ftp/](https://raiolanetworks.es/blog/manual-filezilla-cliente-ftp/)

Para que **nginx** sirva los archivos y se vean en la web los tienes que subir dentro de la carpeta **`/var/www/html`**

**¡Y listo!** Si abres la dirección IP ahora verás la aplicación Angular funcionando, en mi caso el hello world de Angular:

<img src="https://i.imgur.com/beTPmyC.png" class="responsive-img" alt="Imagen Página de bienvenida de Angular"> 

## Conclusiones

¿Recomiendo Clouding.io? Definitivamente sí. Los servidores van muy bien y puedes pagar solo por las horas que vayas a utilizar, además son muy baratos. En cuanto al trato y la atención al cliente es bastante buena también, si les escribes al correo no tardan mucho en responder y siempre lo hacen con mucha amabilidad. Como has podido ver crear un servidor y desplegar una app Angular es un proceso muy sencillo, no tiene mucha complicación y si lías algo tienes los backups y puedes ir haciendo snapshots del servidor para volver atrás. 

En este artículo hemos visto como deplegar Angular en Nginx, pero yo siempre recomiendo hacerlo con docker, ya que al tener nginx y angular dockerizado consigues un entorno independiente aislado de todo, además de tener la posibilidad de poder crear copia del contenedor para poder escalar fácilmente. 