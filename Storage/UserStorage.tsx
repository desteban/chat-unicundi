import React from 'react';
import { AsyncStorage } from 'react-native';

async function getUser() {
	AsyncStorage.getItem('user', (error, result) => {
		return result;
	});
}

/*unction Usuario() {
	AsyncStorage.getItem('user', (error, result) => {
		console.log(result);
	});
}*/

async function saveUser(usuario) {
	try {
		let json = JSON.stringify(usuario);
		await AsyncStorage.setItem('user', json);
	} catch (error) {
		alert(`Algo salio mal
        error 0l-1`);
	}
}

async function deleteUser() {
	try {
		await AsyncStorage.removeItem('user');
	} catch (error) {
		alert(`Algo salio mal
        error: 0l-2`);
	}
}

export { getUser, saveUser, deleteUser };
