var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var pkg = require('./package.json');

var outputPath = 'docs/styleguide',
    source = ['src/scss/**/*.scss','!src/scss/modules/susy/','!src/scss/modules/susy/**'],
    styleTitle = pkg.name + " " + pkg.version + ' styleguide';

gulp.task('styleguide:generate', function() {
  return gulp.src(source)
    .pipe(styleguide.generate({
        title: styleTitle,
        server: true,
        rootPath: outputPath,
        overviewPath: 'docs/overview.md'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('src/scss/site.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('watch', ['styleguide'], function() {
  gulp.watch([source], ['styleguide']);
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);