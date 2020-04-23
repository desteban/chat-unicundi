import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Iprops {
	onChangeText?;
	onContentSizeChange?;
	value?;
	send?;
	height;
}
this;

export default function InputGrupo(props: Iprops) {
	return (
		<View style={[estilos.inputContainer, { height: Math.max(45, props.height) }]}>
			<View style={estilos.opciones}>
				<TextInput
					placeholder="Escribe un mensaje"
					multiline={true}
					onChangeText={(text) => props.onChangeText(text)}
					onContentSizeChange={(event) => props.onContentSizeChange(event)}
					style={[estilos.inputChat, { height: Math.max(45, props.height) }]}
					value={props.value}
				/>
			</View>

			<View style={{ flexDirection: 'column-reverse' }}>
				<View style={estilos.iconBox}>
					{/**
					 * Icon add
					 */}

					<View style={estilos.iconContainer}>
						<TouchableOpacity
							style={estilos.icon}
							onPress={() => {
								DocumentPicker.getDocumentAsync({
									type: 'application/*',
									copyToCacheDirectory: false
								})
									.then((document) => {
										alert(`uri: ${document.uri}
                                nombre: ${document.name}`);
									})
									.catch(() => alert('Algo salio mal'));
							}}
						>
							<Icon name="add" size={30} color="white" />
						</TouchableOpacity>
					</View>

					{/**
					 * Icons send
					 */}

					<View style={estilos.iconContainer}>
						<TouchableOpacity
							style={[estilos.icon]}
							onPress={() => {
								props.send ? props.send : null;
							}}
						>
							<Icon name="send" size={30} color="white" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const estilos = StyleSheet.create({
	inputContainer: {
		maxHeight: 141,
		borderColor: '#000000',
		flexDirection: 'row',
		height: 50,
		paddingBottom: 5,
		paddingHorizontal: 5
	},
	inputChat: {
		flex: 8,
		maxHeight: 140,
		fontSize: 17,
		textAlignVertical: 'center',
		paddingRight: 10,
		paddingLeft: 15,
		paddingVertical: 4
	},
	opciones: {
		flex: 10,
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconContainer: {
		flexDirection: 'column-reverse',
		height: '100%'
	},
	iconBox: {
		flexDirection: 'row',
		borderRadius: 20,
		backgroundColor: '#458C8A',
		marginLeft: 5
	},
	icon: {
		padding: 5,
		borderRadius: 20
	}
});
