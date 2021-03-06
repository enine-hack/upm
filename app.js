require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');


const session       = require('express-session');
const MongoStore = require('connect-mongo')(session);

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// ADD SESSION SETTINGS HERE:
app.use(
  session({
    secret: "some secret goes here",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      // ttl => time to live
      ttl: 60 * 60 * 24, // 60sec * 60min * 24h => 1 day
    }),
  })
);



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// ADD CORS SETTINGS HERE TO ALLOW CROSS-ORIGIN INTERACTION:
const cors = require('cors');
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// Routes middleware
app.use('/api', require('./routes/auth-routes'));
app.use('/api', require('./routes/profil-routes'));
app.use('/api', require('./routes/allbrands-routes'));
app.use('/api', require('./routes/favbrands-routes'));
app.use('/api', require('./routes/business-routes'));
app.use('/api', require('./routes/newsletters-routes'))

// Middleware error
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);
  res.json({message: err.message})
});

const index = require('./routes/index');
app.use('/', index);

// For any other routes: serve client/build/index.html SPA
app.use((req, res, next) => {
  res.sendFile(`${__dirname}/client/build/index.html`, err => {
    if (err) next(err)
  })
});

module.exports = app;
