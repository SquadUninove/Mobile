import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { style } from "../../components/background";
import api from "../../services/api";

export default function CRUD({ navigation }) {
  const [pontosTuristicos, setPontosTuristicos] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    getPontosTuristicos();
  }, []);

  function getPontosTuristicos() {
    api.get("ponto-turistico/").then((response) => {
      setPontosTuristicos(response.data);
    });
  }

  const handlePost = () => {
    api
      .post("ponto-turistico/", { nome, descricao })
      .then(({ data }) => console.log(data));
  };

  return (
    <View>
      {pontosTuristicos.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("edit", { item })}
        >
          <Text>{item.nome}</Text>
        </TouchableOpacity>
      ))}

      <Text style={{ marginTop: 40 }}>NOME:</Text>
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

      <Button
        title="Adicionar a API"
        color="#FB6400"
        onPress={() => handlePost()}
      />
    </View>
  );
}
