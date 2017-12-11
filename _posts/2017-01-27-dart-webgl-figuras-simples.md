---
layout: post
title: WebGL con Dart 02 - Renderizando figuras simples
meta: WebGL y Dart, cómo dibujar figuras simples. Qué son los shaders y como usarlos. Usando buffers
description: WebGL y Dart, cómo dibujar figuras simples. Qué son los shaders y como usarlos. 
summary: En este artículo veremos como podemos dibujar círculos y triángulos. Crearemos buffers para estas figuras y los usaremos. Veremos que son los shaders y cómo los podemos usar en nuestra escena para ahorrar recursos y optimizar.
title-page: WebGL y Dart, renderizando figuras simples
image: dart2
tags: [Dart, WebGL]
---


Antes de empezar con este artículo, es recomendable leer el episodio anterior, lo puedes encontrar aqui: [http://frostqui.github.io/tutorial-dart-webgl](http://frostqui.github.io/tutorial-dart-webgl)
Bien, entendido este podemos empezar. Este tutorial está basado en los tutoriales de NeHe OpenGL.

<h2>Creando el proyecto</h2>

Lo primero que tenemos que saber es que aunque queramos dibujar renderizar en 2D, no tenemos que olvidar que WebGL dibuja los objetos en un espacio 3D.

Como en el anterior tutorial, empezamos creando el proyecto dart con nuestro IDE, en mi caso con WebStorm. Abrimos el achivo <b>index.html</b> y añadimos el canvas donde dibujaremos
las figuras.

```html
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="scaffolded-by" content="https://github.com/google/stagehand">
    <title>untitled</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="main.dart" type="application/dart"></script>
    <script defer src="packages/browser/dart.js"></script>
</head>

<body>

    <canvas id="game" width="900px" height="500px"></canvas>

</body>
</html>
```

Tras esto, abrimos el archivo <b>main.dart</b>, inicializamos importamos webgl y lo incializamos con el canvas. Además, he importado la librería para tener datos tipados,
y la librería para crear vectores.

```javascript
import 'dart:html' as html;
import 'dart:web_gl' as GL;
import 'dart:typed_data';
import 'package:vector_math/vector_math.dart';

void main() {
 var canvas = html.querySelector("#game");

  gl = canvas.getContext("webgl");

  if(gl == null){
    gl = canvas.getContext("experimental-webgl");
    _initShaders();
    _initBuffers();
  }

  if(gl != null){
    start();
  }else{
    html.window.alert("Tu navegador no soporta WebGL");
  }
}

void start(){
  gl.clearColor(1, 1, 1, 1.0);
  gl.enable(GL.RenderingContext.DEPTH_TEST);

}
```

Para importar la librería de los vectores tienes que añadir esto en tu archivo <b>pubspec.yaml</b> y ejecutar el comando <b>pub get</b>

```yaml
dependencies:
  vector_math: any
```

<h2>Creando los buffers</h2>

Ahora vamos a escribir nuestra función para crear los buffers que sean necesarios. Vamos a utilizar los buffers para almacenar las figuras que tienen que ser dibujadas. Para
ello declaramos dos variables de tipo buffers

```javascript
GL.Buffer _triangleVertexPositionBuffer;
GL.Buffer _squareVertexPositionBuffer;
```

Toca crear la funcion para inicializar los buffers. Para el triángulo, vamos a almacenar la posición de sus vertices, de esta forma, si hace falta que se vuelva a renderizar,
será más eficiente porque ya tiene su posición. Hacemos lo mismo para el cuadrado.


```javascript
void _initBuffers() {
  // variable to store verticies
  List<double> vertices;

  // Creamos el triangulo
  _triangleVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(GL.RenderingContext.ARRAY_BUFFER, _triangleVertexPositionBuffer);

  // Rellenamos el buffer con los vértices
  vertices = [
    0.0,  1.0,  0.0,
    -1.0, -1.0,  0.0,
    1.0, -1.0,  0.0
  ];
  gl.bufferDataTyped(GL.RenderingContext.ARRAY_BUFFER, new Float32List.fromList(vertices), GL.RenderingContext.STATIC_DRAW);

  // Creamos el cuadrado
  _squareVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(GL.RenderingContext.ARRAY_BUFFER, _squareVertexPositionBuffer);

  // Rellenamos el buffer con los vértices
  vertices = [
    1.0,  1.0,  0.0,
    -1.0,  1.0,  0.0,
    1.0, -1.0,  0.0,
    -1.0, -1.0,  0.0
  ];
  gl.bufferDataTyped(GL.RenderingContext.ARRAY_BUFFER, new Float32List.fromList(vertices), GL.RenderingContext.STATIC_DRAW);

}
```

<h2>Dibujando las figuras</h2>

Ahora, vamos a definir la función que dibujará la escena. Lo primero, es usar la funcion <b>clear</b> de WebGl para limpiar el área que vamos a dibujar.
Para nuestra escena vamos a necesitar una Matriz para almacenar las posiciones y las transformaciones, así que creamos una llamada <b>_mvMatrix</b>, y le aplicamos una transformación
para movernos al centro de la escena. El siguiente paso es dibujar las figuras que hay en el buffer. Por último, una vez dibujada cada figura, llamamos al método <b>_setMatrixUniforms()</b>
para que se almacene en la tarjeta gráfica el modelo de la vista.
La función quedaría de la siguiente manera:

```javascript
render([double time = 0.0]) {
  gl.clear(GL.RenderingContext.COLOR_BUFFER_BIT | GL.RenderingContext.DEPTH_BUFFER_BIT);

  _mvMatrix = new Matrix4.identity();
  _mvMatrix.translate(new Vector3(-1.5, 0.0, -7.0));

  // Dibujamos el triángulo
  gl.bindBuffer(GL.RenderingContext.ARRAY_BUFFER, _triangleVertexPositionBuffer);
  gl.vertexAttribPointer(_aVertexPosition, _dimensions, GL.RenderingContext.FLOAT, false, 0, 0);
  _setMatrixUniforms();
  gl.drawArrays(GL.RenderingContext.TRIANGLES, 0, 3); // Triángulo. Empieza en 0. 3 en total

  // Dibujamos el cuadrado
  _mvMatrix.translate(new Vector3(3.0, 0.0, 0.0));

  gl.bindBuffer(GL.RenderingContext.ARRAY_BUFFER, _squareVertexPositionBuffer);
  gl.vertexAttribPointer(_aVertexPosition, _dimensions, GL.RenderingContext.FLOAT, false, 0, 0);
  _setMatrixUniforms();
  gl.drawArrays(GL.RenderingContext.TRIANGLE_STRIP, 0, 4); // Cuadrado. Empieza en 0. 4 en total
}

void _setMatrixUniforms() {
  Float32List tmpList = new Float32List(16);

  _pMatrix.copyIntoArray(tmpList);
  gl.uniformMatrix4fv(_uPMatrix, false, tmpList);

  _mvMatrix.copyIntoArray(tmpList);
  gl.uniformMatrix4fv(_uMVMatrix, false, tmpList);
}

```

<h2>Creación de los shaders</h2>

Antes de crear los shaders vamos a entender qué son. Los shader son una forma de añadir color e iluminación mediante código a figuras o píxeles. Esto se calcula atomáticamente antes 
de dibujar las figuras. Estos shaders también permiten otros efectos como animaciones, distorisiones o desenfoques. Los shaders también son útiles para hacer los cálculos necesarios 
con la velocidad de la GPU.

Lo primero que hacemos es inicializar un par de Strings. Uno lo usaremos para definir la animación y el otro para definir el color. Lo siguiente que hacemos es compilar los shaders y 
aplicarlos a la escena. Por último comprobamos que el proceso ha salido bien.



```javascript
void _initShaders() {
  // VertexShader para la creación de la animación

  String vsSource = """
    attribute vec3 aVertexPosition;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    }
    """;

  // Fragment shader para la creación de la animacion de los colores


  String fsSource = """
    precision mediump float;
    void main(void) {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    }
    """;

  // Compilacion de los dos shaders
  _vs = gl.createShader(GL.RenderingContext.VERTEX_SHADER);
  gl.shaderSource(_vs, vsSource);
  gl.compileShader(_vs);

  
  _fs = gl.createShader(GL.RenderingContext.FRAGMENT_SHADER);
  gl.shaderSource(_fs, fsSource);
  gl.compileShader(_fs);

  // Metiendo los shaders en el programa
  _shaderProgram = gl.createProgram();
  gl.attachShader(_shaderProgram, _vs);
  gl.attachShader(_shaderProgram, _fs);
  gl.linkProgram(_shaderProgram);
  gl.useProgram(_shaderProgram);

  //Comprobamos que los shaders han sido añadidos correctamente

  if (!gl.getShaderParameter(_vs, GL.RenderingContext.COMPILE_STATUS)) {
    print(gl.getShaderInfoLog(_vs));
  }

  if (!gl.getShaderParameter(_fs, GL.RenderingContext.COMPILE_STATUS)) {
    print(gl.getShaderInfoLog(_fs));
  }

  if (!gl.getProgramParameter(_shaderProgram, GL.RenderingContext.LINK_STATUS)) {
    print(gl.getProgramInfoLog(_shaderProgram));
  }

  _aVertexPosition = gl.getAttribLocation(_shaderProgram, "aVertexPosition");
  gl.enableVertexAttribArray(_aVertexPosition);

  _uPMatrix = gl.getUniformLocation(_shaderProgram, "uPMatrix");
  _uMVMatrix = gl.getUniformLocation(_shaderProgram, "uMVMatrix");
}

```
Si todo ha salido bien, al ejecutar nuestro código nos encontraremos con las dos figuras

<img src="http://i.imgur.com/ipv3rUu.png" class="responsive-img" alt="tutorial dart webgl"> 

El código de todo el archivo <b>main.dart</b> lo puedes encontrar en este github:

[https://github.com/martinsik/dart-webgl-tutorials/blob/master/lib/lesson-01/lesson-01.dart](https://github.com/martinsik/dart-webgl-tutorials/blob/master/lib/lesson-01/lesson-01.dart)












