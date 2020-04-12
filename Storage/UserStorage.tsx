import React from 'react';
import { AsyncStorage } from 'react-native';

async function getUser() {
	try {
		let user = await AsyncStorage.getItem('user');
		return JSON.parse(user);
	} catch (error) {
		alert(`Algo salio mal
        error 0l-0`);
	}
}

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
