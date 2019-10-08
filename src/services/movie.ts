import { axios, API_KEY } from './config';

export function getMovies(): Promise<any> {
	return axios
		.get(`/discover/movie?api_key=${API_KEY}`)
		.then(response => {
			return response.data.results;
		})
		.catch(error => {
			console.log('ERROR', error);
		});
}

export function getMovieById(movieId: string): Promise<any> {
	return axios
		.get(`/movie/${movieId}?api_key=${API_KEY}`)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			console.log('ERROR', error);
		});
}
