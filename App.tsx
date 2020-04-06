import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './containers/Login';
import Home from './containers/Home';
import Grupo from './containers/Grupo';

const Stack = createStackNavigator();
const nombreApp = 'ChatUnicundi';

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: nombreApp, headerTitleAlign: 'center' }}
				/>
				<Stack.Screen name="Chat" component={Grupo} />
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerTitleAlign: 'center', title: nombreApp }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F9F9F9'
	},
	title: {
		fontSize: 20
	},
	header: {
		flexDirection: 'row',
		textAlignVertical: 'center',
		padding: 3
	},
	img: {
		height: 25,
		width: 25,
		margin: 3,
		marginVertical: 2
	}
});
