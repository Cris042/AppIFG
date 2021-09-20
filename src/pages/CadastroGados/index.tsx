import React, { useState } from "react";
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
import DatePicker from 'react-native-datepicker';

import styles from "./styles";
import api from "../../services/axios";


export default function Data() {
  const navigation = useNavigation();
  const route = useRoute();

  const [ name, setName ] = useState("");
  const [ breed, setBreed ] = useState("Java");
  const [ status, setStatus ] = useState( true );
  const [ peso, setPeso ] = useState("");
  const [ purchaseValue, setPurchaseValue ] = useState("");
  const [ datePurchase, setDatePurchase ] = useState( new Date() );
  const [ idade, setIdade ] = useState("");
 

  async function handleCreate() 
  {
    
    const data = new FormData();

    data.append("name", name );
    data.append("breed", String( breed ) );
    data.append("status",  String( status ) );
    data.append("initialWeight", String( peso ));
    data.append("peso", String( peso ) );
    data.append("purchaseValue",  String( purchaseValue ) );
    data.append("datePurchase", String( datePurchase ) );
    data.append("idade",  String( idade ) );

    const resp = await api.post("cattle", { data } );

    if( resp.status == 201 )
    {
      alert( "Cadastro efetuado!!" );
      navigation.navigate("CadastroGado");
    }
    else if ( resp.status == 400 )
      alert("Ops!. Ocorreu um error na hora do cadastro, verifique se todos campos foram preencidos.");
    else
      alert("Ops!. Ja existe um pasto com esse nome!")
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

      <Text style={styles.label}> Peso em kilos( Não e obrigatorio ) </Text>
      
      <TextInput 
         style={styles.input} value = { peso }  
         placeholder = "peso" 
         onChangeText = { setPeso } 
       /> 

      <Text style={styles.label}> Idade em meses ( Não e obrigatorio ) </Text>
      
      <TextInput 
         style={styles.input} value = { idade }  
         placeholder = "idade" 
         onChangeText = { setIdade } 
       /> 

      <Text style={styles.label}> Valor da compra ( Não e obrigatorio ) </Text>
      
      <TextInput 
         style={styles.input} value = { purchaseValue }  
         placeholder = "Valor pago" 
         onChangeText = { setPurchaseValue } 
       /> 

      <Text style={styles.label}> Data da compra ( Não e obrigatorio ) </Text>
      
      <DatePicker date = { datePurchase } onDateChange={ ( date ) => {setDatePurchase } } /> 

      <Text style={styles.label}>Raça</Text>

      <Picker mode = "dropdown"  style={styles.picker}
        selectedValue = { breed }
        onValueChange={ ( itemValue, itemIndex ) =>
          setBreed( itemValue )
        }>

        <Picker.Item  label="Java" value="java" />
        <Picker.Item  label="JavaScript" value="js" />

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
