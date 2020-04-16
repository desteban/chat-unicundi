import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function HeaderLogin() {
	return (
		<View>
			<StatusBar backgroundColor="#1F3F3E" />
			<SafeAreaView style={estilos.header}>
				<Text style={estilos.text}>ChatUnicundi</Text>
			</SafeAreaView>
		</View>
	);
}

const estilos = StyleSheet.create({
	text: {
		color: '#FFFFFF',
		fontSize: 20,
		height: 50,
		fontWeight: '500',
		textAlign: 'center',
		textAlignVertical: 'center',
		width: '100%'
	},
	header: {
		backgroundColor: '#1F3F3E',
		height: 50
	}
});
