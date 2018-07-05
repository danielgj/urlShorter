var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('testAPI', function(done) {
  var error = false;
  gulp.
    src('./tests/API.test.js').
    pipe(mocha({reporter: 'list', exit: true})).

    on('error', function() {
      console.log('Tests failed!');
      error = true;
    }).
    on('end', function() {
      if (!error) {
        console.log('Tests succeeded!');
      }
    });
    done();
});

