var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
var symlink = require('gulp-symlink');
var node;

var paths = {
    server: ['index.js', './models/**/*.js', './routes/**/*.js']
};

gulp.task('server', function () {
    if (node) {
        node.kill();
    }
    node = spawn('node', paths.server, {stdio: 'inherit'});
    node.on('close', function (code) {
        if (code === 8) {
            gutil.log('Error detected, waiting for changes...');
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(paths.server, ['server']);
});

gulp.task('default', function () {
    runSequence('server', 'watch');
});

process.on('exit', function () {
    if (node) {
        node.kill();
    }
});
