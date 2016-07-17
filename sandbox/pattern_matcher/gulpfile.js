var gulp = require('gulp');
var mocha = require('gulp-mocha');
var exec = require('child_process').exec;
 
gulp.task('test', function () {
	return gulp.src('test/app_test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it 
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', function (cb) {
	exec('DEBUG=app:debug,app:error node app.js', function (err, stdout, stderr) {
    // console.log(stdout);
    process.stdout.write(stdout);
    process.stdout.write(stderr);
    // console.log(stderr);
    cb(err);
  });
});