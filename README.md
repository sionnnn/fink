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

>modular js using es6/esnext pattern [airbnb guidelines](https://github.com/airbnb/javascript)

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

##HTML

>basic boilerplate included

```
./public/index.html
```