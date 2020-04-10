import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from 'expo-constants';

interface Iprops {
	navigation;
	nombre?: string;
}

export default class Screen extends React.Component<Iprops, null> {
	render() {
		return (
			<View>
				<SafeAreaView style={estilos.container}>
					<StatusBar backgroundColor="#1F3F3E" />
					<TouchableOpacity
						style={{ alignItems: 'flex-start', margin: 10 }}
						onPress={this.props.navigation.openDrawer}
					>
						<Icon name="menu" size={30} color="#FFFFFF" />
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Text style={estilos.text}>
							{this.props.nombre ? this.props.nombre : 'ChatUnicundi'}
						</Text>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}

/*
<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Text style={estilos.text}>
							{this.props.nombre ? this.props.nombre : 'ChatUnicundi'}
						</Text>
					</View>
*/

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1F3F3E'
	},
	text: {
		color: '#FFFFFF',
		fontSize: 20,
		fontWeight: '500'
	},
	header: {
		backgroundColor: '#1F3F3E',
		height: 50
	}
});
