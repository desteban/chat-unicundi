import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Dimensions, AsyncStorage } from 'react-native';

import { GrupoScreen, HomeScreen, LoginScreen, PerfilScreen } from './Screens/index';
import Sidebar from './components/SideBar';

import Home from './containers/Home';

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
		<NavigationContainer>
			<Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Chat" component={GrupoScreen} />
				<Drawer.Screen name="LoginScreen" component={LoginScreen} />
				<Drawer.Screen name="PerfilScreen" component={PerfilScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;

/*import { View, Text, AsyncStorage, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './containers/Login';
import Grupo from './containers/Grupo';
import HomeScreen from './containers/HomeScreen';

const opcionesHeader: StackNavigationOptions = {
	headerTitleAlign: 'center',
	title: 'ChatUnicundi',
	headerStyle: { backgroundColor: '#1F3F3E' },
	headerTitleStyle: { fontSize: 22, color: '#FFFFFF' },
	headerLeft: () => (
		<Text
			onPress={() => {
				console.log('open');
			}}
		>
			<Icon name="menu" size={30} color="#FFFFFF" />
		</Text>
	)
};

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Login" component={Login} options={opcionesHeader} />
				<Stack.Screen name="Home" component={HomeScreen} options={opcionesHeader} />
				<Stack.Screen name="Chat" component={Grupo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;*/
