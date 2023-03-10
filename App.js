import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaCadastro from './telas/TelaCadastro';
import TelaCategorias from './telas/TelaCategorias';
import TelaRestaurantes from './telas/TelaRestaurantes';
import TelaCardapio from './telas/TelaCardapio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Categorias" component={TelaCategorias} />
        <Stack.Screen name="Restaurantes" component={TelaRestaurantes} />
        <Stack.Screen name="Cardapio" component={TelaCardapio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}