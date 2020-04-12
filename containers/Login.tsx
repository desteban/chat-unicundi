import React from 'react';
import { View, Button, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import Header from '../components/Header';

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

				<TextInput placeholder="Codigo" style={estilos.inputs} />
				<TextInput
					placeholder="Contraseña"
					textContentType="password"
					style={estilos.inputs}
					secureTextEntry={true}
				/>
				<Button title="Ingresar" onPress={toHome} />
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	btn: {
		backgroundColor: '#26FF67'
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#F9F9F9',
		padding: 5
	},
	inputs: {
		borderRadius: 30,
		borderColor: '#000000',
		borderWidth: 2,
		textAlign: 'center',
		height: 30,
		fontSize: 20,
		marginBottom: 15
	}
});
