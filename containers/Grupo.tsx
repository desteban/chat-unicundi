import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Screen from '../Screens/Screen';

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
			<View style={estilos.container}>
				<Screen nombre={this.props.route.params.grupo} navigation={this.props.navigation} />
				<View style={{ paddingVertical: 8, paddingHorizontal: 5, flex: 1 }}>
					<View style={estilos.contenido}>
						<Text>Message</Text>
					</View>

					<View style={estilos.inputContainer}>
						<View>
							<TextInput placeholder="Escribe un mensaje" />
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFE7DD'
	},
	contenido: {
		flex: 8
	},
	inputContainer: {
		height: 50,
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius: 50,
		padding: 10
	}
});
