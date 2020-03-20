import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={estilos.container}>
        <TextInput placeholder="Usuario(Aulas virtuales)" />
        <TextInput placeholder="Contraseña" textContentType="password" />
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
    backgroundColor: "#fff",
    padding: 5
  }
});
