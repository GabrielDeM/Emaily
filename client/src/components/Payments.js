import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				// Header name of the form
				name="Emaily"
				// Description of what the user is paying for
				description="$5 for 5 email credits"
				// in cents
				amount={500}
				//
				token={token => console.log(token)}
				// Publishable Key
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default Payments;
