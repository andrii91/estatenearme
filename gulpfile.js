const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const webp = require('gulp-webp');
const uncss = require('gulp-uncss');
const webserver = require('gulp-webserver');
 
gulp.task('serve', function() {
  gulp.src('dist')
   .pipe(webserver({
    livereload: true,
    open: true,
      fallback: 'index.html'
    }));

});

gulp.task('sass', async function () {
    gulp.src('src/sass/main.scss')
        .pipe(sass())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(rename('app.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));

});

gulp.task('js', async function() {
    gulp.src([
            'src/js/component.js'
        ])
        .pipe(concat('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js_v', async function() {
    gulp.src([
            'src/js/vendor/jquery-3.7.1.min.js',
            'src/js/vendor/slick.min.js',
            'src/js/vendor/jquery.fancybox.min.js',
            'src/js/vendor/apexcharts.min.js',
            'src/js/vendor/leaflet.js',
            'src/js/vendor/leaflet.markercluster.js',
            
        ])
        .pipe(concat('vendor.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('images', async function(){
    return gulp.src('src/images/**/*.*')
        .pipe(webp())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', async function(){
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
});


gulp.task('pages', async function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('uncss', async function () {
    return gulp.src('dist/css/app.css')
        .pipe(uncss({
            html: ['dist/handf.html']
        }))
        .pipe(gulp.dest('dist/css/head/'));
});



gulp.task('default', async function() {
    //gulp.start('pages', 'js', 'js_v', 'sass', 'images', 'images_css', 'webserver');
    gulp.watch('src/*.html', gulp.parallel('pages') );
    gulp.watch('src/js/*.js', gulp.parallel('js') );
    gulp.watch('src/js/vendor/*.js', gulp.parallel('js_v') );
    gulp.watch('src/sass/**/*.scss', gulp.parallel('sass') );
    gulp.watch('src/images/**/*.*',  gulp.parallel('images'));
});



