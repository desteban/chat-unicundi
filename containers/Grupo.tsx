import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default class Grupo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.contenido}>
          <Text>Message</Text>
        </View>

        <View style={estilos.inputContainer}>
          <View>
            <TextInput placeholder="Escribe un mensaje" />
          </View>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE7DD",
    padding: 8
  },
  contenido: {
    flex: 8
  },
  inputContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    padding: 10
  }
});
