import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { style } from "../../components/background";

export default function TelaInicial({ navigation }) {
  return (
    <SafeAreaView style={style.background}>
      <View>
        <Image
          style={{
            height: 100,
            width: 200,
          }}
          source={require("../../assets/FoodMenu.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <Text>ou</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
