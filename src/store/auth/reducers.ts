import {
	AuthState,
	AuthActions,
	SIGN_UP_REQUESTED,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILED,
	LOGIN_REQUESTED,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
} from './types';

export function auth(
	state: AuthState = {
		username: '',
		isLoading: false,
		isSignUpSuccess: false,
		isSignUpFailed: false,
		isLoginSuccess: false,
		isLoginFailed: false,
		message: '',
	},
	action: AuthActions
): AuthState {
	switch (action.type) {
		case SIGN_UP_REQUESTED:
			return { ...state, isLoading: true };
		case SIGN_UP_SUCCESS:
			return {
				...state,
				isLoading: false,
				isSignUpSuccess: true,
				isSignUpFailed: false,
			};
		case SIGN_UP_FAILED:
			return {
				...state,
				isSignUpFailed: true,
				isSignUpSuccess: false,
				isLoading: false,
				message: action.message,
			};
		case LOGIN_REQUESTED:
			return { ...state, isLoading: true };
		case LOGIN_SUCCESS:
			return {
				...state,
				username: action.username,
				isLoading: false,
				isLoginSuccess: true,
				isLoginFailed: false,
			};
		case LOGIN_FAILED:
			return {
				...state,
				isLoginFailed: true,
				isLoginSuccess: false,
				isLoading: false,
				message: action.message,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLoginSuccess: false,
				username: '',
				message: '',
			};
		default:
			return state;
	}
}
