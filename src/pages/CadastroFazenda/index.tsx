import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
} from "react-native";

import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../services/axios";


interface DataRouteParams 
{
  position: 
  {
    latitude: number;
    longitude: number;
  };
}

export default function Data() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as DataRouteParams;

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
 

  async function handleCreate() 
  {
    const { latitude, longitude } = params.position;

    const data = new FormData();

    data.append("name", name );
    data.append("countFood", String( 0 ) );
    data.append("type", String( type ) );
    data.append("size", String( size ) );
    data.append("latitude", String( latitude ) );
    data.append("longitude", String( longitude ) );
    data.append("status",  String( 0 ) );

    await api.post("orphanages", { data });
    navigation.navigate("CadastroFazenda");
  } 

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value = { name } onChangeText = { setName } />

      <Text style={styles.label}>Tamanho em hectares</Text>
      <TextInput style={styles.input} value = { size } onChangeText = { setSize } />

      <Text style={styles.label}>Tipo</Text>
      <TextInput style={styles.input} value = { type } onChangeText = { setType } />
      
      <RectButton style={styles.nextButton} onPress={ handleCreate }>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>

    </ScrollView>
  );
}
