import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { style } from "../../components/background";
import { estiloLogin } from "./styles";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={style.background}>
      <View>
        <Image
          style={estiloLogin.imagemLogo}
          source={require("../../assets/FoodMenu.png")}
        />

        <TextInput placeholder="Email" style={estiloLogin.textInput} />
        <TextInput placeholder="Senha" style={estiloLogin.textInput} />

        <TouchableOpacity>
          <Text style={estiloLogin.textoNormal}>Esqueceu senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estiloLogin.botaoAzul}
          onPress={() => navigation.navigate("Qr")}
        >
          <Text style={estiloLogin.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={estiloLogin.textoNormal}>ou</Text>

        <TouchableOpacity>
          <Text>Entrar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Entrar com Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
