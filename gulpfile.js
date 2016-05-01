var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var input = './src/dashboardWebApp/sass/*.scss';
var output = './src/dashboardWebApp/css';

//sass options
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

//compile sass for the dashboard app
gulp.task('sass', function() {
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
gulp.task('default', ['sass', 'watch' /*, possible other tasks... */ ]);
