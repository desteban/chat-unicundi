import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActionSheetOptions } from '@expo/react-native-action-sheet';
import { Text, View, TextStyle, ViewStyle, findNodeHandle, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Iprops {
	title: string;
	options: string[];
	message?: string;
	showActionSheetWithOptions: (
		optons: ActionSheetOptions,
		callback: (buttonIndex: number) => void
	) => void;
	onSelection: (index: number) => void;
	withSeparators?: boolean;
	withCustomStyles?: boolean;
	withAnchor?: boolean;
}

export default class ActionSheetButton extends React.PureComponent<Iprops> {
	constructor(props) {
		super(props);
	}

	_anchorRef = React.createRef<TouchableOpacity>();

	_showActionSheet = () => {
		const {
			title,
			options,
			message,
			withAnchor,
			withSeparators,
			withCustomStyles,
			onSelection,
			showActionSheetWithOptions
		} = this.props;

		const destructiveButtonIndex = 3;
		const cancelButtonIndex = 3;
		const textStyle: TextStyle | undefined = withCustomStyles
			? {
					fontSize: 20,
					fontWeight: '500',
					color: 'blue'
			  }
			: undefined;
		const titleTextStyle: TextStyle | undefined = withCustomStyles
			? {
					fontSize: 24,
					textAlign: 'center',
					fontWeight: '700',
					color: 'orange'
			  }
			: undefined;
		const messageTextStyle: TextStyle | undefined = withCustomStyles
			? {
					fontSize: 12,
					color: 'purple',
					textAlign: 'right'
			  }
			: undefined;
		const containerStyle: ViewStyle | undefined = withCustomStyles
			? {
					backgroundColor: 'lightgrey'
			  }
			: undefined;
		const anchor: number | null = this._anchorRef.current
			? findNodeHandle(this._anchorRef.current)
			: null;

		showActionSheetWithOptions(
			{
				title,
				options,
				cancelButtonIndex,
				destructiveButtonIndex,
				message,
				//iPad only
				anchor: withAnchor && anchor ? anchor : undefined,
				// Android only; default is true
				showSeparators: withSeparators,
				// Affects Android only; default is false
				textStyle,
				// Android only
				titleTextStyle,
				// Android only
				messageTextStyle,
				// Android only,
				containerStyle
			},
			(buttonIndex: number) => {
				// Do something here depending on the button index selected
				onSelection(buttonIndex);
			}
		);
	};

	render() {
		return (
			<TouchableOpacity onPress={this._showActionSheet} ref={this._anchorRef}>
				<Icon name="add" size={30} color="white" />
			</TouchableOpacity>
		);
	}
}
