import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import api from "../../services/api";

import { style } from "../../components/background";

const Cardapio = ({ navigation }) => {
  //API

  const [pontosTuristicos, setPontosTuristicos] = useState([]);

  useEffect(() => {
    getPontosTuristicos();
  }, []);

  function getPontosTuristicos() {
    api.get("ponto-turistico/").then((response) => {
      setPontosTuristicos(response.data);
    });
  }

  //Leitura QR Code
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [displayQR, setDisplayQR] = useState("flex");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  async function handleBarCodeScanned({ type, data }) {
    setScanned(true);
    alert(`Você está na mesa ${data}`);
    setDisplayQR("none");
  }

  return (
    <SafeAreaView style={style.background}>
      <BarCodeScanner
      /* Comentario para a melhora de navegação no Emulador, tirar depois
                onBarCodeScanned={scanned? undefined : value=> handleBarCodeScanned(value)}
                style={css.qr__code(displayQR)}
                */
      />

      <View style={style.background}>
        {pontosTuristicos.map((item) => (
          <TouchableOpacity key={item.id}>
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default Cardapio;
