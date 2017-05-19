---
layout: post
title: Git - Comandos básicos y avanzados
meta: Vamos a ver cómo usar git de forma fácil y eficaz y cómo instalar git en Windows y en Linux. Además repasaremos los mejores comandos y algunos avanzados
description: Vamos a ver cómo usar git de forma fácil y eficaz y cómo instalar git en Windows y en Linux. Además repasaremos los mejores comandos y algunos avanzados
summary: Git tiene a tu disposición numerosos comandos y muchos de ellos no son muy conocidos. Tanto si eres usuario experto como si nunca has usado git, te aseguro que esta lista de servira de gran ayuda para mantener un control de versiones
category: 
title-page: Git, comandos básicos y avanzados
tags: [Git] 
---

***

¡Saludos! En el post de hoy veremos algunos de los comandos más utilizados, pero tranquilo, si ya eres un usuario más avanzado de git, no te preocupes, también veremos algunos comandos más menos conocidos y avanzados pero igualmente útiles.

Pero antes de todo esto, no está de más recordar qúe es git y para qué sirve por si hay alguien que se quiere iniciar en git.

Git es una herramienta que sirve para gestionar el control de versiones. Pero, ¿qué es el control de versiones? Pues es simplemente una forma de tener controlados todos los cambios que realizamos sobre cualquier tipo de archivos. Este control se puede efectuar a mano, aunque es recomendable usar una herramienta que nos facilite la vida como por ejemplo git, aunque hay muchas más.

## Instalación y configuración de Git.

Lo primero es tener instalado git en nuestra máquina para tener acceso a todos sus comandos. Para descargar e instalar git lo puedes hacer desde su página oficial:

Si estás en Windows, puedes descargarlo directamente desde aquí:

[https://git-scm.com/download/win](https://git-scm.com/download/win) 

Si usas otro sistema puedas buscar el tuyo aquí:

[https://git-scm.com/downloads](https://git-scm.com/downloads) 


Una vez instalado git, puedes configurar tu identidad ejecutando en la terminal (si estás en windows se te habrá instalado un programa llamado Git bash):

```bash
git config --global user.name "Tu nombre aquí"
git config --global user.email ejemplo@example.com
```

## Comandos básicos

Bien, pongámonos en la situación de que tenemos un proyecto que estamos dearrollando y queremos cambiar algo drástico. Lo mejor es usar git para llevar el control de estos cambios por si queremos revertirlos.

El primer paso es abrir la terminal de git, o la terminal de nuestro sistema, para dirigirnos a la carpeta donde tengamos guardado el proyecto que estemos desarrollando, y ejecutar el siguiente comando:

```bash
git init
``` 
Con este comando lo que estamos haciendo es decirle a git que este pendiente de los cambios que se produzcan en los archivos de ese directorio. 
Este comando solo lo tenemos que ejecutar una sola vez para cada proyecto que estemos realizando.

Ahora podemos continuar desarrollando nuestro proyecto.

Cuando queramos guardar los cambios con git tenemos que hacer lo siguiente:

```bash
git status
```

<img src="http://i.imgur.com/fBoD8Uk.png" class="responsive-img" alt="Git status"> 


Este comando imprimirá los archivos que van a ser guardados, el siguiente paso es ejecutar:

```bash
git add .
```
Con esto añadiremos todos los archivos que aparecían anteriormente para ser guardados. Si queremos añadir un archivo o carpeta en concreto lo podemos hacer mediante

```bash
git add NOMBREDELARCHIVO
```
Si queremos eliminar los archivos que acabamos de añadir para ser guardados lo podemos hacer con 

```bash
git rm .
```
Con estos comandos hemos añadido o hemos quitado archivos pero aún no han sido guardados, para ello:

```bash
git commit -m "Nombre descriptivo del cambio que hemos realizado"
```
Acabamos de hacer nuestro primer commit, un commit es un guardado con mensaje de los cambios que hemos realizado en un momento determinado en nuestro proyecto

Para imprimir todos los commits que hemos realizado tenemos el comando:

```bash
git log
```
La cadena de números y letras que aparece al lado de la palabra "commit" es el identificador que podemos usar para revertir los cambios y volver atrás a ese punto. Para ello ejecutamos:

```bash
git reset --hard IDENTIFICADOR
```
Sustituimos IDENTIFICADOR por el identificador que comentaba anteriormente, eliminando así, todos los commits posteriores a ese commit.

Con *git revert* se crea un nuevo commit que revierte los cambios realizados en el último commit, pero no elimina dicho commit.

## Administrando proyectos git 

Ahora, imaginemos que queremos administrar un proyecto ubicado en otro servidor o en un almacén de repositorios como es Github

Si queremos bajarnos el proyecto para empezar a gestionarlo lo podemos hacer usando:

```bash
git clone git://servidor/ruta/a/los/archivos 
```
Por ejemplo, para GitHub:

```bash
git clone https://github.com/proyectogithub
```
Si alguien hace un cambio desde otro sitio a este mismo repositorio, tenemos que bajarnos el cambio a nuestra máquina, para ello:

```bash
git pull
```
Pero, si tenemos cambios sin guardar, tenemos que guardarlos haciendo commit, antes de bajarnos nada.

Tras hacer commit de cambios nuevos, podemos subirlos al repositorio remoto:

```bash
git push origin master
```
Donde origin es la dirección del repositiorio remoto y master es la rama a la que estamos subiendo los cambios.

Para añadir la dirección de un repositorio remoto a origin, lo podemos hacer así:

```bash
git remote add origin https://github.com/user/repo.git
```
De esta forma, podemos usar la palabra origin para referirnos a esa dirección.

## Ramas en git
Muy bien, pero antes has dicho que has subido los cambios a una rama, ¿qué es una rama?

Las ramas sirven para llevar un control de cambios independiente en el mismo repositorio, es decir, podemos crear una rama a partir de la rama base, o rama master, con otra serie de cambios, posteriormente podemos subir estos cambios a la rama master haciendo una combinación de ambas ramas:

```bash
git push origin master
```

Si quires ver los cambios que has realizado desde el último commit lo puedes hacer con:

```bash
git diff
```
En verde, saldrán las líneas que has añadido, y en rojo las que has eliminado desde la última vez.

Para posicionarnos en una rama escribe:

```bash
git checkout nombre_de_la_rama
```
Y para crear una rama:

```bash
git checkout -b rama_nueva
```
## Comandos avanzados

#### Alias

Para no tener que estar escribiendo todo el rato "commit" o "checkout" podemos crear alias, los alias sirven para decirle a git que comando tiene que ejecutar para el alias que le hemos indicado, estos son los alias más comunes, aunque puedes crear y configurar más.

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```
De esta forma, al escribir *git st*, git ejecutará el comando *git status* ahorrándonos mucho tiempo.


#### Descartar temporalmente cambios

Si estas trabajando en una rama y quieres cambiarte a otra, git no te dejará porque tienes cambios sin guardar, una forma de solucionar esto es haciendo un commit, pero si no queremos hacerlo lo que podemos hacer es descartar los cambios temporalmente, para ello:

```bash
git stash
```

Posteriormente si los quieres recuperar:

```bash
git stash pop
```

#### Pull de un solo commit

Si por cualquier motivo, necesitas hacer un pull pero solo de un determinado commit lo que puedes hacer es usar este comando:

```bash
git cherry-pick <commitSHA>
```

#### Git log avanzado

Hay veces en las que el comando git log ofrece demasiada información, pero esto se puede personalizar, por ejemplo:

```bash
git log --online
```
Se imprimirá en cada linea un commit, con su identificador y el texto del commit.

Otro parámetro bastante útil del log es el de git graph

```bash
git log --graph --oneline
```

<img src="http://i.imgur.com/M1ZTdBb.png" class="responsive-img" alt="Git log --graph --oneline"> 


Esto imprimira la lista de commits y mediante caracteres ASCII, representara el árbol con las ramas y los cambios entre ellas.

También podemos filtrar los commits, por ejemplo:

```bash
git log --author="John"
git log --after="2014-7-1"
git log -- foo.py bar.py
```
Estos comandos filtarán los commits por autor, por fecha y por los archivos que fueron modificados respectivamente.

## Conclusiones

Git es una herramienta muy potente que ofrece muchísmos comandos para la gestios de versiónes de nuestros proyectos. Los commmits que he explicado son unos cuantos, me dejo muchos de ellos, pero te animo a que eches un vistazo a la documentación oficial de git para que descubras muchos mas comandos y configuraciones.