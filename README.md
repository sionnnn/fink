#fink
>proposed development boilerplate / standards implementation

###usage

```shell
npm install
```

```shell
grunt
```

##grunt

###included dependencies

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

###TBD - grunt

#####images
* [grunt-webp](https://github.com/somerandomdude/grunt-webp)

#####responsive images
* [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images)
* [grunt-clowncar](https://www.npmjs.com/package/grunt-clowncar)

#####image min
* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
* [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin)

#####css
* [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)
* [grunt-uncss](https://github.com/addyosmani/grunt-uncss)
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
* [grunt-legacssy](https://github.com/robinpokorny/grunt-legacssy)

#####js
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

#####sprites icons fonts
* [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)
* [grunticon](https://github.com/filamentgroup/grunticon)
* [grunt-webfont](https://github.com/sapegin/grunt-webfont)

#####assets
* [grunt-asset-cachebuster](https://www.npmjs.com/package/grunt-asset-cachebuster)
* [grunt-w3c-validation](https://www.npmjs.com/package/grunt-w3c-validation)

#####ops performance
* [grunt-contrib-compress](https://github.com/gruntjs/grunt-contrib-compress)
* [grunt-pagespeed](https://www.npmjs.com/package/grunt-pagespeed)
* [grunt-wpt](https://www.npmjs.com/package/grunt-wpt)
* [grunt-phantomas](https://www.npmjs.com/package/grunt-phantomas)
* [grunt-vulcanize](https://github.com/Polymer/grunt-vulcanize)
* [grunt-inline-css](https://github.com/jgallen23/grunt-inline-css)

#####tasks
* [grunt-newer](https://www.npmjs.com/package/grunt-newer)

##js

###compiler

>modular js using es6/esnext pattern [airbnb styleguide](https://github.com/airbnb/javascript)

compile with either [babeljs](https://babeljs.io/) (greater ES6 support) or [typescript](http://www.typescriptlang.org/) (strongly typed, angular2.0) currently only compiles to commonJS, [jQuery](https://jquery.com/) is imported via npm for babel, src/js/lib/jquery.d.ts for typescript

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

####TBD - JS
>
* [unit tests](http://stackoverflow.com/questions/300855/javascript-unit-test-tools-for-tdd)
* analytics - [tag manager](http://www.google.co.uk/tagmanager/)
* frameworks [ionic](http://ionicframework.com/) / [famous](http://famous.org/) / [angular](https://angularjs.org) / [angular 2](https://angular.io/)
* mobile [hammer](http://hammerjs.github.io/)

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

####TBD - CSS
>
* frameworks [materialize.css](http://materializecss.com/) / [inuit.css](https://github.com/inuitcss) / [furtive](http://furtive.co/)
* grids - separate grid system?
* mobile [sculpt](https://www.heartinternet.uk/sculpt?__ja=tsid:60927|cgn:6157437) / [framework7](http://www.idangero.us/framework7/#.VaO53_lVhuB) [ionic](http://ionicframework.com/) / [clank](http://getclank.com/)
* lint validation CSS lint/pretty etc [SASS-beautify](https://github.com/badsyntax/SassBeautify) / [SASS-lint](https://github.com/brigade/scss-lint)
* CSS regression testing - [BackstopJS](https://github.com/garris/BackstopJS) / [PhantomCSS](https://github.com/Huddle/PhantomCSS) - [info](https://www.phase2technology.com/css-testing-with-phantomcss-phantomjs-casperjs-and-grunt/)

##HTML

>basic boilerplate included

```
./public/index.html
```

####TBD - HTML
>
* templating ie stencil
* icons / fonts (see grunt dependancies tbd)
* shims/shivs/fallbacks/boilerplates [polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
* markup guidelines - accessibility wai-aria [aria design patterns](http://www.creativebloq.com/html5/5-html5-and-aria-design-patterns-7133753) 

##trello

*set up trello board for module dev???