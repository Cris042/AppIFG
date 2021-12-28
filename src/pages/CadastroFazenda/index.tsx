import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Switch,
} from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import api from "../../services/axios";


interface DataRouteParams 
{
  position: 
  {
    latitude: number;
    longitude: number;
  };
}

interface Types 
{
  id: number;
  name: string;
  amountOffood: number;
}

export default function Data() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as DataRouteParams;

  const [ name, setName ] = useState("");
  const [ size, setSize ] = useState("");
  const [ type, setType ] = useState("");
  const [ types, setTypes ] = useState<Types[]>([]);
  const [ status, setStatus ] = useState( true );

 
  useEffect(() => 
  {
    async function load() 
    {
      const response = await api.get("types");

      setTypes( response.data );
    }

    load();

  }, []);

  async function handleCreate() 
  {
    const { latitude, longitude } = params.position;

    const typeID =  types.find( types => types.name === type );
    const amountOffood = typeID?.amountOffood;
  
    const data = new FormData();

    data.append("name", name );
    data.append("countFood", String( amountOffood ) );
    data.append("type", String( type ) );
    data.append("size", String( size ) );
    data.append("latitude", String( latitude ) );
    data.append("longitude", String( longitude ) );
    data.append("status",  String( status ) );

    const resp = await api.post("farms", { data } );

    if( resp.status == 201 )
    {
      alert( "Cadastro efetuado!!" );
      navigation.navigate("Home");
    }
    else 
      alert("Ops!. Ocorreu um error na hora do cadastro, verifique se todos campos foram preencidos.");
   
  } 

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text style={styles.title}>Cadastro de Pasto</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value = { name }  placeholder = "Nome do pasto ( Minimo 3 letras )" onChangeText = { setName } />

      <Text style={styles.label}>Tamanho em hectares</Text>
      <TextInput style={styles.input} value = { size }  keyboardType = "numeric"  placeholder = "Tamanho do pasto" onChangeText = { setSize } />

      <Text style={styles.label}>Tipo</Text>

      <Picker mode = "dropdown"  
        selectedValue = { type }
        onValueChange={ ( itemValue, itemIndex ) =>
          setType( itemValue )
        }>

        { types.map(( type ) => 
        {
            return (
              <Picker.Item key = { type.id } label = { type.name } value = { type.name } style={styles.picker} />
            );
        })}
       
      </Picker>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>O pasto esta disponivel ?</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: "#ccc", true: "#39CC83" }}
          value={ status }
          onValueChange={ setStatus }
        />
      </View>
      
      <RectButton style={styles.nextButton} onPress={ handleCreate }>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>

    </ScrollView>
  );
}
