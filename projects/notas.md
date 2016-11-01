---
layout: project
title: Página web para la creación de notas hecho con VueJS  
meta: Pagina web para la creacion de notas con VueJS
type: project
image: notas.jpg
description: Con esta web el usuario será capaz de crear notas, las cuales se guardan y se muestran de forma reactiva con la ayuda de VueJS
tenol: HTML, CSS, VueJS, Firebase
---

***

<a href="https://notes-9d247.firebaseapp.com/" class="waves-effect waves-light btn">DEMO</a>

Para intentar aprender el funcionamiento de VueJS, decidí crear una página web muy sencilla para probar el comportamiento reactivo. Cuando el usuario crea una nota,
esta se guarda en la base de datos, en mi caso Firebase. Al cargar la página VueJS se encarga de traer todas las notas dispoibles desde la base de datos de Firebase,
esto quiere decir que por no complicar mucho la página, tomé la decisión de que todos los usuarios utilicen la misma base de datos. Cuando un usuario crea una nota desde 
otro dispositivo, VueJS actualiza de forma reactiva, sin recargar la página, añadiendo las notas nuevas. Cuando el usuario pasa el ratón encima de una nota, aparece un icono para
poder eliminar dicha nota. La página web es reactiva por lo que es totalmente funcional desde cualquier dispositivo.


