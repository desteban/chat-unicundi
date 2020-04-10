import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	ImageBackground,
	Image,
	TouchableOpacity
} from 'react-native';
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export default function Sidebar(props) {
	<DrawerContentScrollView>
		<View style={{ backgroundColor: 'red', height: 200, width: 100 }}></View>
		<DrawerItemList {...props} />
		<DrawerItem
			label="Home"
			onPress={() => {
				alert('Go to Home');
			}}
		/>
		<Text style={{ marginTop: 100 }}>Hola</Text>
	</DrawerContentScrollView>;
}

const estilos = StyleSheet.create({});
