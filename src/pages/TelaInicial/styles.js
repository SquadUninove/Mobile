import React from "react";
import { StyleSheet } from "react-native";

const estiloInicial = StyleSheet.create({
  imagemLogo: {
    height: 300,
    width: 300,
    marginBottom: 10,
  },

  botaoAzul: {
    backgroundColor: "#008E97",
    borderRadius: 20,
    marginBottom: 10,
  },

  botaoLaranja: {
    backgroundColor: "#F58220",
    borderRadius: 20,
    marginTop: 10,
  },

  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "",
  },

  textoNormal: {
    textAlign: "center",
    color: "rgba(0,0,0,0.5)",
    fontSize: 15,
  },
});

export { estiloInicial };
