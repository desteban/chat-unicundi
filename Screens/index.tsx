import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyTabBar } from '../components/TabBar';

import Home from '../containers/Home';
import Settings from '../containers/Settings';

const Tab = createMaterialTopTabNavigator();

let ses: string;

function index({ navigation }) {
	//navigation.navigate('Login');
	return (
		<Tab.Navigator swipeEnabled={true} tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name="Grupos" component={Home} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	);
}

export default index;
