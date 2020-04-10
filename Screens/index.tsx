import React from 'react';
import Screen from './Screen';

export const HomeScreen = ({ navigation }) => <Screen navigation={navigation} nombre="Home" />;
export const GrupoScreen = ({ navigation }) => <Screen navigation={navigation} nombre="Grupo" />;
export const LoginScreen = ({ navigation }) => <Screen navigation={navigation} />;
export const PerfilScreen = ({ navigation }) => <Screen navigation={navigation} nombre="Perfil" />;
