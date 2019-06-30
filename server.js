
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var createError = require('http-errors');
var logger = require('morgan');

var teamsRouter = require('./controllers/teams');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;        

// // ROUTES FOR OUR API
// // =============================================================================
// var router = express.Router();


// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

app.use('/v1/teams', teamsRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(port);
console.log('Magic happens on port ' + port);