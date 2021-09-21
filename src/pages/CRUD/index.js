import React from "react";
import { View, Text, Button, TextInput } from "react-native";

import { style } from "../../components/background";
import api from "../../services/api";

export default function CRUD() {
  const handlePost = () => {
    api
      .post("ponto-turistico/", {
        nome: "Teste",
        descricao: "Teste descricao",
      })
      .then(({ data }) => console.log(data));
  };

  const handleDelete = () => {
    api.delete("ponto-turistico/8/").then(({ data }) => console.log(data));
  };

  const handleUpdate = () => {
    api
      .put("ponto-turistico/4/", {
        nome: "Mariano",
        descricao: "O cara mais bonito do grupo",
      })
      .then(({ data }) => console.log(data));
  };

  return (
    <View style={style.background}>
      <Button
        title="Adicionar a API"
        color="#FB6400"
        onPress={() => handlePost()}
      />

      <Button
        title="Remover da API"
        color="#FB6400"
        onPress={() => handleDelete()}
      />

      <Button
        title="Modificar dados na API"
        color="#FB6400"
        onPress={() => handleUpdate()}
      />
    </View>
  );
}
