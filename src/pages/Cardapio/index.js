import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import api from "../../services/api";
import { style } from "../../components/background";

const Cardapio = ({ navigation }) => {
  const [pontosTuristicos, setPontosTuristicos] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [displayQR, setDisplayQR] = useState("flex");

  //API
  useEffect(() => {
    getPontosTuristicos();
  }, []);

  function getPontosTuristicos() {
    api.get("ponto-turistico/").then((response) => {
      setPontosTuristicos(response.data);
    });
  }

  //Leitura QR Code
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
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate("Comida", { item })}
          >
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button
        title="CRUD"
        color="#FB6400"
        onPress={() => navigation.navigate("Crud")}
      />
    </SafeAreaView>
  );
};
export default Cardapio;
