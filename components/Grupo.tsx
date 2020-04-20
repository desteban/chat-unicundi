import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Iprops {
	nombre: string;
	codigo: string;
	navigation;
}

export interface Igrupo {
	nombre: string;
	codigo: string;
}

export default function Grupo(props: Iprops) {
	return (
		<TouchableOpacity
			style={estilos.item}
			onPress={() =>
				props.navigation.navigate('Chat', {
					grupo: props.nombre,
					codigo: props.codigo
				})
			}
		>
			<Icon name="school" size={30} />
			<Text style={estilos.materia}> {props.nombre} </Text>
		</TouchableOpacity>
	);
}

const estilos = StyleSheet.create({
	item: {
		borderColor: '#c7c7c7',
		borderBottomWidth: 1.5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		flexDirection: 'row',
		marginVertical: 8
	},
	materia: {
		fontSize: 23,
		textAlign: 'center',
		marginHorizontal: 20
	}
});
