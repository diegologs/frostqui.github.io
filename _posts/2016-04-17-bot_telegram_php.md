---
layout: post
title: Bot en Telegram con PHP 
meta: Tutorial muy sencillo para programar un bot en Telegram a nuestro gusto usando PHP y Heroku 
description: Telegram ofrece la posibilidad, entre otras cosas de crear bots. En este post veremos como programar un bot para Telegram usando PHP y la plataforma cloud de Heroku.
category:
emote: ArgieB8
tags: PHP Telegram Heroku
---

***

<strong>Telegram</strong> es una aplicación de mensajeria open source. Entre otras cosas, permite la creación de bots que pueden ejecutar ciertas acciones. En este tutorial aprenderemos a crear un bot con <strong>PHP</strong> usando la plataforma cloud de <strong>Heroku</strong>


Lo primero que tenemos que hacer es dirigirnos a Telegram e iniciar una conversación con un @BotFather, un bot creado para crear y administrar bots.
https://telegram.me/botfather
A continuación escribimos<em> /newbot</em> y escribimos el nombre del bot. Otros comandos de utilidad son los siguientes:

<ul>
<li><strong>/token</strong> - Genera el token de autorización.</li>
<li><strong>/setname</strong> - Para cambiar el nombre del bot.</li>
<li><strong>/setdescription</strong> - Cambia la descripcion del bot.</li>
<li><strong>/setuserpic</strong> - Cambia la foto de perfil del bot</li>
<li><strong>/setcommands</strong> - Puedes incluir comandos para el bot.</li>
<li><strong>/setjoingroups</strong> - Puedes permitir que el bot pueda ser añadido a grupos.</li>
<li><strong>/deletebot</strong> - Elimina el bot.</li>
<ul>

Una vez creado el bot, tenemos que generar nuestro token de acceso, escribiendo el comando <em>/token.</em>

<blockquote class="imgur-embed-pub" lang="en" data-id="a/rRJ3m"><a href="//imgur.com/rRJ3m"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>


El siguiente paso es registrarnos en la plataforma cloud que vamos a utilizar para alojar nuestro bot, en nuestro caso Heroku <a href="https://dashboard.heroku.com/new">https://dashboard.heroku.com/new</a>
Creamos una app en heroku y buscamos en la pestaña de Settings el nombre del dominio que nos han asignado.

Ahora tenemos que añadir el webhook de nuestra app de heroku a nuestro bot de telegram para que tenga permisos. Para ello nos dirigimos a este enlace:

https://api.telegram.org/bot[TOKEN]/setWebhook?url=[URL]

Y cambiamos [TOKEN] por el token que generamos con BotFather y [URL] por la URL que nos asignaron en Heroku. Si todo ha ido bien debería aparecer un mensaje de OK.

Ahora toca programar nuestro bot en si. Para ello nos descargamos este repositorio de git: <a href="https://github.com/kasramp/geekswebbot">https://github.com/kasramp/geekswebbot </a>haciendo clic en Download Zip o con el comando <em>git clone</em>.
Abrimos el archivo index.php que hemos descargado y lo abrimos con SublimeText, o cualquier otro editor de código, y cambiamos la linea que dice:
<em>$client = new Zelenin\Telegram\Bot\Api(''); // Set your access token</em>
Tenemos que poner entre las comillas nuestro token que generó BotFather.
A continuación podemos cambiar los comandos que vienen por defecto mas abajo con lo que queramos que haga nuestro bot. Por ejemplo yo he cambiado el comando:

```php
if($update-&gt;message-&gt;text == '/email')
{
$response = $client-&gt;sendChatAction(['chat_id' =&gt; $update-&gt;message-&gt;chat-&gt;id, 'action' =&gt; 'typing']);
$response = $client-&gt;sendMessage([
'chat_id' =&gt; $update-&gt;message-&gt;chat-&gt;id,
'text' =&gt; "You can send email to : Kasra@madadipouya.com"
]);
}
```

```php
if($update-&gt;message-&gt;text == '/fecha')
{

$response = $client-&gt;sendChatAction(['chat_id' =&gt; $update-&gt;message-&gt;chat-&gt;id, 'action' =&gt; 'typing']);
$response = $client-&gt;sendMessage([
'chat_id' =&gt; $update-&gt;message-&gt;chat-&gt;id,
'text' =&gt; date('l jS \of F Y')
]);
}
```

Una vez cambiado el código a nuestro gusto toca subirlo a Heroku. Para ello tenemos que tener descargado PHP, Composer y el Heroku Toolbet en nuestro equipo, los puedes descargar de aquí:
<a href="http://php.net/">http://php.net/</a>
<a href="https://getcomposer.org/doc/00-intro.md">https://getcomposer.org/doc/00-intro.md</a>
<a href="https://toolbelt.heroku.com/">https://toolbelt.heroku.com/</a>

Una vez lo tenemos todo nos dirigimos a la terminal o a la consola de comandos cmd e introducimos este comando:

<strong><em>heroku login</em></strong>

e introducimos nuestro nombre y contraseña que usamos al registrarnos en Heroku. Navegamos hasta el directorio donde tenemos guardado el código de nuestra aplicación y simplemente ejecutamos el comando:

<em><strong>git push heroku master</strong></em>

Todo listo ya solo queda probar que nuestro bot funciona correctamente iniciando una conversación con el y enviándole el comando que hemos creado.

<blockquote class="imgur-embed-pub" lang="en" data-id="a/7Oh85"><a href="//imgur.com/7Oh85"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
