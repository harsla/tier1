const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

gulp.task('compress-img', () =>
  gulp.src('img/**')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
);
gulp.task('minify-css', function() {
  return gulp.src(['css/**/*.css'])
    .pipe(concatCss("bundle.css"))
    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['minify-css', 'compress-img']);
