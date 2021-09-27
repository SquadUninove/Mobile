import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Qr from "./src/pages/Qr";
import Cardapio from "./src/pages/Cardapio";
import Comida from "./src/pages/Comida";
import Crud from "./src/pages/CRUD";
import Edit from "./src/pages/CRUD/edit";
import TelaInicial from "./src/pages/TelaInicial";
import Cadastro from "./src/pages/Cadastro";
import Login from "./src/pages/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Qr" component={Qr} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Comida" component={Comida} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
