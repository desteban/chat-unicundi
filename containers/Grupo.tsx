import * as React from 'react';
import { View, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/HeaderLogin';
import Mensaje from '../components/Mensajes';

const colorFondo = '#e5ddd5';
//e5ddd5 378C89

interface Iprops {
	route;
	navigation;
}

interface Istate {
	height?: number;
	text?: string;
}

export default class Grupo extends React.Component<Iprops, Istate> {
	constructor(props) {
		super(props);
		this.state = { height: 200, text: '' };
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					back={true}
					titulo={this.props.route.params.grupo}
					navigation={this.props.navigation.goBack}
				/>
				<View style={[estilos.container, { backgroundColor: colorFondo }]}>
					<ImageBackground
						source={require('../assets/escudo_blanco.png')}
						style={estilos.image}
					>
						<View style={[estilos.container, estilos.contenido]}>
							<Mensaje persona="Jose" mensaje="Hola, que tal" fecha="Fecha" />
							<Mensaje mensaje="Hola" fecha="Fecha" />
							<Mensaje
								persona="El primo"
								mensaje="Dejen Dormir jajajajaj"
								fecha="Fecha"
							/>
						</View>
						<View
							style={[
								estilos.inputContainer,
								{ height: Math.max(45, this.state.height) }
							]}
						>
							<View style={estilos.opciones}>
								<TextInput
									placeholder="Escribe un mensaje"
									multiline={true}
									onChangeText={(text) => {
										this.setState({ text });
									}}
									onContentSizeChange={(event) => {
										this.setState({
											height: event.nativeEvent.contentSize.height
										});
									}}
									style={[
										estilos.inputChat,
										{ height: Math.max(45, this.state.height) }
									]}
									value={this.state.text}
								/>
							</View>
							<View style={{ flexDirection: 'column-reverse' }}>
								<View
									style={{
										flexDirection: 'row',
										borderRadius: 20,
										backgroundColor: '#458C8A',
										marginLeft: 5
									}}
								>
									<View style={estilos.iconContainer}>
										<TouchableOpacity style={estilos.icon}>
											<Icon name="add" size={30} color="white" />
										</TouchableOpacity>
									</View>
									<View style={estilos.iconContainer}>
										<TouchableOpacity style={[estilos.icon]}>
											<Icon name="send" size={30} color="white" />
										</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
					</ImageBackground>
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
		maxHeight: 141,
		borderColor: '#000000',
		flexDirection: 'row',
		height: 50,
		paddingBottom: 5,
		paddingHorizontal: 5
	},
	fondo: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	inputChat: {
		flex: 8,
		maxHeight: 140,
		fontSize: 17,
		textAlignVertical: 'center',
		paddingRight: 10,
		paddingLeft: 15,
		paddingVertical: 4
	},
	opciones: {
		flex: 10,
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconContainer: {
		flexDirection: 'column-reverse',
		height: '100%'
	},
	icon: {
		padding: 5,
		borderRadius: 20
	}
});
