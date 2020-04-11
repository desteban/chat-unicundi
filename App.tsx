import * as React from 'react';
import { View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from './components/TabBar';

import Home from './containers/Home';
import Grupo from './containers/Grupo';
import Login from './containers/Login';
import Header from './components/Header';

const Tab = createBottomTabNavigator();

let ses: string;
let navigationG;

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
		<NavigationContainer>
			<Header />
			<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Settings" component={Login} />
				<Tab.Screen
					name="Chat"
					component={Grupo}
					options={({ navigation }) => ({ tabBarLabel: 'Que pasa' })}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;
