#fink
>proposed development boilerplate / standards implementation

###usage

```shell
npm install
```

```shell
grunt
```

###taskrunner
>grunt

####included dependencies

```js
"devDependencies": {
    "grunt": "~0.4.1",
    "load-grunt-config": "^0.17.1",
    "grunt-contrib-copy": "^0.8.0",
        
    "grunt-contrib-watch": "~0.3.1",
    "grunt-contrib-connect": "~0.2.0",

    "grunt-jsdoc":"~0.6.7",

    "grunt-browserify": "^3.8.0",
    "grunt-babel": "^5.0.1",
    "grunt-typescript": "~0.6.2",
    "babelify": "^6.1.0",
    "tsify": "^0.11.2",

    "grunt-jscs":"~1.8.0",
    "grunt-eslint":"~16.0.0",

    "grunt-sass": "~1.0.0",
    "grunt-styleguide": "~0.2.17"
}
```

####tbd
* autoprefixer
* uglify
* imagemin
* legacssy
* newer
* webfont
* combine-media-queries
* grunticon
* w3c-validation
* asset-cachebuster

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
```
./docs/jsdoc
```

guide [JSDoc](http://usejsdoc.org/)

####tbd
>
* unit tests
* analytics
* frameworks jQuery / ionic / famous / angular

##CSS
>styleguides [guardian](https://github.com/guardian/frontend/wiki/CSS-guidelines) / [airbnb](https://github.com/airbnb/css)

* SCSS SASS
* BEM notation
* [normalize.css](http://necolas.github.io/normalize.css/)
* [animate.css](https://daneden.github.io/animate.css/)

###docs
```
./docs/styleguide
```

guide [KSS](https://www.npmjs.com/package/grunt-kss)

####tbd
>
* frameworks (materialize.css)
* grids
* modules
* mobile
* lint validation

##HTML

>basic boilerplate included

```
./public/index.html
```

####tbd
>
* templates stencil
* icons
* fonts
* shims
* shivs
* fallbacks
* boilerplates
* guidelines
* markup