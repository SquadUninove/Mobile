import React from "react";
import { StyleSheet } from "react-native";

const estiloCadastro = StyleSheet.create({
  imagemLogo: {
    height: 200,
    width: 250,
  },

  textInput: {
    height: 30,
    borderRadius: 7,
    marginTop: 10,
    marginLeft: 5,
    fontSize: 15,
    color: "#FFF",
  },

  backgroundTextInput: {
    backgroundColor: "#008E97",
    borderRadius: 7,
    width: 250,
  },

  textoNormal: {
    marginTop: 20,
    color: "#FFF",
    textAlign: "center",
  },

  botaoLaranja: {
    backgroundColor: "#F58220",
    borderRadius: 20,
    marginTop: 10,
    width: 150,
    marginBottom: 10,
  },

  textoBotao: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
  },

  viewCadastrar: {
    alignItems: "center",
  },
});

export { estiloCadastro };
