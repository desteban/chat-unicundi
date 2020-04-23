import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { connectActionSheet, ActionSheetProps } from '@expo/react-native-action-sheet';
import ShowActionSheetButton from './ActionSheetButton';
import * as DocumentPicker from 'expo-document-picker';

type Props = ActionSheetProps;

interface State {
	selectedIndex: number | null;
}

class App extends React.Component<Props, State> {
	state: State = {
		selectedIndex: null
	};

	_updateSelectionText = (selectedIndex: number) => {
		if (selectedIndex === 0) {
			DocumentPicker.getDocumentAsync({
				type: 'application/*',
				copyToCacheDirectory: false
			})
				.then((document) => {
					alert(`uri: ${document.uri}
            nombre: ${document.name}`);
				})
				.catch(() => alert('Algo salio mal'));
		} else if (selectedIndex === 1) {
			DocumentPicker.getDocumentAsync({
				type: 'image/*',
				copyToCacheDirectory: false
			})
				.then((document) => {
					alert(`uri: ${document.uri}
            nombre: ${document.name}`);
				})
				.catch(() => alert('Algo salio mal'));
		} else if (selectedIndex === 2) {
			DocumentPicker.getDocumentAsync({
				type: 'video/*',
				copyToCacheDirectory: false
			})
				.then((document) => {
					alert(`uri: ${document.uri}
            nombre: ${document.name}`);
				})
				.catch(() => alert('Algo salio mal'));
		}
		this.setState({
			selectedIndex
		});
	};

	/*
    () => {
								DocumentPicker.getDocumentAsync({
									type: 'application/*',
									copyToCacheDirectory: false
								})
									.then((document) => {
										alert(`uri: ${document.uri}
                                nombre: ${document.name}`);
									})
									.catch(() => alert('Algo salio mal'));
							}
    */

	_renderButtons() {
		const { showActionSheetWithOptions } = this.props;
		return (
			<ShowActionSheetButton
				title="Documentos o multimedia"
				message="Puedes escojer Documentos, Fotos o Viedeos para compartir"
				options={['Documentos', 'Fotos', 'Videos', 'Salir']}
				onSelection={this._updateSelectionText}
				showActionSheetWithOptions={showActionSheetWithOptions}
				withAnchor={true}
			/>
		);
	}

	render() {
		return (
			<TouchableOpacity style={{ padding: 5, borderRadius: 20 }}>
				{this._renderButtons()}
			</TouchableOpacity>
		);
	}
}

const ConnectedApp = connectActionSheet<{}>(App);

export default class AppContainer extends React.Component {
	render() {
		return <ConnectedApp />;
	}
}
