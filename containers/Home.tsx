import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import Grupo from '../components/Grupo';

interface Iprops {
	navigation;
}

export default class Home extends React.Component<Iprops, null> {
	render() {
		return (
			<View style={estilos.container}>
				<View style={{ marginHorizontal: 10, marginVertical: 8 }}>
					<Grupo
						nombre="Investigacion I"
						codigo="15878-u"
						navigation={this.props.navigation}
					/>
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
	profesor: {
		fontSize: 15,
		color: '#26B2FF',
		textAlign: 'center'
	}
});
