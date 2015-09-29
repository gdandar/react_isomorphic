var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var jsRoot = require('path').join(__dirname, 'public', 'javascript');

gulp.task('webpack', function (callback) {
    webpack({
        context: jsRoot,
        entry: 'app',
        output: {
            path: jsRoot,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx$/,
                    loader: 'jsx-loader?harmony'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            root: [jsRoot],
            modulesDirectories: ['node_modules']
        }
    }, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({}));
        callback();
    });
});

gulp.task('default',['webpack']);
