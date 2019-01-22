const gulp = require('gulp'),
      gutil = require('gulp-util'),
      compass = require('gulp-compass');


gulp.task('compass', () => {
  gulp.src("sass/style.scss")
    .pipe(compass({
      css: 'css/',
      sass: 'sass/',
      image: 'images/',
      style: 'compressed'
    })
        .on('error', gutil.log))
      .pipe(gulp.dest('css/'))
});
