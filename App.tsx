import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { SvgUri } from "react-native-svg";

import Home from "./containers/Home";
import Grupo from "./containers/Grupo";
import Login from "./containers/Login";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Image source={require("./assets/menu.png")} style={styles.img} />
          <Text style={styles.title}>ChatUnicundi</Text>
        </View>
        <Link to={"/"} underlayColor="#f0f4f7">
          <Text>Home</Text>
        </Link>
        <Link to={"/grupo"} underlayColor="#f0f4f7">
          <Text>Grupo</Text>
        </Link>
        <Link to={"/lista"} underlayColor="#f0f4f7">
          <Text>Lista de grupos</Text>
        </Link>
        <Route exact path="/" component={Login} />
        <Route path="/grupo" component={Grupo} />
        <Route path="/lista" component={Home} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20
  },
  header: {
    flexDirection: "row",
    textAlignVertical: "center",
    padding: 3
  },
  img: {
    height: 25,
    width: 25,
    margin: 3,
    marginVertical: 2
  }
});
