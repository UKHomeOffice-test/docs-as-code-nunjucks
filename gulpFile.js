const gulp = require('gulp')
const minify = require('gulp-minify')

var sass = require('gulp-sass')(require('sass'));

const compileStyles = () => {
    return gulp.src([
        '_includes/*.scss'
    ])
        .pipe(sass())
        .pipe(gulp.dest('assets/'))
        .on('error', (err) => {
            console.log(err)
            process.exit(1)
        })
}
const minifyjs = () => {
    return gulp.src(['node_modules/govuk-frontend/govuk/all.js'])
        .pipe(minify())
        .pipe(gulp.dest('_includes/'));
}
const copyAssets = () => {
    return gulp.src([
        '_includes/all-min.js',   
        'node_modules/govuk-frontend/govuk/assets/*/*'
    ])
        .pipe(gulp.dest('assets/'))
}

gulp.task('minifyjs', gulp.series(minifyjs))
gulp.task('build', gulp.series(copyAssets, compileStyles))