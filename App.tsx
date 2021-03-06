import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './containers/Grupo';

import Login from './containers/Login';
import index from './Screens/index';

const Stack = createStackNavigator();

let ses: string;

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
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="principal" component={index} options={{ headerShown: false }} />
				<Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
