import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from "react-native";
import { style } from "../../components/background";
import { estiloLogin } from "./styles";
import api from "../../services/api";

export default function Login({ navigation }) {
  state = {
    errorMessage: null,
  };

  signIn = async () => {
    try {
      const response = await api.post("", {
        email: "",
        password: "",
      });

      const { user, token } = response.data;

      await AsyncStorage.multiSet([
        ["@CodeApi:token", token],
        ["@CodeApi:user", JSON.stringify(user)],
      ]);
      Alert.alert("Login com sucesso!");
    } catch (response) {
      this.setState({ errorMessage: response.data.error });
    }
  };

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
          onPress={this.signIn}
        >
          <Text style={estiloLogin.textoBotao}>Entrar</Text>
        </TouchableOpacity>
        {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}

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
