import { ThunkAction } from 'redux-thunk';

/*****************************************************
 * ACTIONS TYPES
 *****************************************************/
export interface User {
	username: string;
	password: string;
}
export type registeredUsers = Array<User>;
export interface AuthState {
	username: string;
	isLoading: boolean;
	isSignUpSuccess: boolean;
	isSignUpFailed: boolean;
	isLoginSuccess: boolean;
	isLoginFailed: boolean;
	message: string;
}

/*****************************************************
 * ACTIONS TYPES
 *****************************************************/
export const SIGN_UP_REQUESTED = 'SIGN_UP_REQUESTED';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface RequestSignUpAction {
	type: typeof SIGN_UP_REQUESTED;
}

export interface SuccessSignUpAction {
	type: typeof SIGN_UP_SUCCESS;
}

export interface FailedSignUpAction {
	type: typeof SIGN_UP_FAILED;
	message: string;
}

export interface RequestLoginAction {
	type: typeof LOGIN_REQUESTED;
}

export interface SuccessLoginAction {
	type: typeof LOGIN_SUCCESS;
	username: string;
}

export interface FailedLoginAction {
	type: typeof LOGIN_FAILED;
	message: string;
}

export interface SuccessLogoutAction {
	type: typeof LOGOUT_SUCCESS;
}

export type AuthActions =
	| RequestSignUpAction
	| SuccessSignUpAction
	| FailedSignUpAction
	| RequestLoginAction
	| SuccessLoginAction
	| FailedLoginAction
	| SuccessLogoutAction;

export type ThunkResult<R> = ThunkAction<R, undefined, undefined, AuthActions>;
