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

interface Iitem {
	tittle;
	navigation?;
}

function ItemMenu(props: Iitem) {
	return (
		<View onTouchStart={() => console.log('touch')}>
			<TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation()}>
				<View style={estilos.item}>
					<Text style={estilos.texto}>{props.tittle}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

export default function Sidebar(props) {
	return (
		<DrawerContentScrollView>
			<DrawerItem
				label="Perfil"
				onPress={() => {
					props.navigation.navigate('PerfilScreen');
				}}
			/>
			<ItemMenu tittle="Home" navigation={() => props.navigation.navigate('Home')} />
			<ItemMenu tittle="Grupo" navigation={() => props.navigation.navigate('Chat')} />
		</DrawerContentScrollView>
	);
}

const estilos = StyleSheet.create({
	item: {
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	texto: {
		fontSize: 15,
		textAlignVertical: 'center',
		padding: 2
	}
});
