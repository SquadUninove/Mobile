import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, SafeAreaView } from "react-native";
import { style } from "../../components/background";
import { useRoute } from "@react-navigation/native";

export default function Comida() {
  const route = useRoute();
  const [quantity, setQuantity] = useState(0);

  return (
    <SafeAreaView style={style.background}>
      <View style={style.background}>
        <Image source={require("../../assets/bandeja.png")} />

        <Text>Descrição do produto {route.params.item.nome}</Text>

        <Text>Quantidade: {quantity}</Text>

        <View>
          <Button
            title="Adicionar"
            color="#FB6400"
            onPress={() => setQuantity(quantity + 1)}
          />

          <Button
            title="Remover"
            color="#FB6400"
            onPress={() => setQuantity(quantity - 1)}
          />

          <Button
            title="Adicionar ao carrinho"
            color="#FB6400"
            onPress={() => setQuantity(quantity == 0)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
