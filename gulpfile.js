var gulp          = require('gulp'),
    browserify    = require('gulp-browserify'),
    rename        = require('gulp-rename'),
    jshint        = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    footer        = require('gulp-footer'),
    fs            = require('fs');

gulp.task('browserifyKiwappPDF', function(){
    fs.readFile('dev/KiwappPDF/version.js', 'utf8', function (err,data) {
        var version = data.split('\'')[1].replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
      gulp.src('./dev/KiwappPDF/KiwappPDF.js')
        .pipe(browserify())
        .pipe(rename('KiwappPDF.js'))
        .pipe(footer(';'))
        .pipe(gulp.dest('.'));
    });

});

gulp.task('checkKiwappPDF', function () {
  return gulp.src(['./dev/KiwappPDF/**/*.js', './dev/utils/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('default', function(){
    gulp.run('checkKiwappPDF');
    gulp.run('browserifyKiwappPDF');
});


gulp.task('watch', function(){
    gulp.watch( './dev/**/*.js',function(evt){
        console.log(evt.path, 'changed');
        gulp.run('default');
    });
});