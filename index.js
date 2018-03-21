var mongoose = require('mongoose');
var People = require('./models/people.model');
var Card = require('./models/card.model');
var LangVars = require('./models/langVars.model');
var Dropdown = require('./models/dropdown.model');
var Article = require('./models/article.model');


var Schema = mongoose.Schema;

mongoose.Promise = require('q').Promise;

var options = {
    useMongoClient: true
};

var mongodbUri = 'mongodb://scihubuser:scihub2017@ds117965.mlab.com:17965/heroku_ttl0frm4';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', function(err) {
  console.log('noup', err)
});

conn.once('open', function() {
  console.log('horaay... I`m connected')
});


var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
var port = process.env.PORT || 8083;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {

    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
