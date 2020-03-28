import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={estilos.container}>
        <TextInput
          placeholder="Usuario(Aulas virtuales)"
          style={estilos.inputs}
        />
        <TextInput
          placeholder="Contraseña"
          textContentType="password"
          style={estilos.inputs}
        />
        <Button title="Ingresar" onPress={() => {}} />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  btn: {
    backgroundColor: "#26FF67"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    padding: 5
  },
  inputs: {
    borderRadius: 30,
    borderColor: "#000000",
    borderWidth: 2,
    textAlign: "center",
    height: 30,
    fontSize: 20,
    marginBottom: 15
  }
});
