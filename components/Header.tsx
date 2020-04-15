import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Iprops {
	navigation?;
	nombre?: string;
	contenido?;
}

export default class Screen extends React.Component<Iprops, null> {
	render() {
		return (
			<View>
				<StatusBar backgroundColor="#1F3F3E" />
				<View style={estilos.header}>
					<SafeAreaView
						style={{
							flex: 1,
							flexDirection: 'row',
							paddingVertical: 10,
							paddingHorizontal: 10
						}}
					>
						<View style={{ flex: 1 }}>
							<Text style={estilos.nombreUsuario}>Nombre del Usuario</Text>
							<Text style={estilos.codigoUsuario}>Codigo</Text>
						</View>

						<View>
							<Icon name="face" size={35} color="white" />
						</View>
					</SafeAreaView>
				</View>
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1F3F3E'
	},
	text: {
		color: '#FFFFFF',
		fontSize: 20,
		height: 50,
		fontWeight: '500',
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	header: {
		backgroundColor: '#1F3F3E',
		height: 50
	},
	nombreUsuario: {
		color: 'white',
		fontSize: 15
	},
	codigoUsuario: {
		color: 'white',
		fontSize: 12
	}
});
