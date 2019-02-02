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

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		// After passport authenticate the user thanks to the callback code, we redirect the user to the surveys
		(req, res) => {
			res.redirect('/surveys');
		}
	);

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

	app.get(
		'/auth/github/callback',
		passport.authenticate('github'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	// Logout
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	// Route to see if user is logged in
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
