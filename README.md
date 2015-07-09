#fink
>proposed development boilerplate / standards implementation

###usage

```shell
npm install
```

```shell
grunt
```

##js

###compiler

>modular js using es6/esnext pattern [airbnb styleguide](https://github.com/airbnb/javascript)

compile with either [babeljs](https://babeljs.io/) (greater ES6 support) or [typescript](http://www.typescriptlang.org/) (strongly typed, angular2.0) currently only compiles to commonJS

set in Gruntfile.js
```js
data = {
    es6:'babel'
}
```

further info [es compatibility tables](http://kangax.github.io/compat-table/es5/)

###code checker/linter

grunt [JSCS](http://jscs.info/) and [ESLint](http://eslint.org/)

ide plugins available for sublime/visual studio

###docs

[JSDoc](http://usejsdoc.org/)

####tbd
>
* unit tests
* analytics
* frameworks jQuery / ionic / famous / angular

##CSS
>styleguides [guardian](https://github.com/guardian/frontend/wiki/CSS-guidelines) / [airbnb](https://github.com/airbnb/css)

* SCSS 

* BEM notation

* [normalize.css](http://necolas.github.io/normalize.css/)

* [animate.css](https://daneden.github.io/animate.css/)

####tbd
>
* frameworks (materialize.css)
* grids
* modules
* mobile

##HTML

>basic boilerplate included

```
./public/index.html
```

####tbd
>
* shims
* shivs
* fallbacks
* boilerplates
* guidelines
* markup