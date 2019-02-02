import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments'

class Header extends Component {
	// Renders the appropriate Header
	renderContent() {
		// Switch on user sitatuation
		switch (this.props.auth) {
			// We don't know yet the user situation
			case null:
				return;
			// User is logged out
			case false:
				return (
					<li>
						<a href="/auth/google">Loggin with Google</a>
					</li>
				);
			// User is logged in
			default:
				return [
					<li key="1"><Payments /></li>,
					<li key="2"><a href="/api/logout">Logout</a></li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo"
					>
						Emaily
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return {
		auth
	};
}

export default connect(mapStateToProps)(Header);
