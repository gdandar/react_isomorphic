require('node-jsx').install({
    harmony: true,
    extension: '.jsx'
});

var React = require('react'),
    App = React.createFactory(require('../public/javascript/components/app'));

var express = require('express');
var path = require('path');

var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('./public'));

app.get('/', function(req, res) {
    var markup = React.renderToString(App());
    res.render('index', {markup: markup});
});

var server = app.listen(3000, function() {
    console.log('Server started...');
});
