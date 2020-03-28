import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.item}>
          <Text style={estilos.materia}>Nombre Grupo</Text>
          <Text style={estilos.profesor}>Profesor</Text>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  item: {
    borderRadius: 20,
    borderColor: "#000000",
    borderWidth: 1,
    padding: 10
  },
  profesor: {
    fontSize: 15,
    color: "#26B2FF",
    textAlign: "center"
  },
  materia: {
    fontSize: 23,
    textAlign: "center"
  }
});
