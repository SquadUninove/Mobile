import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { style } from "../../components/background";

export default function Qr({ navigation }) {
  return (
    <SafeAreaView style={style.background}>
      <View style={style.background}>
        <TouchableOpacity onPress={() => navigation.navigate("Cardapio")}>
          <Image source={require("../../assets/camera.png")} />
        </TouchableOpacity>
        <Text>Clique no icone acima para ler o QR Code de sua mesa</Text>
      </View>
    </SafeAreaView>
  );
}
