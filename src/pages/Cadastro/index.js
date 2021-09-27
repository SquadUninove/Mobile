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

export default function Cadastro({ navigation }) {
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
        <TextInput style={{ borderWidth: 1 }}></TextInput>
        <TextInput style={{ borderWidth: 1 }}></TextInput>
        <TextInput style={{ borderWidth: 1 }}></TextInput>
        <TextInput style={{ borderWidth: 1 }}></TextInput>
        <TextInput style={{ borderWidth: 1 }}></TextInput>

        <Text>Confirmar Email</Text>
        <Text>Li e Aceito os Termos</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
