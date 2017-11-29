'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var swig = require('swig');
var path = require('path');

var userModel = require('./models/users')
var user_controller = require('./controllers/user_controller');
user_controller.set_socket(io)

app.use(express.static(path.join(__dirname, '/public')));

app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongo_uri = process.env.MONGO_URI || 'mongodb://localhost/leaderboard';
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useMongoClient: true });

app.post('/', user_controller.submit_score);
app.get('/', (req, res) => {
  user_controller.get_leaderboard().then(data => {
    data = data.sort(function(a, b){
      return b.score - a.score;
    });
    res.render('index', { data });
  })
});



if(!module.parent) {
  server.timeout = 0;

  var port = process.env.PORT || 3000;
  server.listen(port);

  server.on('listening', () => {
    console.log('[EXPRS]', 'Server is running on', port);
  });

  server.on('error', (err) => {
    console.log('[EXPRS]', 'Got Error:', err.code);
  });
}
