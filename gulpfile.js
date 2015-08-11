var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var pkg = require('./package.json');
var sassdoc = require('sassdoc');

var outputPath = 'docs/styleguide',
    source = ['lib/components/**/*.scss','src/scss/**/*.scss',
              '!lib/components/susy/',
              '!lib/components/susy/**',
              'public/assets/icons/icons.data.svg.css'],
    styleTitle = pkg.name + " " + pkg.version + ' styleguide';


gulp.task('styleguide:generate', function() {
  return gulp.src(source)
    .pipe(styleguide.generate({
        title: styleTitle,
        server: true,
        extraHead: [
            '<script src="assets/js/app.js"></script>'
        ],
        rootPath: outputPath,
        overviewPath: 'docs/overview.md'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src(source)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('watch', ['styleguide'], function() {
  gulp.watch([source], ['styleguide']);
});

gulp.task('sassdoc', function () {
  return gulp.src(source)
  .pipe(sassdoc
    (
      {
        dest: './docs/sassdoc'
      }   
    )
  );
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles', 'sassdoc']);