import * as React from 'react';
import {
	View,
	StyleSheet,
	ImageBackground,
	FlatList,
	KeyboardAvoidingView,
	Platform
} from 'react-native';
import Header from '../components/HeaderLogin';
import Mensaje, { Imensaje } from '../components/Mensajes';
import InputGrupo from '../components/InputGrupo';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

const colorFondo = '#e5ddd5';
//e5ddd5 378C89

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

	onContentSizeChange = (event) => {
		this.setState({
			height: event.nativeEvent.contentSize.height
		});
	};

	onChangeText = (text) => {
		this.setState({ text });
	};

	render() {
		return (
			<ActionSheetProvider>
				<KeyboardAvoidingView
					style={estilos.container}
					behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
					keyboardVerticalOffset={25}
				>
					<Header
						back={true}
						titulo={this.props.route.params.grupo}
						navigation={this.props.navigation.goBack}
					/>
					<View style={[estilos.container, { backgroundColor: colorFondo }]}>
						<ImageBackground
							source={require('../assets/escudo_blanco.png')}
							style={estilos.image}
						>
							<View style={[estilos.container, estilos.contenido]}>
								<Mensaje persona="Jose" mensaje="Hola, que tal" fecha="Fecha" />
								<Mensaje mensaje="Hola" fecha="Fecha" />
								<Mensaje persona="Persona" mensaje="Hola" fecha="Fecha" />
							</View>

							<InputGrupo
								value={this.state.text}
								onChangeText={this.onChangeText}
								onContentSizeChange={this.onContentSizeChange}
								height={this.state.height}
							/>
						</ImageBackground>
					</View>
				</KeyboardAvoidingView>
			</ActionSheetProvider>
		);
	}
}

const estilos = StyleSheet.create({
	container: {
		flex: 1
	},
	contenido: {
		paddingHorizontal: 10,
		marginVertical: 10
	},
	fondo: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	}
});
