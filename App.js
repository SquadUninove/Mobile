import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Qr, Cardapio, Comida, Crud, Edit } from "./src/services/routes";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Qr" component={Qr} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Comida" component={Comida} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
