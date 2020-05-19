import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Settings extends React.Component<null, null> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={estilos.container}>
				<View style={{ marginHorizontal: 10, marginVertical: 8 }}>
					<TouchableOpacity onPress={() => {}} style={estilos.item}>
						<Icon name="colorize" size={30} />
						<Text style={estilos.titulo}> Colores </Text>
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
		borderBottomWidth: 1.5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		flexDirection: 'row',
		marginVertical: 8
	},
	titulo: {
		fontSize: 23,
		textAlign: 'center',
		marginHorizontal: 20
	}
});
