---
layout: post
title: VIM - Guía para principiantes.
meta: Atajos y plugins básicos para vim
description: En este articulo veremos como podemos hacer orientacion a objetos usando JavaScript.
summary: ¿Quires programar usando VIM y no sabes por donde empezar? ¿Has abierto VIM y no sabes como cerrarlo? ¿Quieres descubrir los mejores plugins de VIM? Entonces te recomiendo que leas esto. Explicare los atajos básicos, como configurar vim a nuestro gusto y como añadir plugins.
title-page: Guia VIM para principiantes
image: vim
lang: es
tags: [VIM]
---


Empecemos este post viendo qué es VIM. VIM es un editor de texto incorporado en todos los sistemas UNIX. Proviene de otro editor, VI, aunque con el paso del tiempo se han ido implementando mejoras.
Si estas utilizando Windows no te preocupes porque puedes descargarte VIM desde su página oficial [http://www.vim.org/download.php](http://www.vim.org/download.phphttp://www.vim.org/download.php).

<h2>Ventajas y desventajas de este editor</h2>

<b>Muy bien pero, ¿Cuáles son las ventajas de VIM?.</b> 

A diferencia de otros editores de texto, este esta pensado para ser utilizado en la terminal del ordenador, por tanto no vas a necesitar utilizar el ratón. Cuando estamos programando,
perdemos demasiado tiempo cambiando la mano del teclado al ratón y viceversa, pero con VIM, nos acostumbramos a no usarlo, disminuyendo así el tiempo que perdido.

Pero, la principal ventaja de VIM, es la productividad. Este editor de texto cuenta con 3 modos, a los que accedemos pulsando una sola tecla de nuestro teclado:
<ul>
    <li>-<b> Modo normal:</b> Al pulsar la tecla escape (por defecto) accedemos a este modo, en el cual, las teclas de nuestro teclado cambiaran su funcionalidad, es decir, ahora al pulsar sobre las letras ejecutaremos un comando directamente.</li>
    <li>-<b> Modo insertar:</b> Se accede al pulsar la tecla 'I' cuando estamos en modo normal. En este modo es donde escribiremos de forma natural nuestro código.</li>
    <li>-<b> Modo visual:</b> Accedemos pulsando la letra 'V'. Este modo lo usaremos para seleccionar, de forma visual, el texto. </li>
</ul>
Estando en modo normal, tenemos a nuestra disposición toda una serie de comandos para movernos por el código, editar, copiar, borrar y un largo etc. Estos comandos los podemos combinar entre sí, de modo que, con práctica, seremos capaces de aumentar nuestra 
productividad abismalmente.

A todas estas ventajas hay que sumarle la posibilidad de añadir plugins creados por la comunidad, con lo cual podemos aumentar sus funcionalidades.

<b>¿Y qué hay de las deventajas?</b>

Este editor no tiene interfaz gráfica, de modo que puede ser un caos. Otra desventaja es que todos los comandos vistos anteriormente te los tienes que aprender
de memoria si realmente los quieres sacar provecho.
VIM tiene una curba de dificultad muy alta de tal forma que si es la primera vez que lo utilizas, te va a costar mucho aprender como funciona todo.

<h2>Atajos y comandos básicos de VIM</h2>

Recuerdo que para poder utilizar estos comandos, debemos estar en <b>modo normal</b>.

| Letra        | Uso           | 
| ------------- |:-------------:| 
| h, j ,k, l      | Para desplazarnos, en lugar de movernos con las flechas del teclado, nos movemos con estas letras ( h: ←  j: ↓  k: ↑  l: → ) | 
| w, b      | La w para desplazar el cursor una palabra hacia adelante y la b para desplazarnos una palabra hacia atrás |
| 0, $ | El 0 sirve para desplazarnos hacia el inicio de la linea en la que nos encontremos y $ para movernos al final      |
|^| Para movernos hasta el primer carácter no vacío de la linea|
| gg, G |gg para movernos al principio del documento y G para movernos al final|
| d|Este comando se utiliza después de usar uno de los anteriores, elimina desde la posicion de nuestro cursor hasta el desplazamiento indicado|
| dd| Elimina toda la linea sobre la que se encuentre el cursor|
| y,p|y para copiar el texto hasta el desplazamiento que le indiquemos con los comandos anteriores, p para pegar|
| . (punto)|Con este comando repetiremos el comando ejecutado anteriormente|

Hay muchisímos más comandos, pero he querido poner algunos de los principales, te animo a que sigas descubriendo nuevos comandos. Decir que los comandos anteriores se pueden
combinar con números, es decir, si pulsamos sobre el 7 y luego sobre la w, nos moveremos 7 lineas hacia adelante.
Aparte de estos atajos, hay que sumar, otras instrucciones que podemos escribimos:

<b>:q</b> Cierra vim.

<b>:w</b> Guardamos los cambios.

<b>:e + <em>"Nombre de la ruta"</em></b> Para abrir el archivo que le indiquemos con la ruta.

<b>:split</b> Parte la pantalla verticalmente o horizontalmente para editar varios archivos a la vez.

<b>:Ex</b> Explorador de archivos.

<b>:help</b> Para ver el archivo de ayuda de Vim con todos los comandos.

<h2>Cómo editar el archivo de configuración de vim</h2>

A VIM le podemos cambiar muchos de sus parámetros y opciones por defecto, para ello, teniendo VIM abierto, ejecutamos el comando:

    :e ~/.vimrc

A continuación dejo algunas de las configuraciones que tengo yo puestas en mi archivo:

```
    " Vim por defecto crea archivos de backup pero son muy molestos con estas opciones los podemos quitar

    set nobackup       
    set nowritebackup   
    set noswapfile     
    
    " Para hacer que VIM tabule automaticamente
    set autoindent

    "Para hacer que VIM utilize por defecto 2 espacios para lenguajes que se ven mejor así
    autocmd FileType html,css,sass,scss,javascript setlocal sw=2 sts=2
    autocmd FileType json setlocal sw=2 sts=2
    autocmd FileType ruby,eruby setlocal sw=2 sts=2
    autocmd FileType yaml setlocal sw=2 sts=2

    "Para que muestre a la izquierda los números de linea relativos, muy útil para cuando introducimos comandos
    set relativenumber  

    "Para que resalte los paréntesis y los corchetes
    set showmatch        

```
Como siempre, hay muchas más configuraciones, dependiendo de los gustos de cada uno.

<h2>Plugins para VIM</h2>
Para instalar plugins en VIM, lo mejor es utilizar un gestor de plugins, yo recomiendo vim-plug: [https://github.com/junegunn/vim-plug](https://github.com/junegunn/vim-plug).
Una vez instalado, simplemente añades en tu archivo .vimrc:

```
    call plug#begin('~/.vim/plugged')

        "Entre estas dos líneas añades Plug + 'nombre del plugin que quieres instalar'

    call plug#end()
```
Plugins que yo utilizo:

- <b>NERDTree</b> ([https://github.com/scrooloose/nerdtree](https://github.com/scrooloose/nerdtree)) Explorador de arhivos para vim, aunque últimamente lo utilizo menos
- <b>Ctrlp</b> ([https://github.com/kien/ctrlp.vim](https://github.com/kien/ctrlp.vim)) Permite buscar archivos en nuestro proyecto mediante el nombre que le indiquemos.
- <b>Buftabline</b> ([https://github.com/ap/vim-buftabline](https://github.com/ap/vim-buftabline)) Añade una barra arriba con los buffers que tienes abiertos.
- <b>Emmet-vim</b> ([https://github.com/mattn/emmet-vim](https://github.com/mattn/emmet-vim)) Este plugin viene muy bien para los desabolladores web, permite crear varios elementos del HTML de golpe.

<h2>Conclusiones</h2>
VIM es muy pontente en el sentido de la productividad, aunque es muy dificil de aprender. Tiene muchísimos plugins y configuraciones, pero no es un IDE, para 
algunos lenguajes se nos queda corto incluso con plugins. Habrá a muchas personas a las que no compese el esfuerzo de aprender a manejar solo el editor de texto,
pero si lo dominas los resultados son increíbles.





