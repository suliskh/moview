import { Dispatch } from 'redux';
import * as productServices from '../../services/movie';
import * as types from './types';

export function getMovies() {
	return (dispatch: Dispatch<types.MovieActions>): Promise<void> => {
		dispatch({ type: types.GET_MOVIES_REQUESTED });

		return productServices.getMovies().then((data: Array<types.Movie>) => {
			dispatch({
				type: types.GET_MOVIES_RECEIVED,
				movies: data,
			});
		});
	};
}

export function getMovie(movieId: string) {
	return (dispatch: Dispatch<types.MovieActions>): Promise<void> => {
		dispatch({ type: types.GET_MOVIE_REQUESTED });

		return productServices.getMovieById(movieId).then((data: types.Movie) => {
			console.log('ACTIONS:', data);
			dispatch({
				type: types.GET_MOVIE_RECEIVED,
				movie: data,
			});
		});
	};
}
