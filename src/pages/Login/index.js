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

export default function Login({ navigation }) {
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
        <TextInput style={{ borderWidth: 1 }} />
        <TextInput style={{ borderWidth: 1 }} />
        <TouchableOpacity>
          <Text>Esqueceu senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Qr")}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <Text>ou</Text>
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
