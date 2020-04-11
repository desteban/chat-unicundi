import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Screen from '../Screens/Screen';

interface Iprops {
	navigation;
}

export default class Home extends React.Component<Iprops, null> {
	render() {
		return (
			<View style={estilos.container}>
				<Screen navigation={this.props.navigation} />

				<View style={{ marginHorizontal: 5, marginVertical: 5 }}>
					<TouchableOpacity
						style={estilos.item}
						onPress={() =>
							this.props.navigation.navigate('Chat', {
								grupo: 'Investigacion I',
								codigo: '12354'
							})
						}
					>
						<Text style={estilos.materia}>Nombre Grupo</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F9F9F9'
	},
	item: {
		borderRadius: 20,
		borderColor: '#000000',
		borderWidth: 1,
		padding: 8
	},
	profesor: {
		fontSize: 15,
		color: '#26B2FF',
		textAlign: 'center'
	},
	materia: {
		fontSize: 23,
		textAlign: 'center'
	}
});
