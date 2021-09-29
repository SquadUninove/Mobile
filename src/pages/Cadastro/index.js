import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Checkbox,
  Image,
} from "react-native";
import { style } from "../../components/background";
import { estiloCadastro } from "./styles";

export default function Cadastro({ navigation }) {
  return (
    <SafeAreaView style={style.background}>
      <View>
        <Image
          style={estiloCadastro.imagemLogo}
          source={require("../../assets/FoodMenu.png")}
        />
        <View style={estiloCadastro.backgroundTextInput}>
          <TextInput
            placeholder="Nome"
            style={estiloCadastro.textInput}
          ></TextInput>

          <TextInput
            placeholder="Email"
            style={estiloCadastro.textInput}
          ></TextInput>

          <TextInput
            placeholder="CPF"
            style={estiloCadastro.textInput}
          ></TextInput>

          <TextInput
            placeholder="Senha"
            style={estiloCadastro.textInput}
          ></TextInput>

          <TextInput
            placeholder="Confirmar Senha"
            style={estiloCadastro.textInput}
          ></TextInput>

          <View style={estiloCadastro.viewCadastrar}>
            <Text style={estiloCadastro.textoNormal}>Confirmar Email</Text>
            <Text style={estiloCadastro.textoNormal}>
              Li e Aceito os Termos
            </Text>

            <TouchableOpacity
              style={estiloCadastro.botaoLaranja}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={estiloCadastro.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
