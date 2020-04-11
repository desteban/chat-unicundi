import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from 'expo-constants';

interface Iprops {
	navigation?;
	nombre?: string;
	contenido?;
}

export default class Screen extends React.Component<Iprops, null> {
	render() {
		return (
			<View>
				<View style={estilos.header}>
					<SafeAreaView style={{ flex: 1 }}>
						<StatusBar backgroundColor="#1F3F3E" />
						<View style={{ flex: 1 }}>
							<Text style={estilos.text}>
								{this.props.nombre ? this.props.nombre : 'ChatUnicundi'}
							</Text>
						</View>

						<View style={{ position: 'absolute' }}>
							<TouchableOpacity
								style={{ alignItems: 'flex-start', margin: 10 }}
								onPress={
									this.props.navigation ? this.props.navigation.openDrawer : null
								}
							>
								<Icon name="menu" size={30} color="#FFFFFF" />
							</TouchableOpacity>
						</View>
					</SafeAreaView>
				</View>
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1F3F3E'
	},
	text: {
		color: '#FFFFFF',
		fontSize: 20,
		height: 50,
		fontWeight: '500',
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	header: {
		backgroundColor: '#1F3F3E',
		height: 50
	}
});
