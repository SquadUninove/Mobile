import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Qr from "./src/pages/Qr";
import Cardapio from "./src/pages/Cardapio";
import Comida from "./src/pages/Comida";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Qr" component={Qr} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Comida" component={Comida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
