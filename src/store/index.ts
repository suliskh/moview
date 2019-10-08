import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // tslint:disable-line:no-implicit-dependencies
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Movie, MovieActions } from './movie/types';
import { movies, selectedMovie } from './movie/reducers';
import { AuthState, AuthActions } from './auth/types';
import { auth } from './auth/reducers';

export type Actions = MovieActions & AuthActions;

export interface RootState {
	movies: {
		isLoading: boolean;
		data: Array<Movie>;
	};
	selectedMovie: {
		isLoading: boolean;
		data: Movie;
	};
	auth: AuthState;
}

const rootReducer = combineReducers<RootState>({
	movies,
	selectedMovie,
	auth,
});

export default function configureStore() {
	return createStore(
		rootReducer,
		composeWithDevTools(
			applyMiddleware(thunk as ThunkMiddleware<RootState, Actions>)
		)
	);
}
