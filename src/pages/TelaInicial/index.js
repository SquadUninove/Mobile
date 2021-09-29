import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { style } from "../../components/background";
import { estiloInicial } from "./styles";

export default function TelaInicial({ navigation }) {
  return (
    <SafeAreaView style={style.background}>
      <View>
        <Image
          style={estiloInicial.imagemLogo}
          source={require("../../assets/FoodMenu.png")}
        />

        <TouchableOpacity
          style={estiloInicial.botaoAzul}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={estiloInicial.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={estiloInicial.textoNormal}>ou</Text>

        <TouchableOpacity
          style={estiloInicial.botaoLaranja}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={estiloInicial.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
