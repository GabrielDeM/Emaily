const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// The User.js files, wich contain our DB Model, needs to be load before another file calls to our Collection
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Tells the server we want to use cookies
app.use(
	cookieSession({
		// How long the cookie can be used before expiring
		// There: 30 days
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// Encryption key
		keys: [keys.cookieKey]
	})
);
// Tells passport he needs to use cookie to authentificate users
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
