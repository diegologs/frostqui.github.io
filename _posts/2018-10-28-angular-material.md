---
layout: post
title: Angular Material - Tutorial de la mejor librería de componentes material design
meta: Cómo usar angular material design para crear componentes. Cómo crear iconos con angular material. Guía de componentes
description: Cómo usar angular material design para crear componentes. Cómo crear iconos con angular material. Guía de componentes
excerpt: Echamos un vistazo a Angular Material, una librería de componentes web con un estilo material design de Google. Hacemos un repaso de algunos componentes interesantes listos para usar en tu proyecto Angular
title-page: Angular Material- Tutorial de la mejor librería de componentes
image: angular-material
lang: es
tags: [Angular] 
serie: angular
---

## ¿Qué es Angular Material?

Angular Material, como su nombre indica, es una librería para Angular de componentes web con un diseño Material design. ¿Y qué es material design?
Pues un es una guía de estilo creada por Google para Android y para sus aplicaciones. En los últimos tiempos se ha puesto muy de moda el estilo material design, y han salido un montón de librerías y frameworks que implementan estos estilos, entre ellas Angular Material, para que no tengas que perder el tiempo consultando la guía de Google si quieres tener los mismos estilos. Aún así te recomiendo que le eches un vistazo a la [documentación oficial de material design](https://material.io/design/), más teniendo en cuenta que recientemente han cambiado muchas cosas y han sacado una nueva versión.

## ¿Cómo usar Angular Material?

Bien, para esta guía voy a basarme en la librería de Angular Material para la versión 2 en adelante. Si quieres una librería para AngularJS te recomiendo que le eches un vistazo a la [documentación oficial para AngularJS](https://material.angularjs.org/latest/).

Si estás empezando con Angular te recomiendo también mi [curso gratuito de Angular desde 0]({{site.baseurl}}series/angular)

Para empezar a usar Angular Material, el primer paso es añadirlo mediante NPM o Yarn a nuestro proyecto:

NPM:
```bash
npm install --save @angular/material @angular/cdk @angular/animations
```

Yarn:
```bash
yarn add @angular/material @angular/cdk @angular/animations
```

Si estás usando Angular 6 en adelante, puedes descargar Angular Material usando el comando de Angular CLI:

```bash
ng add @angular/material
```

Para habilitar las animaciones y que puedan funcionar, tenemos que importar las de Angular en el módulo de la aplicación (ya sea el archivo app.module.ts o en uno local a una carpeta:

```typescript
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
```

El siguiente paso es importar los componentes que vayamos a utilizar (yo recomiendo crear un archivo .module.ts separado para tener todo más ordenado), por ejemplo:

```typescript
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
```

Si no sabes que componentes usar no te preocupes porque si sigues leyendo vas a encontrar una guía de los componentes de Angular Material para que decidas qué componentes web material design vas a usar en tu proyecto.

Para usar los temas de Angular material los tenemos que importar en el archivo **styles.css**, por ejemplo

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

Los temas que vienen por defecto, en el momento de escribir este artículo, son:

- deeppurple-amber.css
- indigo-pink.css
- pink-bluegrey.css
- purple-green.css

Por último tienes que instalar **hammerjs** una liberría que usa Angular Material por debajo para configurar los gestos de los sliders por ejemplo,para ello:

NPM:
```bash
npm install --save hammerjs
```

Yarn:
```
yarn add hammerjs
```

Y en el archivo **src/main.ts** simplemente añadimos:

```typescript
import 'hammerjs';
```

Como paso opcional puedes añadir los iconos de Angular Material desde el CDN, añadiéndolos en el archivo **index.html**:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

<br>

***
## Componentes de Angular Material

<img src="https://i.imgur.com/Uf5tywB.png" class="responsive-img" alt="Componentes de Angular material"> 

**¿Qué componentes hay en Angular Material design?** Vamos a verlos a continuación. He creado una serie de componentes usando esta librería de componentes para que los veas en acción. Para ver la vista previa de cada ejemplo solo tienes que hacer click en el botón **Run proyect**. No voy a mostrar todos los componentes que Angular Material puede ofrecer porque son demasiados pero sí que voy a poner los que me parecen más interesantes.

## Botones

Botones customizables. Para usarlos tienes que importar en el archivo .module.ts:

```typescript
import {MatButtonModule} from '@angular/material/button';
```
Para customizarlos, este componente viene con una serie de parámetros:

- mat-button: Botón básico sin color de fondo 
- mat-raised-button: Botón con sombra y con color de fondo
- mat-flat-button: Botón con color pero sin sombra
- mat-stroked-button: Botón con borde pero sin color de fondo
- mat-icon-button	Botón circular para añadir un icono, es transparente
- mat-fab: Botón circular con fondo y sombra
- mat-mini-fab: Lo mismo que el anterior pero más pequeño

Para usarlos creamos el botón HTML y le añadimos el parámetro que queramos, para cambiarle el color añadimos la propiedad **color**. Si quieres usar también los iconos importar:

```typescript
import {MatIconModule} from '@angular/material/icon';
```

```html
<button mat-button color="primary">Primary</button>
<button mat-stroked-button color="accent">Accent</button>
<button mat-icon-button>
  <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
</button>
```

Ejemplos:
<iframe width="100%" height="250px" src="https://stackblitz.com/edit/angular-zkgp3z?ctl=1&embed=1&file=app/button-overview-example.html&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

### Botón toggler o seleccionable

Para crear un botón de toggle (un botón seleccionable) tienes que importar:

```typescript
import {MatButtonToggleModule} from '@angular/material/button-toggle';
```

Estos botones no tienen los parámetros anteriores pero aceptan un parámetro llamado value que recoge el valor del botón que ha pulsado el usuario, por defecto los botones actúan como botones de radio (solo uno puede estar seleccionado)

```html
<mat-button-toggle-group name="fontStyle" aria-label="Font Style">
  <mat-button-toggle value="bold">Bold</mat-button-toggle>
  <mat-button-toggle value="italic">Italic</mat-button-toggle>
  <mat-button-toggle value="underline">Underline</mat-button-toggle>
</mat-button-toggle-group>
```

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/vqmarvxkrlk?ctl=1&embed=1&file=app/button-toggle-overview-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

### Badges o indicadores

Pequeños indicadores redondos para mostrar el número de notificaciones que tiene un usuario, por ejemplo. Para usarlos: 

```typescript
import {MatBadgeModule} from '@angular/material/badge';
```

Se puede definir la posición del badge usando el atributo **matBadgePosition**, por ejemplo: **matBadgePosition="above after"**

Para el tamaño se hace con **matBadgeSize**, los valores que acepta son **small**, **medium** y **large**. Para el color usar el atributo **matBadgeColor** y el color que quieras.

```html
<span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
```

<iframe width="100%" height="250px" src="https://stackblitz.com/edit/angular-zpvcju?ctl=1&embed=1&file=app/badge-overview-example.html&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

## Iconos Angular Material design

Angular material viene con un set de iconos material design, si has configurado el CDN cómo he indicado antes, tienes a tu disposición un conjunto bastante bueno de iconos svg material design. Para usar estos iconos importa:

```typecript
import {MatIconModule} from '@angular/material/icon';
```

Si quieres usarlos simplemente crea la etiqueta con el parámetro **svgIcon** del icono que quieres renderizar.

```html
<mat-icon svgIcon="thumbs-up"></mat-icon>
```
Si quieres saber una lista de iconos disponibles, mira esta página de [iconos angular material](https://klarsys.github.io/angular-material-icons/)

### Spinners

El típico spinner que gira para mostrar que algo está cargando. Si lo quieres usar importa:

```typescript
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
```

```html
<mat-spinner></mat-spinner>
```

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/ndvrqmopnqm?ctl=1&embed=1&file=app/progress-spinner-overview-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

<br>

***

## Formularios

### Date picker, selección de fechas y calendarios

Con este componente tan útil, puedes añadir un selector de fechas mediante calendario al usuario. Este es uno de los componetes más customizables, por lo que solamente voy a poner los parámetros que me han parecido más útiles. Los inputs no los he querido poner porque no añaden mucho nuevo, pero lo menciono por si los quieres investigar por tu cuenta:

Si quierees usarlo importa:

```typescript
import {MatDatepickerModule} from '@angular/material/datepicker';
```

- startView: Sirve para poner que selección se va a mostrar al principio, **year** para selección de años, **month** para meses y **multi-year** para varios años, por defecto es **month**. 

- Para capturar los años o meses seleccionados se hace con el evento **yearSelected** o **monthSelected**

- Para pasar una fecha seleccionada por defecto se puede hacer pasándola mediante el formControl, por ejemeplo `[formControl]="date"`

- Para cambiar el color, lo puedes hacer añadiéndolo a la etiqueta padre para que automáticamente herede los colores, aunque también se lo puedes pasar al calendario directamente para que tenga su propio esquema.

- Si quieres poner que el calendario tenga una fecha máxima y una mínima lo puedes hacer mediante las propiedades **min** y **max** respectivamente. Por ejemplo `[min]="minDate" [max]="maxDate"`

- Para que el calendario se muestre casi a pantalla completa haciendo que en dispositivos móviles se seleccionen mejor las fechas, tienes que añadir la propiedad **touchUi**

- Los eventos encargados de sacar el input del usuario se llaman **dateInput** y **dateChange**. 

Hay mas propiedades pero te voy a dejar la [documentación oficial sobre los calendarios de Angular Material](https://material.angular.io/components/datepicker/overview) para que no se haga muy largo.

```html
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Input & change events"
         (dateInput)="addEvent('input', $event)" (dateChange)="addEvent('change', $event)">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
```

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/odrmqdenkrv?ctl=1&embed=1&file=app/datepicker-events-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

## Checkbox y botones radio

Son las típicas casillas que vienen con el HTML por defecto para que el usuario seleccione o no un elemento. La diferencia es que las checkbox están preparadas para múltiples selecciones y son cuadradas, si los quieres importar:

```typescript
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
```

Puedes cambiar el color de ambos elementos con la etiqueta **color** y para recoger el valor que ha seleccionado el usuario se hace con `[(ngModel)]="labelPosition"`

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/qyljmgavjad?ctl=1&embed=1&file=app/checkbox-configurable-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>


### Select box

Sirve para mostrar un cuadro en el que los usuarios pueden seleccionar items de una lista de opciones. Para usarlo importa:

```typescript
import {MatSelectModule} from '@angular/material/select';
```

Para añadir las opciones lo tienes que hacer creando una etiqueta `<mat-option></mat-option>', el uso de ngFor también está permitido por lo que puedes hacer un ngFor de un array para que automáticamente cree todas las opciones.

Si quieres hacer el binding de la opción que ha pulsado el usuario simplemente haz: `[(value)]="selected"`. La variable selected tendrá el valor de la selección del usuario.

Los select boxes se pueden ampliar añadiendo validadores de los formularios, es decir, formControls, para, por ejemplo, hacer que tenga que seleccionar el usuario, un valor sí o si.

Si añades el campo **multiple** en el **mat-form-field** Angular Material creará un select en el cual el usuario podrá seleccionar varios campos a la vez.

```html
<mat-form-field>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>
```

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/kdjlbelxgvk?ctl=1&embed=1&file=app/select-value-binding-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

### Toggler

Estos, personalmente, me gustan más que los botones radio de Angular Material, son unos botones para encender/apagar cosas. Su funcionamiento es sencillo, simplemente los importas con:

```typescript
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
```

Los creas con su etiqueta y le añades un color si quieres. 

```html
<mat-slide-toggle>Slide me!</mat-slide-toggle>
```

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/apxvyaereqk?ctl=1&embed=1&file=app/slide-toggle-configurable-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

<br>

***

## Componentes de navegación y diseño

<img src="https://i.imgur.com/BKHFZHz.png" class="responsive-img" alt="Tabs, checkboxes y radio en Angular material"> 

En esta sección me dejo elementos que he considerado poco interesantes porque añaden estilos y ofrecen poco. Por ejemplo el [toolbar](), el [menú], el [card] el [divider], etc

### Sidebar

El sidebar es la región de la página web en uno de los laterales, normalmente se usa para poner un menú. El problema de esta región es que en dispositivos móviles se tiene que ocultar para que no ocupe espacio de pantalla. Por suerte Angular Material nos da el diseño responsive para estos paneles. Impórtalos así:

```typescript
import {MatSidenavModule} from '@angular/material/sidenav';
```

Por ejemplo el funcionamiento básico sería:

```html
<mat-drawer-container class="example-container">
  <mat-drawer mode="side" opened>Drawer content</mat-drawer>
  <mat-drawer-content>Main content</mat-drawer-content>
</mat-drawer-container>
```
El texto de Main Content es donde tienes que poner el contenido principal y el de Drawer content lo tienes que sustituir por lo que quieras poner en el panel lateral.

Para el diseño de un sidenav responsice te recomiendo que le eches un vistazo al siguiente ejemplo creado por los chicos de Angular:

[Ejemplo de sidenav responsive](https://stackblitz.com/angular/onrlxdodyer?file=app%2Fsidenav-responsive-example.ts)

### Expansion panel

Un panel que al hacer clic se expande mostrando más elementos, muy útil para ofrecer opciones avanzadas al usuario sin comprometer expacio en pantalla. Para importarlo: 

```typescript
import {MatExpansionModule} from '@angular/material/expansion';
```

El elemento `<mat-expansion-panel-header>` sirve para mostrar el texto o lo que queremos mostrar al usuario antes de abrir el panel. Debajo de este elemento simplemente ponemos el contenido que se oculta al principio, pero aparece al hacer clic. Como ves en el ejemplo de a continuación, se rodea todo con el elemento `<mat-accordion`. Se puede deshabilitar un panel dinámicamente así: `[disabled]="isDisabled"`

```html
<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Personal data
      </mat-panel-title>
      <mat-panel-description>
        Type your name and age
      </mat-panel-description>
    </mat-expansion-panel-header>

    <mat-form-field>
      <input matInput placeholder="First name">
    </mat-form-field>

    <mat-form-field>
      <input matInput placeholder="Age">
    </mat-form-field>
  </mat-expansion-panel>
  <mat-expansion-panel (opened)="panelOpenState = true"
                       (closed)="panelOpenState = false">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Self aware panel
      </mat-panel-title>
      <mat-panel-description>
        Currently I am {{panelOpenState ? 'open' : 'closed'}}
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>I'm visible because I am open</p>
  </mat-expansion-panel>
</mat-accordion>
```

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/xvgeddekxdq?ctl=1&embed=1&file=app/expansion-overview-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

### Columnas. Sistema de grid

Si estas buscando una alternativa a Bootstrap, en especial al sistema de columnas, este es tu componente, con este componente puedes renderizar listas, por ejemplo, especificando el tamaño de las columnas y de las filas. Si quieres usarlo importa:

```typescript
import {MatGridListModule} from '@angular/material/grid-list';
```

Un ejemplo sencillo:

```html
<mat-grid-list cols="4" rowHeight="100px">
  <mat-grid-tile
      *ngFor="let tile of tiles"
      [colspan]="tile.cols"
      [rowspan]="tile.rows"
      [style.background]="tile.color">
    {{tile.text}}
  </mat-grid-tile>
</mat-grid-list>
```

```typescript
mport {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-list-dynamic-example',
  templateUrl: 'grid-list-dynamic-example.html',
  styleUrls: ['grid-list-dynamic-example.css'],
})
export class GridListDynamicExample {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
```

Puedes ver aquí, [el ejemplo de columnas en Angular Material](https://stackblitz.com/angular/vjkmnvjjjya?file=app%2Fgrid-list-dynamic-example.ts)

### Stepper

Sirve para mostrar al usuario lo que tiene que hacer en una lista de pasos. Se suele usar por ejemplo en procesos de registros para que,en lugar de mostrar todo de golpe, hacer que el usuario vaya introducciendo sus datos en distintos pasos para que resulte más cómodo. 

Como siempre, para usarlos hay que importar:

```typescript
import {MatStepperModule} from '@angular/material/stepper';
```

Hay dos tipos: `<mat-horizontal-stepper>` y `<mat-vertical-stepper>` uno es para mostrar los pasos en horizontal y el otro para mostrarlos con una disposición vertical. Los steppers ofrecen un parámetro llamado `[linear]` que sirve para decidir si el usuario puede saltar pasos o tiene que ir de uno en uno en orden. Para crear un paso se hace con labels así: Para que el usuario pueda introducir los datos, tenemos que crear un form y le tenemos que meter un sistema de validación para que no pueda avanzar si el usuario no ha hecho lo que necesitamos. Por defecto los pasos son editables, eso quiere decir que el usuario siempre puede volver a un paso anterior a cambiar su respuesta, aunque este comportamiento se puede cambiar.

```html
 <mat-step label="Step 1">
    Content 1
</mat-step>
```
Para verlo mejor te dejo este [ejemplo completo de los steppers ofrecido por Google](https://stackblitz.com/angular/amjgpjxbpak?file=app%2Fstepper-overview-example.ts)

```html
<button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
</button>
<mat-horizontal-stepper [linear]="isLinear" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <input matInput placeholder="Address" formControlName="secondCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    You are now done.
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-horizontal-stepper>
```
<iframe width="100%" height="250px" src="https://stackblitz.com/angular/amjgpjxbpak?ctl=1&embed=1&file=app/stepper-overview-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

### Tabs

Las tabs o pestañas sirven para mostrar más información en la pantalla sin perder espacio, para pasar de una pestaña a otra, el usuario tiene que hacer clic. Para crearlas importa:

```typescript
import {MatTabsModule} from '@angular/material/tabs';
```

Su funcionamiento es sencillo, simplemente creas la tab con su etiqueta y el label y dentro metes el contenido que quieras:

```html
<mat-tab-group>
  <mat-tab label="One">
    <h1>Some tab content</h1>
    <p>...</p>
  </mat-tab>
  <mat-tab label="Two">
    <h1>Some more tab content</h1>
    <p>...</p>
  </mat-tab>
</mat-tab-group>
```

Puedes alinear las pestañas a la izquierda (start), al centro (center) y al final (end) con la propiedad `mat-align-tabs="center"`

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/ekgoaageqbr?ctl=1&embed=1&file=app/tab-group-basic-example.ts&hideExplorer=1&hideNavigation=1"></iframe>

<br>

***

## Popups y notificaciones

### Dialog

Sirve para mostrar una ventana emergente al usuario con información o para que introduzca más datos.

```typescript
import {MatDialogModule} from '@angular/material/dialog';
```

Para usarlo, lo recomendado es crearte otro componente con un html normal (o utilizando otros componentes material design de esta librería) y simplemente lo que tienes que hacer es llamarlo desde un botón por ejemplo:

my-dialog.component.html
```html
<h2 mat-dialog-title>Delete all</h2>
<mat-dialog-content>Are you sure?</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>No</button>
  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
  <button mat-button [mat-dialog-close]="true">Yes</button>
</mat-dialog-actions>

```

```typescript
let dialogRef = dialog.open(UserProfileComponent, {
  height: '400px',
  width: '600px',
});
```

Para pasar datos al dialog lo puedes hacer de esta forma:

```typescript
let dialogRef = dialog.open(YourDialog, {
  data: { name: 'austin' },
});
```

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/koppvkvpmpdn?ctl=1&embed=1&file=app/dialog-overview-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

### Notificaciones

sive para mostrar un pequeño panel que aparece en la pantalla durante unos pequeños instantes mostrando un mensaje, normalmente de notificación tras una acción del usuario. Para importarlos:

```typescript
import {MatSnackBarModule} from '@angular/material/snack-bar';
```

Para usarlo simplemente llama al método para abrir la notificación con el mensaje, de esta manera:

```typescript
let snackBarRef = snackBar.open('Mensaje');
```

<iframe width="100%" height="250px" src="https://stackblitz.com/run?ctl=1&embed=1&file=app/snack-bar-component-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

<br>

***

## Tablas

Las tablas son otro de esos componentes que me encantan de Angular Material, y todo porque añaden la posibilidad de hacer que las columnas sean ordenables. Si quieres usar las tablas importa:

```typescript
import {MatTableModule} from '@angular/material/table';
```

La manera más sencilla de usar una tabla es creando la etiqueta de tabla y pasando un array con los valores, de esta forma:

```html
<table mat-table [dataSource]=”myDataArray”>
  ...
</table>
```
Para que las tablas se optimice, si haces un cambio en el array original, las tablas no se van a modificar, pero afortunadamente esta librería de componentes material design nos da un método para actualizar los valores manualmente: **renderRows()**

Si quieres añadir paginación, añade al final esta etiqueta con el número de páginas que quieres:

```html
 <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
```
Para conseguir la funcionalidad de ordenación, tienes que importar el módulo **MatSortModule**. Hecho esto lo que tienes que hacer es añadir el parámetro de ordenación en la cabecera de las tablas, de esta forma:

```html
<ng-container matColumnDef="position">
  <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
  <td mat-cell *matCellDef="let element"> {{element.position}} </td>
</ng-container>
```

Lo que hace Angular por defecto es asumir que el nombre que le has puesto a la columna coincide con el nombre del campo que la tabla muestra. También se puede añadir un input al comienzo de la tabla para filtrar por nombre, así que te voy a dejar un par de ejemplos para que veas como funciona. 

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/rxayjbvbdbv?ctl=1&embed=1&file=app/table-basic-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/mdxrrgqdrkn?ctl=1&embed=1&file=app/table-filtering-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

<iframe width="100%" height="250px" src="https://stackblitz.com/angular/njrkrvllrlv?ctl=1&embed=1&file=app/table-sorting-example.ts&hideExplorer=1&hideNavigation=1&view=preview"></iframe>

## Conclusiones

Espero que te haya gustado este artículo, y sobre todo, este tutorial de Angular Material. Como has podido ver es una librería muy completa que hace que muchas de las cosas no las tengas que montar tú y ya vengan hechas. Si por ejemplo quieres montar una pequeña aplicación, esta librería es ideal para eso. Con esta librería no hace falta que uses Bootstrap, ya te da todos los estilos necesarios para sacar una página decente. Yo soy de los que opinan que es mucho mejor que cada uno se monte su propio set de componentes listos para sus necesidades, ya que tienes el control total de todo lo que ocurre con los componentes.

Este artículo no trata de ser una guía en profundidad de todo lo que puede ofrecer esta librería material design, pero sirve de ayuda para todos aquellos que quieran saber cómo usar Angular Material. Te animo a que entres en la documentación oficial para que veas todo lo que se puede hacer.