import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
	BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Iprops {
	back?: boolean;
	titulo?: string;
	navigation?;
}

export default function HeaderLogin(props: Iprops) {
	return (
		<View>
			<StatusBar backgroundColor="#1F3F3E" />
			<SafeAreaView style={estilos.header}>
				<Text style={estilos.text}>{props.titulo ? props.titulo : 'ChatUnicundi'}</Text>
				{backButton(props.back, props.navigation)}
			</SafeAreaView>
		</View>
	);
}

function backButton(estado?: boolean, press?) {
	if (estado) {
		return (
			<TouchableOpacity style={estilos.back} onPress={() => press()}>
				<Icon name="chevron-left" size={35} color="white" />
			</TouchableOpacity>
		);
	}
}

const estilos = StyleSheet.create({
	text: {
		color: '#FFFFFF',
		fontSize: 20,
		height: 50,
		fontWeight: '500',
		textAlign: 'center',
		textAlignVertical: 'center',
		width: '100%',
		paddingHorizontal: 30
	},
	header: {
		backgroundColor: '#1F3F3E',
		height: 50
	},
	back: {
		position: 'absolute',
		height: 50,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		paddingLeft: 3,
		borderRadius: 50
	}
});
