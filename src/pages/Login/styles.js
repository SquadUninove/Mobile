import React from "react";
import { StyleSheet } from "react-native";

const estiloLogin = StyleSheet.create({
  imagemLogo: {
    height: 200,
    width: 250,
  },

  textInput: {
    width: 250,
    height: 40,
    backgroundColor: "#F58220",
    borderRadius: 7,
    marginTop: 20,
    fontSize: 15,
    paddingLeft: 7,
  },

  textoNormal: {
    textAlign: "center",
    color: "rgba(0,0,0,0.5)",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },

  botaoAzul: {
    backgroundColor: "#008E97",
    borderRadius: 20,
  },

  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
  },
});

export { estiloLogin };
