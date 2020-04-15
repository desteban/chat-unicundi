import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface Iprops {
	onPress?;
	Text: string;
	borderColor?;
	backgroundColor?;
	Color?;
	borderWidth?: number;
	fontSize?: number;
}

export default function Boton(props: Iprops) {
	return (
		<TouchableOpacity
			onPress={() => props.onPress}
			style={{
				borderRadius: 50,
				borderColor: props.borderColor ? props.borderColor : 'white',
				backgroundColor: props.backgroundColor,
				borderWidth: props.borderWidth,
				paddingHorizontal: 15,
				paddingVertical: 5
			}}
		>
			<Text style={{ color: props.Color, fontSize: props.fontSize ? props.fontSize : 14 }}>
				{props.Text}
			</Text>
		</TouchableOpacity>
	);
}
