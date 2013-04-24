
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , index = require('./routes/index')
  , youtube = require('youtube-feeds')
  , http = require('http')
  , path = require('path');

var key = 'AI39si53WZzu2rcRlPovNdLqOTvH6VAsCH6P6JftorlQlKKMCrLfJtABMIFth3TUXEPQTxmqZQe6f6AUmQNB6wkG6njcNU7GlA';

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/new', index.newLocation);
app.post('/new', index.create);
app.post('/newCategory', index.newCategory);
app.get('/loc/:location', index.checkin);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
