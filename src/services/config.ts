import axios from 'axios';

/*****************************************************
 * API
 *****************************************************/
export const API_BASE_URL =
	process.env.REACT_APP_API_BASE_URL || 'https://api.themoviedb.org';
export const IMG_BASE_URL =
	process.env.REACT_APP_IMG_BASE_URL || 'https://image.tmdb.org/t/p/original';
export const API_VERSION = 3;
export const API_KEY = 'b6ca710b4afb88111505db060bdc9980';
axios.defaults.baseURL = API_BASE_URL + '/' + API_VERSION;
export { axios };

/*****************************************************
 * LOCAL STORAGE
 *****************************************************/
export const LOCAL_STORAGE_REGISTERED_USERS = 'LOCAL_STORAGE_REGISTERED_USERS';
export const LOCAL_STORAGE_AUTHENTICATED_USER =
	'LOCAL_STORAGE_AUTHENTICATED_USER';
