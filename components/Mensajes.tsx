import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Imensaje {
	persona?: string;
	mensaje: string;
	fecha?;
}

/*
{
				width: '100%',
				flexDirection: 'row-reverse'
			}
*/

export default function Mensajes(props: Imensaje) {
	return (
		<View
			style={
				props.persona ? { width: '100%' } : { width: '100%', flexDirection: 'row-reverse' }
			}
		>
			<View
				style={
					props.persona
						? [estilos.mensaje, { backgroundColor: 'white' }]
						: [estilos.mensaje, { alignItems: 'flex-end', backgroundColor: '#fec134' }]
				}
			>
				<Text style={estilos.nombre}> {props.persona ? props.persona : 'Tu'} </Text>
				<Text style={estilos.contenido}> {props.mensaje} </Text>
				<Text
					style={props.persona ? [estilos.fecha, { textAlign: 'right' }] : estilos.fecha}
				>
					{props.fecha}
				</Text>
			</View>
		</View>
	);
}

const estilos = StyleSheet.create({
	mensaje: {
		maxWidth: '80%',
		borderRadius: 15,
		padding: 5,
		alignSelf: 'flex-start',
		marginVertical: 5
	},
	nombre: {
		fontSize: 11
	},
	fecha: {
		fontSize: 10,
		paddingHorizontal: 5
	},
	contenido: {
		fontSize: 15
	}
});
