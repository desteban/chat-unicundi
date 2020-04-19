import * as React from 'react';
import { View, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Textarea from 'react-native-textarea';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/HeaderLogin';
import Mensaje from '../components/Mensajes';

interface Iprops {
	route;
	navigation;
}

interface Istate {
	height?: number;
	text?: string;
}

export default class Grupo extends React.Component<Iprops, Istate> {
	constructor(props) {
		super(props);
		this.state = { height: 200, text: '' };
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header
					back={true}
					titulo={this.props.route.params.grupo}
					navigation={this.props.navigation.goBack}
				/>
				<View style={[estilos.container, { backgroundColor: '#e5ddd5' }]}>
					<ImageBackground source={null} style={estilos.image}>
						<View style={[estilos.container, estilos.contenido]}>
							<Mensaje persona="Jose" mensaje="Hola, que tal" fecha="Fecha" />
							<Mensaje mensaje="Hola" fecha="Fecha" />
							<Mensaje
								persona="El primo"
								mensaje="Dejen Dormir jajajajaj"
								fecha="Fecha"
							/>
						</View>
					</ImageBackground>
					<View
						style={[
							estilos.inputContainer,
							{ height: Math.max(45, this.state.height) }
						]}
					>
						<TextInput
							placeholder="Escribe un mensaje"
							multiline={true}
							onChangeText={(text) => {
								this.setState({ text });
							}}
							onContentSizeChange={(event) => {
								this.setState({ height: event.nativeEvent.contentSize.height });
							}}
							style={[estilos.inputChat, { height: Math.max(45, this.state.height) }]}
							value={this.state.text}
						/>

						<TouchableOpacity
							style={{
								paddingHorizontal: 10,
								justifyContent: 'center',
								alignItems: 'center',
								borderLeftWidth: 1
							}}
						>
							<Icon name="add" size={30} color="#1F3F3E" />
						</TouchableOpacity>

						<TouchableOpacity style={estilos.icon}>
							<Icon name="send" size={30} color="white" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

/*

	  
<TextInput
								key="input"
								placeholder="Escribe un mensaje"
								style={[estilos.inputChat, { height: this.state.alto }]}
								multiline={true}
								editable={true}
								scrollEnabled={true}
								maxFontSizeMultiplier={10}
								onContentSizeChange={(e) => {
									this.setState({ alto: this.state.alto + 3 });
									console.log(e);
								}}
							/>

*/

const estilos = StyleSheet.create({
	container: {
		flex: 1
	},
	contenido: {
		paddingHorizontal: 10,
		marginVertical: 10
	},
	inputContainer: {
		borderTopWidth: 1,
		maxHeight: 141,
		borderColor: '#000000',
		backgroundColor: 'white',
		flexDirection: 'row'
	},
	fondo: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	icon: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#000000',
		backgroundColor: '#1F3F3E',
		paddingLeft: 5
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	inputChat: {
		flex: 8,
		maxHeight: 140,
		fontSize: 17,
		textAlignVertical: 'center',
		paddingHorizontal: 10
	}
});

//#05DDD5
//#1F3F3E
