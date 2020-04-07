import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Home from './Home';
import Grupo from './Grupo';

const Stack = createStackNavigator();
const opcionesHeader: StackNavigationOptions = {
	headerTitleAlign: 'center',
	title: 'ChatUnicundi',
	headerStyle: { backgroundColor: '#1F3F3E' },
	headerTitleStyle: { fontSize: 22, color: '#FFFFFF' }
};

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="chat" component={Grupo} options={opcionesHeader} />
			</Stack.Navigator>
		);
	}
}
