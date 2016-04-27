var input = './src/infiniteScrollWebApp/sass/*.scss';
var output = './src/infiniteScrollWebApp/css';
var autoprefixer = require('gulp-autoprefixer');

//sass options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

//compile sass for the infinite scroll app
gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    //autoprefixer for automatic browser prefixes...
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});

//watch for changes in the sass folder
gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    // log a message in the console just in case...
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

//gulp default task
gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);
