---
layout: post
title: Tutorial Electron js - Cómo crear una aplicación de escritorio con tecnologías web
meta: Descubre con ejemplos cómo porgramar una aplicación de escritorio multiplataforma para crear notas usando electron js junto a AngularJS
description: Descubre con ejemplos cómo porgramar una aplicación de escritorio multiplataforma para crear notas usando electron js junto a AngularJS
excerpt: En este post echaremos un vistazo a Electron, un framework creado por el equipo de Atom para la creación de apps de escritorio multiplataforma. También veremos como podemos usar Electron para desarrollar una app para tomar notas y apintar recordatorios de una manera muy sencilla. 
title-page: Tutorial Electron - Cómo crear una aplicación de notas cross platform
image: task
lang: es
tags: [Electron, NodeJS, ExpressJS, MongoDB, Moongose ]
lastmod: 2018-10-27T00:00:00+00:00
---

En el día de hoy vamos a ver en que consiste Electron js, una librería para crear aplicaciones de escritorio con tecnologías web, y para ello vamos a desarrollar una app muy sencilla para la gestión de notas y recordatorios usando ExpressJS, MongoDB y Angular JS (Stack MEAN).

<h2>¿Qué es electron js?</h2>

Electron js es un framework desarrollado con la intención de facilitar la vida enormemente al programador.
Entre su ventajas, destaca la de poder crear apps de escritorio multiplataforma, es decir, para distintos sistemas operativos, usando tecnologías web.
Si manejas bien los lenguajes del desarrollo web como HTML, CSS y JavaScript, con este framework, podrás crear apps sin tener que aprender un lenguaje nuevo. 
Al utilizar HTML y CSS para representar los datos, es más sencillo crear apps responsive.
Una vez entendidas las características de Electron vamos a crear un ejemplo sencillo para ver mejor como funciona. 

<h2>Cómo empezar a usar Electron con ExpressJS</h2>

Antes de instalar Electron js, tenemos que instalar Node y NPM en nuestro equipo. Nos dirigimos a su página, lo descargamos y lo instalamos: [https://nodejs.org/en/](https://nodejs.org/en/). NPM lo pudes bajar e instalar desde aquí: [https://www.npmjs.com/](https://www.npmjs.com/)
Para instalar Electron, tenemos que abrir la terminal para introduccir el siguiente comando:

```bash
npm install electron --save-dev
```
Bien, para manejar las notas y recordatorios de nuestra app, vamos a utilizar ExpressJS junto con MongoDB como base de datos. Para el frontend, vamos a utilizar AngularJS, es decir, vamos a utilizar el stack MEAN.
Para el que no lo conozca, el stack MEAN consiste en desarrollar páginas webs, utilizando solo el lenguaje JavaScript, es decir, AngularJS, NodeJS y MongoDB, todos estos frameworks utilizan la sintaxis de JavaScript.
Ahora vamos a descargar o clonar el siguiente proyecto:

[https://github.com/theallmightyjohnmanning/electron-express](https://github.com/theallmightyjohnmanning/electron-express)

Una vez descargado, ejecutamos el comando <b>npm install</b> para que instale todas las dependencias. Si hasta aquí todo ha ido bien, si ejecutamos el comando <strong>npm start</strong> nos debería abrir la aplicación.

<h2>Desarrollo de la aplicación</h2>

Para insertar los datos en la base de datos MongoDB vamos a utilizar Moongose para gestionarlo de una manera más sencilla. Para ello tenemos que añadir una dependencia nueva en el archivo <b>packcage.json</b>

```json
"mongoose": "^4.4.12"
```

Si ahora, vuelves a hacer <b>npm install</b>, debería descargarse Moongose correctamente.
Para conectar nuestra app con la base de datos en MongoDB tenemos que modificar el fichero <b>app.js</b> para dejarlo parecido a esto:

```javascript
module.exports = () => {
  // Load The FS Module & The Config File
  fs = require('fs');

  // Load The Path Module
  path = require('path');
  mongoose = require('mongoose');      


 mongoose.connect('AQUI METE LA URL DE LA BASE DE DATOS MONGODB');     // connect to mongoDB database on modulus.io


  config = JSON.parse(fs.readFileSync('config.json'));

  // Load Express Module
  express = require('express');
  app 	= express();

  // Load Body Parser Module
  bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  // Load Express Handlebars Module & Setup Express View Engine
  expressHandlebars = require('express-handlebars');
  app.set('views', __dirname+'/views/'); // Set The Views Directory
  app.engine('html', expressHandlebars({ // Setup View Engine Middleware

    layoutsDir:__dirname + '/views/layouts',
  	defaultLayout: 'main',
  	extname: '.html',
  	helpers: {
  		section: function(name, options) {

  			if(!this._sections) {
  				this._sections = {};
  			}

  			this._sections[name] = options.fn(this);
  			return null;
  		}
  	}
  }));
  app.set('view engine', 'html');

  // Load Express Session Module
  session = require('express-session');
  app.use(session({ // Setup Session Middleware

  	secret: config.session.secret,
  	saveUninitialized: true,
  	resave: true
  }));

  // Load Connect Flash Module
  flash = require('connect-flash');
  app.use(flash());
  app.use(function(req, res, next) { // Setup Global Flash Message Middleware

  	res.locals.success_msg 	= req.flash('success_msg');
  	res.locals.error_msg 	= req.flash('error_msg');
  	res.locals.error 			= req.flash('error');
  	res.locals.user 			= req.user || null;
  	next();
  });

  // Load The Bcrypt Module
  bcrypt = require('bcryptjs');

  // Setup Globally Included Directories
  app.use(express.static(path.join(__dirname, '/../bower_components/')));
  app.use(express.static(path.join(__dirname, '/../node_modules/')));
  app.use(express.static(path.join(__dirname, '/../controllers/')));
  app.use(express.static(path.join(__dirname, '/../public/')));

  // Load Available Modules For Dependancy Injection Into Models & Routes
  modules = {
  	app: app,
  	bcrypt: bcrypt,
  	bodyParser: bodyParser,
  	config: config,
  	express: express,
  	expressHandlebars: expressHandlebars,
  	flash: flash,
  	fs: fs,
  	path: path,
  	session: session
  };

  // Setup Globally Included Routes
  fs.readdirSync(path.join(__dirname, 'routes')).forEach(function(filename) {

  	if(~filename.indexOf('.js'))
  		require(path.join(__dirname, 'routes/'+filename))(modules);
  });

  // Start The HTTP Server
  app.listen(config.server.port, config.server.host);
}

```



Ahora vamos a crear nuestro modelo para las notas y recordatorios. Este modelo lo puedes personalizar con los parámetros que necesites, en mi caso he creado un archivo dentro de la carpeta <b>app/models/</b> llamado 
<b>todo.js</b>

```javascript
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text : String,
    done: { type: Boolean, default: false },
    created: { type: Date, default: Date.now },
    type: { type: String, default:"Class" },
                     
 });
```

Ahora vamos a modificar el archivo <b>pages.js</b> que está situado dentro de la carpeta <b>app/routes</b>. En este archivo es donde gestionaremos las llamadas a la API Rest que estamos creando.

```javascript

 = require('../models/todo');
module.exports = function() {

	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});

	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});


	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	app.patch('/api/todos/:todo_id', function(req, res) {
		
		Todo.findById(req.params.todo_id, function (err, todo) {  
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        
		
		todo.done = !todo.done;
        
        // Save the updated document back to the database
        todo.save(function (err, todo) {
            if (err) {
                res.status(500).send(err)
            }


			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
					
				res.json(todos);
			});
			
           
        });

		
    }
});


	});


app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

}

```
Básicamente con esta API podemos gestionar las llamadas de GET, DELETE, y POST para crear, modificar y eliminar notas.

<h2>Cómo usar AngularJS para crear una web de notas</h2>

Ahora vamos a gestionar la parte del frontend, es decir, la representación de los datos. En el archivo <b>core.js</b>
creamos las siguientes funciones:

```javascript
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function (data) {

            angular.forEach(data, function (value, key) {

                value.created = moment(value.created).fromNow();




            });

            $scope.todos = data;
            console.log(data);

        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function () {
        $http.post('/api/todos', $scope.formData)
            .success(function (data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                angular.forEach(data, function (value, key) {


                    value.created = moment(value.created).fromNow();




                });

                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function (id) {
        $http.delete('/api/todos/' + id)
            .success(function (data) {

                  angular.forEach(data, function (value, key) {

                value.created = moment(value.created).fromNow();




            });


                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };



    $scope.doneTodo = function (id) {
        $http.patch('/api/todos/' + id)
            
            .success(function (data) {

                  angular.forEach(data, function (value, key) {

                value.created = moment(value.created).fromNow();




            });


                $scope.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}
```
Lo que hago es crear 4 funciones. La primera funcion, lo que hace es llamar a la API para coger todas las notas. La segunda función se encarga de coger el texto que metemos con el teclado en el input de la app,
y crea la nota, al crearla, utilizando la librería de moment.js lo que hago es añadir la fecha actual en la nota que acabo de crear. Posteriormente vuelvo a listar todas las notas.
La tercera función se encarga de eliminar una determinada nota. La última función sirve para marcar una nota o tarea como completada.

Ahora vamos a crear el archivo HTML, para ello modificamos el HTML de la carpeta public:

```html
<!-- index.html -->
<!doctype html>
<!-- ASSIGN OUR ANGULAR MODULE -->
<html ng-app="scotchTodo">

<head>
    <!-- META -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Optimize mobile viewport -->
    <title>Task Box</title>
    <!-- SCROLLS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
    <!-- load bootstrap -->
    <link rel="stylesheet" href="css/index.css">
    <!-- load bootstrap -->
    <!-- SPELLS -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <!-- load jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>
    <!-- load angular -->
    <script src="core.js"></script>
    <script src="js/moment.js"></script>
</head>
<!-- SET THE CONTROLLER AND GET ALL TODOS -->

<body ng-controller="mainController">
    <div class="container">
        <br>
        <!-- HEADER AND TODO COUNT -->
        <h2 class="green">TO-DO <span class="label label-info">{{ todos.length }}</span></h2>
        <hr class="green_hr">
        <!-- TODO LIST -->
        <div id="todo-list">
            <!-- LOOP OVER THE TODOS IN $scope.todos -->
            <h4>
                <div ng-if="!todo.done" class="checkbox row" ng-repeat="todo in todos">
                    <div class="col-xs-4"><label for="checkbox1">
                      <div> {{ todo.text }} </div> 
                      
                    </label>
                    </div>
                    <div class="col-xs-8">
                        <div class="left-column">
                            <small class="date" id="date">{{ todo.created }}</small>
                            <buttom id="checkbox1" class="btn btn_delete" ng-click="doneTodo(todo._id)"> <span class="glyphicon glyphicon-ok green delete" aria-hidden="true"></span></buttom>
                            <buttom id="checkbox1" class="btn btn_delete" ng-click="deleteTodo(todo._id)"> <span class="glyphicon glyphicon-remove red delete" aria-hidden="true"></span></buttom>
                        </div>
                    </div>
                </div>
                <hr class="green_hr">
                <div ng-if="todo.done" class="checkbox row" ng-repeat="todo in todos">
                    <div class="col-xs-4"><label for="checkbox1">
                      
                      <div  class="done"> {{ todo.text }} </div> 
                    </label>
                    </div>
                    <div class="col-xs-8">
                        <div class="left-column">
                            <small class="date" id="date">{{ todo.created }} {{ todo.type }}</small>
                            <buttom id="checkbox1" class="btn btn_delete" ng-click="doneTodo(todo._id)"> <span class="glyphicon glyphicon-ok grey delete" aria-hidden="true"></span></buttom>
                            <buttom id="checkbox1" class="btn btn_delete" ng-click="deleteTodo(todo._id)"> <span class="glyphicon glyphicon-remove red delete" aria-hidden="true"></span></buttom>
                        </div>
                    </div>
                </div>
            </h4>
        </div>
    </div>
    <!-- FORM TO CREATE TODOS -->
    <div id="todo-form" class="row">
        <form>
            <div class="input-group">
                <input type="text" class="form-control input-lg text-center input1" placeholder="TO-DO task" ng-model="formData.text">
                <span class="input-group-btn">
                        <button type="submit" class="btn btn-lg button1" ng-click="createTodo()"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                        
                </span>
            </div>
            <!-- /input-group -->
        </form>
        <script src="js/index.js"></script>
</body>

</html>
```

Lo que hago en primer lugar, es mostrar una lista con las notas y tareas sin realizar. Para ello con Angular hago un bucle recorriendo todas las notas, si la nota no esta completada crea un div con todos sus parámetros.
A la derecha de cada nota añado un botón para poder marcarla como completada con <b>ng-click="doneTodo(todo._id)</b> y otro botón para eliminarla completamente de la base de datos <b>ng-click="deleteTodo(todo._id)</b>
Debajo, añado una lista con las tareas que ya hayan sido completadas, el mecanismo es el mismo, simplemente que si la nota ha sido completada se muestra.
Por último, en la parte inferior un input para añadir el texto de la nota y el botón para añadir. 
También podemos añadir CSS a nuestra app para darle estilos, en mi caso me he decantado por los siguiente estilos:

```css
body{
        background-color: #1E1A25;
        color: white;



}

.green{

    color: #39FAB4;
}

.label-info{
    background-color: #39FAB4;
    border-radius: 50%;
    color:#1E1A25; 
    
}

.green_hr{
    border-top: 1px solid #39FAB4;
}

#todo-form{

    position: fixed;
    width: 90%;
    bottom: 0;
    left: 50%;
    margin-left: -43.5%;

}

.button1{
    background-color: transparent;
    color: #39FAB4;
    border: none;
}

.button1:hover{
    background-color: #39FAB4;
    color: #1E1A25;
}

.input1{
    background: transparent;
    border-color: #39FAB4;
    color: white;
}


.red{
    color: #f45c42;

}

.grey{
    color: #999;
}

.left-column{
    margin-top: -6px;
}

.row{
    margin-bottom: 30px;
}

.done{
    color: #999;
}



```

Si todo ha ido bien, al ejecutar la app con <b>npm start</b> debería aparecer algo parecido a esto:

<img src="http://i.imgur.com/A5ZYIut.png" class="responsive-img" alt="tutorial electron español notas y recordatorios"> 

Y hasta aquí el artículo de hoy, te animo a que sigas investigando acerca de Electron ya que es una tecnología con mucho potencial, la cual puedes utilizar
para hacer apps muy chulas en poco tiempo y de una manera muy sencilla.
