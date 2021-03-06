const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// Give the user a cookie after sign in
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Check the user's cookie
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// Google Strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			// This callback URL needs to be absolute, so we can add keys on dev and prod files
			// But we'll say to google to enable the Heroku Proxy
			callbackURL: '/auth/google/callback',
			// Say to Google to enable proxy
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				// we already have a record with the given profile id
				return done(null, existingUser);
			}

			// we don't have a user record with this ID, make a new record
			// Creation of a new Model Instance of a user on the users Collection
			// The 'save()' function make that the new User will be save on our DB
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);

// GitHub Strategy
passport.use(
	new GitHubStrategy(
		{
			clientID: keys.githubClientID,
			clientSecret: keys.githubClientSecret,
			callbackURL: '/auth/github/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ githubId: profile.id });

			if (existingUser) {
				done(null, existingUser);
			} else {
				const user = await new User({ githubId: profile.id }).save();

				done(null, user);
			}
		}
	)
);
