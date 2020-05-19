import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Grupo, { Igrupo } from '../components/Grupo';

interface Iprops {
	navigation;
}

interface Istate {
	dataSource?;
	gurpos: Igrupo[];
}

export default class Home extends React.Component<Iprops, Istate> {
	constructor(props) {
		super(props);
		this.state = {
			gurpos: [
				{ codigo: '123', nombre: 'Investigacion I' },
				{ codigo: '120', nombre: 'Ecuaciones Diferenciales' },
				{ codigo: '126', nombre: 'Electiva Profecional I' }
			]
		};
	}

	render() {
		return (
			<View style={estilos.container}>
				<View style={{ marginHorizontal: 10, marginVertical: 8 }}>
					<FlatList
						data={this.state.gurpos}
						renderItem={(grupo) => (
							<Grupo
								nombre={grupo.item.nombre}
								codigo={grupo.item.codigo}
								navigation={this.props.navigation}
							/>
						)}
						keyExtractor={(grupo) => grupo.codigo}
					/>
				</View>
			</View>
		);
	}
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F9F9F9'
	},
	profesor: {
		fontSize: 15,
		color: '#26B2FF',
		textAlign: 'center'
	}
});

/*
Array(5)
						.fill(grupo)
						.map((grupo) => {
							i++;
							return (
								<Grupo
									key={i}
									nombre="Investigacion I"
									codigo="15878-u"
									navigation={this.props.navigation}
								/>
							);
						})
*/
