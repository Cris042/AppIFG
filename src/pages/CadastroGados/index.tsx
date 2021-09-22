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
import { TextInputMask } from 'react-native-masked-text';

import styles from "./styles";
import api from "../../services/axios";

interface Breed
{
  id: number;
  name: string;
  consumption: number;
}

export default function Data() {
  const navigation = useNavigation();
  const route = useRoute();

  const [ name, setName ] = useState("");
  const [ breed, setBreed ] = useState("Java");
  const [ status, setStatus ] = useState( true );
  const [ peso, setPeso ] = useState("");
  const [ purchaseValue, setPurchaseValue ] = useState("");
  const [ datePurchase, setDatePurchase ] = useState("");
  const [ idade, setIdade ] = useState("");
  const [ breeds, setBreeds ] = useState<Breed[]>([]);

  useEffect(() => 
  {
    async function load() 
    {
      const response = await api.get("breed");

      setBreeds( response.data );
    }

    load();

  }, []);
 

  async function handleCreate() 
  {

    const data = new FormData();

    data.append("name", String( name === "" ? breed +  Math.floor( Math.random() * 10000 + 1000 ) : name ) );
    data.append("breed", String( breed ) );
    data.append("status",  String( status ) );
    data.append("initialWeight", String( peso ));
    data.append("peso", String( peso ) );
    data.append("purchaseValue",  String( purchaseValue === "" ? "0" : purchaseValue ) );
    data.append("datePurchase", String( datePurchase === "" ? idade : datePurchase ) );
    data.append("idade",  String( idade ) );

    const resp = await api.post("cattle", { data } );

    if( resp.status == 201 )
    {
      alert( "Cadastro efetuado!!" );
      navigation.navigate("ListarGados");
    }
    else
      alert("Ops!. Ocorreu um error na hora do cadastro, verifique se todos campos foram preencidos.");
   
  } 

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text style={styles.title}>Cadastro de Gado</Text>

      <Text style={styles.label}>Nome ( O nome será gerado automaticamente caso deixer o campo vazio ) </Text>
      
      <TextInput 
         style={styles.input} value = { name }  
         placeholder = "Nome" 
         onChangeText = { setName } 
       />

      <Text style={styles.label}> Peso em kilos </Text>
      
      <TextInput 
         style={styles.input} value = { peso }  
         placeholder = "peso" 
         keyboardType = "numeric"
         onChangeText = { setPeso } 
       /> 

      <Text style={styles.label}> Data de Nacimento </Text>
      
      <TextInputMask
         type={'datetime'}
         options = {{
          format: 'DD/MM/YYYY'
         }}
         style={ styles.input }
         value={ idade }
         onChangeText = { setIdade }
      />


      <Text style={styles.label}> Valor da compra ( Não e obrigatorio ) </Text>
      
      <TextInput 
         style={styles.input} value = { purchaseValue }  
         placeholder = "Valor da compra" 
         onChangeText = { setPurchaseValue } 
       /> 

      <Text style={styles.label}> Data da compra ( Não e obrigatorio ) </Text>
      
      <TextInputMask
         type={'datetime'}
         options = {{
          format: 'DD/MM/YYYY'
         }}
         style={ styles.input }
         value={ datePurchase }
         onChangeText = { setDatePurchase }
      />


      <Text style={styles.label}>Raça</Text>

      <Picker mode = "dropdown"  style={styles.picker}
        selectedValue = { breed }
        onValueChange={ ( itemValue, itemIndex ) =>
          setBreed( itemValue )
        }>

        { breeds.map(( breed ) => 
        {
            return (
              <Picker.Item key = { breed.id } label = { breed.name } value = { breed.name } />
            );
        })}

      </Picker>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>O gado esta disponivel ?</Text>
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
