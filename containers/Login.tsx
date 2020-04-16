import React from 'react';
import { View, StyleSheet, TextInput, Image, AsyncStorage } from 'react-native';
import Boton from '../components/Boton';
import Header from '../components/HeaderLogin';

interface IState {
	navigation;
}

interface Iprops {
	navigation;
}

let user;

function Usuario() {
	AsyncStorage.getItem('user', (error, result) => {
		console.log(result);
	});
}

export default class Login extends React.Component<Iprops, IState> {
	constructor(props) {
		super(props);
		this.state = { navigation: this.props.navigation };
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header />
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
						<Boton
							Text="Ingresar"
							backgroundColor="#1F3F3E"
							Color="white"
							onPress={() => this.props.navigation.push('principal')}
						/>
						<Boton
							Text="¿Olvidaste tu contraseña?"
							borderWidth={1}
							borderColor="gray"
							Color="gray"
							onPress={() => Usuario()}
						/>
					</View>
				</View>
			</View>
		);
	}
}

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
		borderColor: '#838383',
		borderBottomWidth: 2,
		height: 30,
		fontSize: 20,
		marginBottom: 15
	}
});
