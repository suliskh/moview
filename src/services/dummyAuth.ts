import { User } from '../store/auth/types';
import {
	LOCAL_STORAGE_REGISTERED_USERS,
	LOCAL_STORAGE_AUTHENTICATED_USER,
} from './config';

export function dummySignUp(username: string, password: string): Promise<any> {
	return new Promise((resolve, reject): void => {
		setTimeout(() => {
			const storedUsers: string | null = localStorage.getItem(
				LOCAL_STORAGE_REGISTERED_USERS
			);
			const registeredUsers: Array<any> = JSON.parse(storedUsers || '[]');

			const user: User = registeredUsers.find((user: User) => {
				return user.username === username;
			});

			if (!user) {
				registeredUsers.push({ username, password });
				localStorage.setItem(
					LOCAL_STORAGE_REGISTERED_USERS,
					JSON.stringify(registeredUsers)
				);

				resolve(true);
			} else {
				reject(
					`"${username}" has already been registered. Please use another username.`
				);
			}
		}, 1000);
	});
}

export function dummyLogin(username: string, password: string) {
	return new Promise((resolve, reject): void => {
		setTimeout(() => {
			const storedUsers: string | null = localStorage.getItem(
				LOCAL_STORAGE_REGISTERED_USERS
			);
			const registeredUsers: Array<any> = JSON.parse(storedUsers || '[]');

			const user: User = registeredUsers.find((user: User) => {
				return user.username === username;
			});

			if (!user) {
				reject(`"${username}" is not registered`);
			} else {
				if (user.password !== password) {
					reject(`Wrong password`);
				} else {
					localStorage.setItem(LOCAL_STORAGE_AUTHENTICATED_USER, user.username);
					resolve(true);
				}
			}
		}, 1500);
	});
}

export function dummyLogout() {
	localStorage.removeItem(LOCAL_STORAGE_AUTHENTICATED_USER);
	console.log('LOGGED OUT!');
	return;
}
