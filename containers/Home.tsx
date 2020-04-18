import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Iprops {
	navigation;
}

export default class Home extends React.Component<Iprops, null> {
	render() {
		return (
			<View style={estilos.container}>
				<View style={{ marginHorizontal: 10, marginVertical: 8 }}>
					<TouchableOpacity
						style={estilos.item}
						onPress={() =>
							this.props.navigation.navigate('Chat', {
								grupo: 'Investigacion I',
								codigo: '12354'
							})
						}
					>
						<Icon name="school" size={30} />
						<Text style={estilos.materia}>Investigacion I</Text>
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
		borderColor: '#c7c7c7',
		borderBottomWidth: 2,
		paddingHorizontal: 10,
		paddingVertical: 5,
		flexDirection: 'row'
	},
	profesor: {
		fontSize: 15,
		color: '#26B2FF',
		textAlign: 'center'
	},
	materia: {
		fontSize: 23,
		textAlign: 'center',
		marginHorizontal: 20
	}
});
