/*globals process, __dirname*/
var express     = require('express'),
    connect     = require('connect-assets'),
    connectJade = require('connect-assets-jade'),
    http        = require('http'),
    mongoose    = require('mongoose'),
    passport    = require('passport'),
    path        = require('path'),
    config      = require('./config'),
    middleware  = require('./middleware'),
    routes      = require('./routes'),
    strategy    = require('./oauthStrategy');

var app = express();

connect.jsCompilers.jade = connectJade();

app.configure(function(){
  app.set('port', config.port);
  app.set('views', __dirname + '/views');
  app.set('view options', { layout: false });
  app.set('view engine', 'jade');
  app.use(connect());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'icanhazsekretz' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(middleware.isPublic);
  app.use(middleware.isJSON);
  app.use(middleware.csrf());
  app.use(middleware.authentication(passport));
  app.use(middleware.facebookProxy);
  // app.param('event_id', middleware.events);
  // app.param('team_id', middleware.teams);
  app.use(function(req, res, next){
    res.timeoutJson = function(data, timeout){
      timeout = timeout || 500;
      console.log(timeout);
      setTimeout(function(){ console.log('foo'); res.json(data); },timeout);
    };
    next();
  });
  app.use(middleware.locals);

  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.use(middleware.errorHandler);
// if (app.get('env') === 'development') app.use(express.errorHandler());

routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('sportsherd server listening on port '+app.get('port'));
});