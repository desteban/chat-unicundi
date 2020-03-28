import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { SvgUri } from "react-native-svg";

import Home from "./containers/Home";
import Grupo from "./containers/Grupo";
import Login from "./containers/Login";
import Header from "./components/Header";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />
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
    backgroundColor: "#F9F9F9"
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
