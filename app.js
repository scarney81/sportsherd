/*globals process, __dirname*/
var express     = require('express'),
    connect     = require('connect-assets'),
    connectJade = require('connect-assets-jade'),
    http        = require('http'),
    path        = require('path'),
    middleware  = require('./middleware'),
    routes      = require('./routes');

var port  = process.env.PORT || 3000;
var app = express();

connect.jsCompilers.jade = connectJade();

app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });
app.set('view engine', 'jade');
app.use(connect());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(middleware.isJSON);
app.param('event_id', middleware.events);
app.param('team_id', middleware.teams);

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') app.use(express.errorHandler());

routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('sportsherd server listening on port '+app.get('port'));
});