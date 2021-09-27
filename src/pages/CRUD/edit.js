import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";

export default function edit({ navigation }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const route = useRoute();

  function Delete() {
    api.delete(`ponto-turistico/${route.params.item.id}/`);
    navigation.navigate("Qr");
  }

  function Update() {
    api.put(`ponto-turistico/${route.params.item.id}/`, { nome, descricao });
    navigation.navigate("Qr");
  }

  return (
    <View>
      <Text>Descrição do produto {route.params.item.id}</Text>
      <Text>NOME:</Text>
      <TextInput
        style={{ borderWidth: 2 }}
        value={nome}
        onChangeText={(textoNome) => setNome(textoNome)}
      />

      <Text style={{ marginBottom: 20 }}>{nome}</Text>

      <Text>DESCRIÇÃO:</Text>
      <TextInput
        style={{ borderWidth: 2 }}
        value={descricao}
        onChangeText={(textoDescricao) => setDescricao(textoDescricao)}
      />

      <Text style={{ marginBottom: 20 }}>{descricao}</Text>

      <Button title="Remover da API" color="#FB6400" onPress={() => Delete()} />

      <Button
        title="Modificar dados na API"
        color="#FB6400"
        onPress={() => Update()}
      />
    </View>
  );
}
