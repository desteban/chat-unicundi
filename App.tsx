import * as React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './containers/Login';
import Home from './containers/Home';
import Grupo from './containers/Grupo';
import Header from './components/Header';
import HomeScreen from './containers/HomeScreen';

let ses: string;
//const Stack = createStackNavigator();
/*const opcionesHeader: StackNavigationOptions = {
	headerTitleAlign: 'center',
	title: 'ChatUnicundi',
	headerStyle: { backgroundColor: '#1F3F3E' },
	headerTitleStyle: { fontSize: 22, color: '#FFFFFF' }
};*/
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

function App() {
	return (
		/*<NavigationContainer>
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
		</NavigationContainer>*/
		<NavigationContainer>
			<Header />
			<Drawer.Navigator>
				<Drawer.Screen name="Login" component={Login} />
				<Drawer.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{ title: 'Home' }}
				/>
				<Drawer.Screen name="Perfil" component={Grupo} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;
