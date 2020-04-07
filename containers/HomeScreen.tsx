import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Home from './Home';

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
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="HomeGrupo" component={Home} options={opcionesHeader} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
