import React from 'react';
import { View, Button, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import Boton from '../components/Boton';

interface IState {
	navigation;
}

export default class Login extends React.Component<null, IState> {
	constructor(props) {
		super(props);
		this.state = { navigation: props.navigation };
	}

	render() {
		const toHome = () => {
			this.state.navigation.push('Home');
		};

		return (
			<View style={estilos.container}>
				<View
					style={{
						marginVertical: 15,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Image
						style={{ height: 150 }}
						resizeMode="contain"
						source={require('../assets/escudo.png')}
					/>
				</View>

				<TextInput placeholder="Codigo" style={estilos.inputs} keyboardType="numeric" />
				<TextInput
					placeholder="Contraseña"
					textContentType="password"
					style={estilos.inputs}
					secureTextEntry={true}
				/>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginVertical: 15
					}}
				>
					<Boton Text="Ingresar" backgroundColor="#1F3F3E" Color="white" />
					<Boton
						Text="¿Olvidaste tu contraseña?"
						borderWidth={1}
						borderColor="gray"
						Color="gray"
					/>
				</View>
			</View>
		);
	}
}

/*
borderColor="#e3e3e3"
						Color="#cfcfcf"
*/

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#F9F9F9',
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	inputs: {
		borderColor: '#000000',
		borderBottomWidth: 2,
		height: 30,
		fontSize: 20,
		marginBottom: 15
	}
});
