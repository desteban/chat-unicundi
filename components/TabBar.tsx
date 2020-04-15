import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const colorFocus = 'white';
const colorNormal = 'gray';

function icono(route, focused) {
	let iconName;

	if (route.name === 'Grupos') {
		iconName = focused ? 'group' : 'home';
	} else if (route.name === 'Settings') {
		iconName = focused ? 'https' : 'group';
	}

	return <Icon name={iconName} size={25} color={focused ? 'white' : 'gray'} />;
}

const onPress = (navigation, route, isFocused) => {
	const event = navigation.emit({
		type: 'tabPress',
		target: route.key,
		canPreventDefault: true
	});

	if (!isFocused && !event.defaultPrevented) {
		navigation.navigate(route.name);
	}
};

const onLongPress = (navigation, route) => {
	navigation.emit({
		type: 'tabLongPress',
		target: route.key
	});
};

export function MyTabBar({ state, descriptors, navigation }) {
	return (
		<View style={estilos.bar}>
			{state.routes.map((route, index) => {
				if (route.name != 'Chat') {
					const { options } = descriptors[route.key];

					//definir texto del label
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					return (
						<TouchableOpacity
							key={route.name}
							accessibilityRole="button"
							accessibilityStates={isFocused ? ['selected'] : []}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={() => onPress(navigation, route, isFocused)}
							onLongPress={() => onLongPress(navigation, route)}
							style={{ flex: 1 }}
						>
							<View style={estilos.label}>
								{icono(route, isFocused)}
								<Text
									style={{
										color: isFocused ? colorFocus : colorNormal,
										textAlign: 'center'
									}}
								>
									{label}
								</Text>
							</View>
						</TouchableOpacity>
					);
				}
			})}
		</View>
	);
}

const estilos = StyleSheet.create({
	bar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		backgroundColor: '#1F3F3E',
		padding: 2
	},
	label: {
		flexDirection: 'column',
		alignItems: 'center'
	}
});
