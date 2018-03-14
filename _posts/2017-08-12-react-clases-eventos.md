---
layout: post
title: React - Clases, estados y ciclos de vida
meta: Cómo podemos crear clases en React y cómo podemos usar los estados y los ciclos de vida de los componentes
description: Cómo podemos crear clases en React y cómo podemos usar los estados y los ciclos de vida de los componentes  
summary: Los componentes de clase en React tienen estado y ciclos de vida. En esta ocasión veremos cómo actualizar el estado de los componentes y cómo modificar su ciclo de vida
title-page: React - Clases estados y ciclos de vida
image: react2
lang: es
tags: [React] 
---

## Componentes de clase

Anteriormente, vimos que React tiene dos tipos de componentes: los funcionales y los de clase. En esta ocasión veremos los componentes de clase, que difiere de los funcionales en los estados y ciclos de vida. Los componentes de clase tienen dos propiedades, <b>this.state</b> y <b>this.props</b>
Un ejemplo sencillo de componente de clase:

```javascript
class Welcome extends React.Component{
    render(){
        return <h1>Hello World!</h1>
    }
}
```

Dentro de la función render(), se sitúa el elemento que queremos devolver.

Para renderizarlo podemos hacerlos igual que cuando vimos los componentes funcionales, escribiendo su nombre dentro de una etiqueta HTML: 

```html
<Welcome/>
```
Para acceder a las propiedades de la clase, podemos hacerlo mediante this.props, por ejemplo:

```javascript
class Welcome extends React.Component{
    render(){
        return <h1>Message: {this.props.message}</h1>
    }
}
```

```html
<Welcome message="Hello World!"/>
```

## Estados 

Dentro de los componentes de clase existe una función constructor que se utiliza para definir el estado inicial del componente. Es muy importante llamar a la función super() dentro del constructor para que los parámetros funcionen adecuadamente:

```javascript
class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>Hello World!</div>
    }
}
```

Para definir el estado inicial podemos hacerlo creando un objeto y pasándoselo a la variable <b>state</b>: 

```javascript
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {foo:123,bar:456}
    }
    render(){
        return <div>foo:{this.state.foo} bar:{this.state.bar}</div>
    }
}
```

El método updateState se utiliza para actualizar el estado del componente. Recoge un objeto de actualización y actualiza el estado del componente fusionando  los atributos del objeto del actualizador con el estado del componente anterior. El método actualiza el estado de forma asíncrona, por lo que hay una opción de callback que se llamará una vez que el estado ha terminado de actualizar completamente. Para usar el método updateState(), debe ser referenciado llamando a this.updateState(). Por ejemplo:

```javascript
class Counter extends React.Component{
    constructor(props){
        super(props)
        //initial state set up
        this.state = {message:"initial message"}
    }
    componentDidMount()
        //updating state
        this.setState({message:"new message"})
    }
    render(){
        return <div>Message:{this.state.message}</div>
    }
}
```

Hay que tener especial cuidado con los estados previos, puesto que cuando llamamos a la función para actualizar el estado actual no se cambia instantáneamente,sino que se añade a una cola esperando a procesarse. Si por ejemplo llamamos 4 veces seguidas para actualizar el estado, solo surtirá efecto la primera llamada.

En este ejemplo podemos ver cómo actualizar el estado teniendo en cuenta estados previos:

```javascript
class Counter extends React.Component{
    constructor(props){
        super(props)
        //initial state set up
        this.state = {message:"initial message"}
    }
    componentDidMount()
        //updating state
        this.setState((prevState, props) => {
            return {message: prevState.message + '!'}
        })
    }
    render(){
        return <div>Message:{this.state.message}</div>
    }
}
```

El estado es inmutable, eso quiere decir que no podemos cambiarlo manualmente actualizando sus variables. Por ejemplo la siguiente sentencia es incorrecta:

```javascript
this.state.message = "new message"
```

## Ciclos de vida

Los componentes de clase siguen unos ciclos de vida, pero sobreescribiendo estos métodos podemos incluir código para ser ejecutado en cada uno de los ciclos.


<b>Fase de montaje</b>

- constructor(props) - Cuando el componente se inicializa. Se ejecuta una sola vez.
    
- componentWillMount() - Cuando el componente está a punto de ser montado.
    
- render() - Cuando el componente ya se ha renderizado.
    
- componentDidMount() - Cuando el componente ya se ha montado.


<b>Fase de actualización</b>

  - componentWillReceiveProps(nextProps) - Cuando el componente esta recibiendo nuevos parámetros.

  - shouldComponentUpdate(nextProps, nextState) - Cuando el componente ha recibido todos los parámetros y está a punto de actualizarse.

  - componentWillUpdate(nextProps, nextState) - Cuando el componente va a actualizarse.

  - render() - Cuando el componente va a ser renderizado.

  - componentDidUpdate(prevProps, prevState) - Cuando el componente ha terminado de actualizarse.

  - componentWillUnmount() - Cuando el componente va a ser desmontado.
    

## Manipuladores de eventos

Crear eventos en ReactJS es similar a crearlos en HTML con la diferencia de que el React se usan llaves:

```javascript
<button onClick = {clickHandler} >Click Me</button>
```

Para manipular estos eventos se pueden crear funciones dentro de las clases de React, por ejemplo:

```javascript
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {count:0}
        //binding is necessary to make `this` point to the correct object
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
     
      this.setState((prevState,props) => {
        return {count: prevState.count + 1}
      })
    }
    render(){
 
        return <button onClick = {this.clickHandler}>{this.state.count}</button>
    }
}
```

La función bind(), que está en el constructor se usa para enlazar la palabra clave a la instancia del componente, si no incluimos este método, apuntará a un objeto incorrecto y por tanto la aplicación no funcionará correctamente.


## Elevando los estados hacia arriba

El método setState() sólo permite que los componentes actualicen su propio estado. Si queremos actualizar el estado de un componente a un componente hijo o hermano no lo podemos hacer directamente. Tenemos que elevar el estado hacia la clase principal para que enlace el estado una vez actualizado a los componentes que lo necesiten.

Para ver cómo podemos aplicar esta técnica puedes echar un vistazo a este ejemplo:

<a href="https://codepen.io/benjlin/pen/OmaLqE">https://codepen.io/benjlin/pen/OmaLqE<a>

<img src="https://i.imgur.com/qIiyFAb.png" class="responsive-img" alt="React sample app"> 

Como ves, el ejemplo consta de 4 botones con una descripción en la parte inferior que muestra el botón que está activo.

Cuando pulsamos sobre un botón, este componente tendrá que actualizar los estados de los demás botones para que se vuelvan inactivos. Es por ello que tenemos que elevar el estado, es decir al controlador de eventos para que se encargue de coger el array de botones activos para volverlos inactivos. 




    
