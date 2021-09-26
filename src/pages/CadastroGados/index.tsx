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
interface Farms 
{
  id: number;
  name: string;
  size: number;
  countFood: number;
  latitude: number;
  longitude: number;
}

interface Cattle
{
  id: number;
  name: string;
  breed: string; 
  status: boolean;
  initialWeight: number; 
  Weight: number;  
  dateOfBirth: Date;  
}

export default function Data() {
  const navigation = useNavigation();
  const route = useRoute();

  // cadastro o piketUsed
  // gerar a quantidade estimada da capacidade de gados
  // gerar a quantidade estimada da forragem do piket

  const [ name, setName ] = useState("");
  const [ count, setCount ] = useState("");
  const [ breed, setBreed ] = useState("");
  const [ status, setStatus ] = useState("a");
  const [ peso, setPeso ] = useState("");
  const [ purchaseValue, setPurchaseValue ] = useState("");
  const [ datePurchase, setDatePurchase ] = useState("");
  const [ idade, setIdade ] = useState("");
  const [ sexo, setSexo ] = useState("m");
  const [ node, setNode ] = useState("");
  const [ matriz, setMatriz ] = useState("-1");
  const [ brinco, setBrinco ] = useState("");
  const[  farm , setFarm ] = useState("-1");

  const [ breeds, setBreeds ] = useState<Breed[]>([]);
  const [ farms , setFarms ] = useState<Farms[]>([]);
  const [ cattle , setCattle ] = useState<Cattle[]>([]);


  useEffect(() => 
  {
    async function load() 
    {
      const response = await api.get("breed");

      setBreeds( response.data );
    }

    load();

  }, []);

  useEffect(() => 
  {

    async function loadPiket() 
    {
      const response = await api.get("picket");

      setFarms( response.data );
    }

    loadPiket();

  }, []);

  useEffect(() => 
  {

    async function loadCattle() 
    {
      const response = await api.get("cattle");

      setCattle( response.data );
    }

    loadCattle();

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
    data.append("sexo", String( sexo ) );
    data.append("node", String( node === "" ? "null" : node ) );
    data.append("brinco", String( brinco === "" ? "-1" : brinco ) );
    data.append("matriz", String( matriz ) );
    data.append("count", String( count ) );

    const resp = await api.post("cattle", { data } );

    if( resp.status == 201 )
    {
      alert( "Cadastro efetuado!!" );
      navigation.navigate("ListarGados");
    }
    else
      alert("Ops! Ocorreu um error na hora do cadastro, verifique se todos campos foram preencidos.");
  
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
         onChangeText = { setName } 
       />

      <Text style={styles.label}> Numero de gados ( Opcional, O nome dos gados serão gerado automaticamente ) </Text>

      <TextInput 
        style={styles.input} value = { count }   
        keyboardType = "numeric"
        onChangeText = { setCount } 
      /> 

      <Text style={styles.label}> Peso em kilos </Text>
      
      <TextInput 
         style={styles.input} value = { peso }  
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

      <Text style={styles.label}> Numero do Brinco ( Opcional) </Text>

      <TextInput 
         style={styles.input} value = { brinco }  
         keyboardType = "numeric"
         onChangeText = { setBrinco } 
       /> 

      <Text style={styles.label}> Informaçao Opcional ( Opcional) </Text>

      <TextInput 
        style={styles.input} value = { node }  
        onChangeText = { setNode } 
      /> 

      <Text style={styles.label}> Valor da compra ( Opcional ) </Text>
      
      <TextInput 
         style={styles.input} value = { purchaseValue }  
         keyboardType = "numeric"
         onChangeText = { setPurchaseValue } 
       /> 

      <Text style={styles.label}> Data da compra ( Opcional ) </Text>
      
      <TextInputMask
         type={'datetime'}
         options = {{
          format: 'DD/MM/YYYY'
         }}
         style={ styles.input }
         value={ datePurchase }
         onChangeText = { setDatePurchase }
      />

      <Text style={styles.label}>Pasto ( Opcional ) </Text>

      <Picker mode = "dropdown"  style={styles.picker}
        selectedValue = { farm }
        onValueChange={ ( itemValue, itemIndex ) =>
          setFarm( itemValue )
        }>

          <Picker.Item label = "Escolhar uma Pasto" value = "-1" />
          { farms.map(( farm ) => 
          {
              return (
                <Picker.Item key = { farm.id } label = { farm.name } value = { farm.id } />
              );
          })}
        

      </Picker>

      <Text style={styles.label}> Matriz ( Opcional ) </Text>

      <Picker mode = "dropdown"  style={styles.picker}
        selectedValue = { matriz }
        onValueChange={ ( itemValue, itemIndex ) =>
          setMatriz( itemValue )
        }>

          <Picker.Item label = "Escolhar uma Matriz" value = "-1" />
          {  cattle.map(( cattle ) => 
          {
              return (
                <Picker.Item key = { cattle.id } label = { cattle.name } value = { cattle.id } />
              );
          })}
          
      </Picker>
     
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

      <Text style={styles.label}> Sexo </Text>

      <Picker mode = "dropdown"  style={styles.picker}
        selectedValue = { sexo }
        onValueChange={ ( itemValue, itemIndex ) =>
          setSexo( itemValue )
        }>

          <Picker.Item label = "Macho" value = "m" />
          <Picker.Item label = "Fêmea" value = "f" />
        
      </Picker>

      <Text style={styles.label}> Status </Text>

      <Picker mode = "dropdown"  style={styles.picker}
        selectedValue = { status }
        onValueChange={ ( itemValue, itemIndex ) =>
          setStatus( itemValue )
        }>
    
          <Picker.Item label = "Ativo" value = "a" />
          <Picker.Item label = "Emprestado" value = "e" />   
          <Picker.Item label = "Locado" value = "l" />
          <Picker.Item label = "Morto" value = "m" />
        
      </Picker>
 
      <RectButton style={styles.nextButton} onPress={ handleCreate }>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>

    </ScrollView>
  );
}
