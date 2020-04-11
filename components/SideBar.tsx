import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	TouchableOpacity,
	Animated
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

interface Iitem {
	tittle;
	navigation?;
}

function ItemMenu(props: Iitem) {
	return (
		<View>
			<TouchableOpacity
				style={{ flex: 1, borderRadius: 5 }}
				onPress={() => props.navigation()}
			>
				<View style={estilos.item}>
					<Text style={estilos.texto}>{props.tittle}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

function ItemDrawer(props: Iitem) {
	<DrawerItem label={props.tittle} onPress={() => props.navigation} />;
}

export default function Sidebar(props) {
	return (
		<DrawerContentScrollView style={{ backgroundColor: '#F9F9F9' }}>
			<TouchableOpacity style={estilos.bgContainer}>
				<View style={estilos.userContainer}>
					<Image style={estilos.userImagen} source={require('../assets/user.png')} />
					<View style={estilos.userNombre}>
						<Text style={estilos.userTitulo}>Nombre de usuario</Text>
						<Text style={estilos.userSubTitulo}>Carrera</Text>
					</View>
				</View>
			</TouchableOpacity>

			<ItemMenu tittle="Ajustes" navigation={() => props.navigation.navigate('Home')} />
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
	},
	container: {
		backgroundColor: 'white',
		flex: 1
	},

	bgContainer: {
		borderBottomWidth: 0.5,
		borderBottomColor: '#A0A0A0'
	},

	userContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30
	},

	userImagen: {
		width: 70,
		height: 70,
		borderRadius: 35
	},

	camaraContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	camaraIcon: {
		width: 20,
		height: 20,
		position: 'absolute',
		left: 15,
		bottom: 3
	},

	userNombre: {
		marginVertical: 10
	},

	userTitulo: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16
	},

	userSubTitulo: {
		textAlign: 'center',
		fontSize: 11,
		color: '#a537fd',
		paddingVertical: 5
	},
	menuContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginLeft: 10,
		marginVertical: 15
	},

	iconoContainer: {
		flex: 1.5,
		justifyContent: 'center'
	},

	tituloContainer: {
		flex: 8.5,
		justifyContent: 'center'
	},

	tituloTxt: {
		fontSize: 13
	},
	difuminado: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	fondoImagen: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	}
});
