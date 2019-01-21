const passport = require('passport');

module.exports = app => {
	/*
	 *
	 * Google Authentification
	 *
	 */
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	/*
	 *
	 * Github Authentification
	 *
	 */
	app.get(
		'/auth/github',
		passport.authenticate('github', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/github/callback', passport.authenticate('github'));

	// Logout
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	// Route to see if user is logged in
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
