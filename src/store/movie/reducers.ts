import {
	Movie,
	Movies,
	MovieActions,
	GET_MOVIES_REQUESTED,
	GET_MOVIES_RECEIVED,
	GET_MOVIE_REQUESTED,
	GET_MOVIE_RECEIVED,
} from './types';

export function movies(
	state: Movies = { isLoading: false, data: [] },
	action: MovieActions
): Movies {
	switch (action.type) {
		case GET_MOVIES_REQUESTED:
			return { ...state, isLoading: true };
		case GET_MOVIES_RECEIVED:
			return { isLoading: false, data: action.movies };
		default:
			return state;
	}
}

export function selectedMovie(
	state: any = { isLoading: false, data: {} },
	action: MovieActions
): { isLoading: boolean; data: Movie } {
	switch (action.type) {
		case GET_MOVIE_REQUESTED:
			return { ...state, isLoading: true };
		case GET_MOVIE_RECEIVED:
			console.log('REDUCER', action.movie);
			return { isLoading: false, data: action.movie };
		default:
			return state;
	}
}
