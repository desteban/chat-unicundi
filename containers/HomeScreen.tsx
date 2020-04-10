import * as React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
//import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import Home from './Home';
import Grupo from './Grupo';

let ses: string;
let navigationG;
const Drawer = createDrawerNavigator();

const user = AsyncStorage.getItem('user', (error, result) => {
	if (result) {
		ses = 'Home';
	} else {
		ses = 'Login';
	}
	return JSON.parse(result);
});
user;

function App({ navigation }) {
	navigationG = navigation;
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Login" component={Login} />
			<Drawer.Screen name="HomeScreen" component={Home} options={{ title: 'Home' }} />
			<Drawer.Screen name="Perfil" component={Grupo} />
		</Drawer.Navigator>
	);
}

export default App;
