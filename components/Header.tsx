import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { Link } from 'react-router-native';

export default class Header extends React.Component {
	render() {
		return (
			<View style={estilos.header}>
				<StatusBar hidden={true} />
				<Image source={require('../assets/menu.png')} />
				<Text
					style={{
						color: '#FFFFFF',
						fontSize: 22,
						flex: 1,
						width: '100%',
						position: 'absolute',
						textAlign: 'center'
					}}
				>
					ChatUnicundi
				</Text>
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	header: {
		backgroundColor: '#1F3F3E',
		height: 50,
		padding: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	container: {
		flex: 1
	}
});
