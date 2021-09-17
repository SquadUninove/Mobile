import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FEC456",
    alignItems: "center",
    justifyContent: "center",
  },

  qr__code: (display = "flex") => ({
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    display: display,
  }),
});

export { style };
