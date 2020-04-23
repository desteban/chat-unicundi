import * as React from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BotonesInput from './BotonesInput';

interface Iprops {
	onChangeText?;
	onContentSizeChange?;
	value?;
	send?;
	height;
}

export default function InputGrupo(props: Iprops) {
	let margin: number = 0;
	return (
		<View
			style={[
				estilos.inputContainer,
				{ height: Math.max(45, props.height), marginBottom: Math.max(0, margin) }
			]}
		>
			<View style={[estilos.opciones, { flex: 1 }]}>
				<TextInput
					placeholder="Escribe un mensaje"
					multiline={true}
					onChangeText={(text) => props.onChangeText(text)}
					onContentSizeChange={(event) => props.onContentSizeChange(event)}
					style={[estilos.inputChat, { height: Math.max(45, props.height) }]}
					value={props.value}
					onFocus={() => {
						//margin = 25;
						console.log(margin);
					}}
				/>
			</View>

			<View style={{ flexDirection: 'column-reverse' }}>
				<View style={estilos.iconBox}>
					<View style={estilos.iconContainer}>
						<BotonesInput />
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
