import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/HeaderLogin';
import Mensaje from '../components/Mensajes';

interface Iprops {
	route;
	navigation;
}

export default class Grupo extends React.Component<Iprops, null> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					back={true}
					titulo={this.props.route.params.grupo}
					navigation={this.props.navigation.goBack}
				/>
				<View style={estilos.container}>
					<View style={[estilos.container, estilos.contenido]}>
						<Mensaje persona="Jose" mensaje="Hola, que tal" fecha="Fecha" />
						<Mensaje mensaje="Hola" fecha="Fecha" />
						<Mensaje
							persona="El primo"
							mensaje="Dejen Dormir jajajajaj"
							fecha="Fecha"
						/>
					</View>
					<View style={estilos.inputContainer}>
						<TouchableOpacity
							style={{
								paddingHorizontal: 10,
								justifyContent: 'center',
								alignItems: 'center',
								borderRightWidth: 1
							}}
						>
							<Icon name="add" size={30} color="#1F3F3E" />
						</TouchableOpacity>

						<View style={{ flex: 8, paddingHorizontal: 10 }}>
							<TextInput
								placeholder="Escribe un mensaje"
								style={{
									flex: 1,
									fontSize: 17
								}}
							/>
						</View>

						<TouchableOpacity style={estilos.icon}>
							<Icon name="send" size={30} color="white" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	container: {
		flex: 1
	},
	contenido: {
		paddingHorizontal: 10,
		marginVertical: 10
	},
	inputContainer: {
		height: 45,
		borderTopWidth: 1,
		borderColor: '#000000',
		backgroundColor: 'white',
		flexDirection: 'row'
	},
	fondo: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	icon: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#000000',
		backgroundColor: '#1F3F3E',
		paddingLeft: 5
	}
});
