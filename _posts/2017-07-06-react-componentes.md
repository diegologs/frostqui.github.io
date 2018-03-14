---
layout: post
title: React - Cómo crear componentes y elementos
meta: ¿Qué es React? ¿Cómo instalar y configurar React? ¿Cómo crear componentes en React?
description: ¿Qué es React? ¿Cómo instalar y configurar React? ¿Cómo crear componentes en React?  
summary: React es una librería muy potente, es capaz de crear componentes y renderizarlos de forma muy rápida. En este artículos veremos cómo podemos usarlo en nuestros proyectos, como instalarlo y cómo crear componentes reutilizables.
title-page: React, componentes y elementos
image: react
lang: es
tags: [React] 
---

## ¿Qué es React?

React es una librería javascript para crear interfaces de usuario dependiendo de su estado. Las aplicaciones React se construyen mediante componentes, los cuales son elementos independientes y pueden ser reutilizados, además, describen cómo tienen que visualizarse y cómo tienen que comportarse.

React utiliza el llamado HTML virtual DOM, el cual se renderiza mucho más rapido que el HTML tradiccional ya que no se calculan sus estilos CSS. Cuando el virtual DOM cambia se genera uno nuevo y se calcula las diferencias con el anterior virtual DOM. Por último React genera los cambios pertinentes en el HTML. 



## Instalación y configuración de React

La forma más rápida de instalar React es inluyendo el CDN en un archivo html:

```html
<!DOCTYPE html>
<html> 
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>       
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>

</head>
<body>  
</body>
</html>
```

A continuación añadimos un script babel, y un elemento root que usará React para renderizar todos los elementos:

```html
<!DOCTYPE html>
<html> 
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>       
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>

</head>
<body>  

    <div id="root"></div>

    <script type="text/babel">
    </script>

</body>
</html>
```

Por último comprobamos que lo hemos instalado correctamente renderizando un elemento dentro de la página mediante React.render


```html
<!DOCTYPE html>
<html> 
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>       
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.js"></script>

</head>
<body>  

    <div id="root"></div>

    <script type="text/babel">
    
    ReactDOM.render(              
        <div>Hello World</div>,              
        document.getElementById("root")          
    )

    </script>

</body>
</html>
```

## JSX

JSX es una extensión a la sintaxis de Javascript que permite insertar código HTML. Usando JSX podemos crear elementos React fácilmente:

```javascript
    var element = <h1>Hello World!</h1>
```

En cambio si no tenemos JSX, el proceso es mucho mas lento y menos legible:

```javascript
     var element = React.createElement(
        'h1',
        null,
        'Hello World!'
    )
```

Además, JSX permite escribir expresiones mas complejas:

```javascript

    var item = {
        name: "Cheese",
        price: 5
    }
    var element = <p>{item.name} : ${item.price} </p>
```

## Componentes en React

Como decíamos anteriormente, un componente en React es un elemento independiente y reeutilizable. Además existen dos tipos de componentes en React:

- <b>Componentes funcionales</b>: Solo tienen propiedades.
- <b>Componentes de clase</b>: Tienen propiedades, ciclos de vida y propiedades.

### Componentes funcionales

Son componentes que generan elementos React. Por convenio se pone el nombre de la función en mayúsculas. Para renderizarlo simplemente se pone una etiqueta con el nombre de la función. Por ejemplo: 

```javascript
  function HelloWorld(){
        return <h1>Hello World!</h1>
    }

    ReactDOM.render(
        <HelloWorld/>,
        document.getElementById("root")
    )
```

A estas funciones le puedes pasar parámetros, el primero de ellos son las propiedades, por ejemplo:

```javascript
function HelloWorld(props){
        return <h1>Message: {props.message}</h1>
    }

ReactDOM.render(
        <HelloWorld message="Hello World!"/>,
        document.getElementById("root")
    )
```
En este ejemplo al renderizar el elemento, pasamos una variable al componente, que se encargará de renderizarla. Puedes pasar como parámetros variables, arrays e incluso otros elementos React.

También se puede configurar la salida de un componente dependiendo de un operador condicional:

```javascript
function Feature(props){
    return <h1>This feature is {props.active? "active" : "not active"}</h1>
}
```

Si la variable que llega a la función es true imprimirá "This feature is active" y "This feature is not active" en caso contrario. También podemos revolver <strong>null</strong> en un componente para que no se renderice. 

## Ejemplo de aplicación React

Para entender mejor la teoría vamos a construir una aplicavión React para la lista de la compra. 

Empezamos creando un componente que represente un único elemento de la lista:

```javascript
function ListItem(props){
        return <li>Test String</li>
}
```

Creamos otro componente para alojar el título y la descripción de la página:

```javascript
function ShoppingTitle(props){
        return (
            <div>
                <h1>Test Title</h1>
                <h2>Test Description</h2>
            </div>

        ) 
    }
```

 También creamos un componente que contenga una lista y su título. Dentro de la lista colocamos el componente con un únco item de la lista, el que creamos anteriormente:

```javascript
function ShoppingList(props){
        return (
            <div>
                <h3>Test Header</h3>
                <ol>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </ol>
            </div>
        )
    }
```

Ahora vamos a crear otro componente que contenga la una lista junto con el título de la lista:

```javascript
  function ShoppingApp(props){

        return (
            <div>
                <ShoppingTitle/>
                <ShoppingList/>
                <ShoppingList/>
                <ShoppingList/>
            </div>
        )
    }
```

Por el momento, estamos devolviendo títulos de prueba para comprobar que lo que estamos haciendo funciona, es hora de cambiar esto por los datos:

```javascript
    function ShoppingApp(props){

        return (
            <div>
                <ShoppingTitle title = "My Shopping List" numItems = "9"/>
                <ShoppingList header = "Food" items = {[ "Apple","Bread","Cheese"]}/>
                <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
                <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
            </div>
        )
    }
```
En cada ShoppingList añadimos el header y la lista con los items, este componente se encargará de pasar los elementos a cada uno de los items para representarlos. Al componente ShoppingTitle le pasamos el nombre de la aplicación y el número total de items. 

Ahora tenemos que modificar cada uno de los componentes para que rendericen los elementos que llegan desde los parámetros:


```javascript
function ShoppingList(props){
        return (
            <div>
                <h3>{props.header}</h3>
                <ol>
                    <ListItem item = {props.items[0]}/>
                    <ListItem item = {props.items[1]}/>
                    <ListItem item = {props.items[2]}/>
                </ol>
            </div>
        )
    }


function ShoppingTitle(props){
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>Total Number of Items: {props.numItems}</h2>
            </div>

        ) 
    }

function ListItem(props){
        return <li>{props.item}</li>
     }

```

Para probar nuestra aplicación, usamos React.render para mostrar la aplicación:

```javascript
 ReactDOM.render(
        <ShoppingApp/>,
        document.getElementById("root")
    )
```

Si todo ha salido bien el resultado tiene que ser como este:

<img src="http://i.imgur.com/csT9uW8.png" class="responsive-img" alt="React sample app"> 

Por el momento eso es todo, en posteriores artículos seguiremos aprendiendo otras características de React para sacarle todo el potencial. 
