import { FETCH_USER } from './../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			// if the payload = '' -> it means that the user isn't logged in
			// payload = '' returns false
			return action.payload || false;
		default:
			return state;
	}
}
