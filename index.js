var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var cors = require('cors');
var passport = require('passport');

var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/ubeat';
mongoose.connect(mongoUri);

var authentication = require('./middleware/authentication');
var login = require('./routes/login');
var search = require('./routes/search');
var signup = require('./routes/signup');
var status = require('./routes/status');
var user = require('./routes/user');

var app = express();
var corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true
};

var tokenSecret = 'UBEAT_TOKEN_SECRET' || process.env.TOKEN_SECRET;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('jwtTokenSecret', tokenSecret);

require('./middleware/passport')(passport, app);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'ubeat_session_secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(cors(corsOptions));

app.get('/status', status.getStatus);
app.get('/login', login.showLoginPage);
app.post('/login', passport.authenticate('local-login'), login.getToken);
app.get('/logout', login.logout);

app.get('/signup', signup.showSignupPage);
app.post('/signup', passport.authenticate('local-signup'), login.getToken);
app.get('/welcome', signup.welcome);

app.get('/token', login.getToken);
app.get('/tokenInfo', authentication.isAuthenticated, login.getToken);

// Secure API

// TODO vseguin : add a way to get all genres
app.get('/search', authentication.isAuthenticated, search.search);
app.get('/search/actors', authentication.isAuthenticated, search.searchActor);
app.get('/search/movies', authentication.isAuthenticated, search.searchMovie);
app.get('/search/tvshowepisode', authentication.isAuthenticated, search.searchTvShowEpisode);
app.get('/search/tvshowseason', authentication.isAuthenticated, search.searchTvShowSeason);
app.get('/search/users', authentication.isAuthenticated, user.findByName);

app.get('/users', authentication.isAuthenticated, user.allUsers);
app.get('/users/:id', authentication.isAuthenticated, user.findById);

app.post('/follow', authentication.isAuthenticated, user.follow);
app.delete('/follow/:id', authentication.isAuthenticated, user.unfollow);

var port = process.env.PORT || 3000;
app.listen(port);
