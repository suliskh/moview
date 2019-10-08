import { ThunkAction } from 'redux-thunk';

/*****************************************************
 * ACTIONS TYPES
 *****************************************************/
export type Movie = Record<any, any>;
export interface Movies {
	isLoading: boolean;
	data: Array<Movie>;
}

/*****************************************************
 * ACTIONS TYPES
 *****************************************************/
export const GET_MOVIES_REQUESTED = 'GET_MOVIES_REQUESTED';
export const GET_MOVIES_RECEIVED = 'GET_MOVIES_RECEIVED';
export const GET_MOVIE_REQUESTED = 'GET_MOVIE_REQUESTED';
export const GET_MOVIE_RECEIVED = 'GET_MOVIE_RECEIVED';

export interface RequestMoviesAction {
	type: typeof GET_MOVIES_REQUESTED;
}

export interface ReceiveMoviesAction {
	type: typeof GET_MOVIES_RECEIVED;
	movies: Array<Movie>;
}

export interface RequestMovieAction {
	type: typeof GET_MOVIE_REQUESTED;
}

export interface ReceiveMovieAction {
	type: typeof GET_MOVIE_RECEIVED;
	movie: Movie;
}

export type MovieActions =
	| RequestMoviesAction
	| ReceiveMoviesAction
	| RequestMovieAction
	| ReceiveMovieAction;

export type ThunkResult<R> = ThunkAction<R, undefined, undefined, MovieActions>;
