import { Dispatch } from 'redux';
import * as authServices from '../../services/dummyAuth';
import * as types from './types';
import history from '../../routes/history';

export function signUp(username: string, password: string) {
	return (dispatch: Dispatch<types.AuthActions>): Promise<any> => {
		dispatch({ type: types.SIGN_UP_REQUESTED });

		return authServices
			.dummySignUp(username, password)
			.then(isSuccess => {
				dispatch({
					type: types.SIGN_UP_SUCCESS,
				});
			})
			.catch((message: string) => {
				dispatch({
					type: types.SIGN_UP_FAILED,
					message,
				});
			});
	};
}

export function login(username: string, password: string) {
	return (dispatch: Dispatch<types.AuthActions>): Promise<any> => {
		dispatch({ type: types.LOGIN_REQUESTED });

		return authServices
			.dummyLogin(username, password)
			.then(isSuccess => {
				dispatch({
					type: types.LOGIN_SUCCESS,
					username: username,
				});

				history.push('/');
			})
			.catch((message: string) => {
				dispatch({
					type: types.LOGIN_FAILED,
					message,
				});
			});
	};
}

export function logout() {
	return (dispatch: Dispatch<types.AuthActions>): void => {
		authServices.dummyLogout();

		dispatch({ type: types.LOGOUT_SUCCESS });

		history.push('/login')
	};
}
