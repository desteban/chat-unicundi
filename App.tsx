import * as React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Login from './containers/Login';
import Home from './containers/Home';
import Grupo from './containers/Grupo';

let ses: string;
const Stack = createStackNavigator();
const opcionesHeader: StackNavigationOptions = {
	headerTitleAlign: 'center',
	title: 'ChatUnicundi',
	headerStyle: { backgroundColor: '#1F3F3E' },
	headerTitleStyle: { fontSize: 22, color: '#FFFFFF' }
};

const user = AsyncStorage.getItem('user', (error, result) => {
	if (result) {
		ses = 'Home';
	} else {
		ses = 'Login';
	}
	return JSON.parse(result);
});
user;

function App() {
	return (
		<NavigationContainer>
			{console.log(ses)}
			<Stack.Navigator initialRouteName={ses}>
				<Stack.Screen name="Home" component={Home} options={opcionesHeader} />
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerLeft: () => <Button title="Back" onPress={() => alert('Hola')} />
					}}
				/>
				<Stack.Screen name="Chat" component={Grupo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
