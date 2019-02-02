module.exports = {
	// Google auth
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	// GitHub auth
	githubClientID: process.env.GITHUB_CLIENT_ID,
	githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
	// Mango
	mongoURI: process.env.MANGO_URI,
	// Cookie
	cookieKey: process.env.COOKIE_KEY,
	// Stripe Keys
	stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
