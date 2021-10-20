import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Switch,
} from "react-native";

import DatePicker from 'react-native-datepicker'
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
    const nameCattle = ( name === "" ? breed +  Math.floor( Math.random() * 10000 + 256 ) : name );

    const typePiquet =  farms.find( farms => farms.id === parseInt( farm ) );
    const amountOffood = typePiquet?.countFood;

    const typeBreed =  breeds.find( breeds => breeds.name === breed );
    const consumptionBreed = typeBreed?.consumption;

    const occupancyRate =  ( amountOffood != null ? amountOffood : 0 ) / ( consumptionBreed != null ? consumptionBreed : 0 );

    data.append("name", String( nameCattle ) );
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
    data.append("farm" , String( farm ) );
    data.append("occupancyRate", String( occupancyRate.toFixed( 1 ) ) );
  

    
    const resp = await api.post("cattle", { data } );

    if( resp.status == 201 )
    {    
       alert( "Cadastro efetuado!" );
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
      
      {/* <TextInputMask
         type={'datetime'}
         options = {{
          format: 'DD/MM/YYYY'
         }}
         style={ styles.input }
         value={ idade }
         onChangeText = { setIdade }
      /> */}

        <DatePicker
          style={{width: 350, marginBottom: 16, marginTop: 12 }}
          date={ idade }
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1980"
          maxDate="31-12-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderColor: "#d3e2e6",
              backgroundColor: "#fff",
              borderWidth: 1.8,
              borderRadius: 20,
              height: 50,
            }
        }}
        onDateChange={ setIdade }
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
      
      <DatePicker
          style={{width: 350, marginBottom: 16, marginTop: 12 }}
          date={ datePurchase }
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2021"
          maxDate="31-12-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderColor: "#d3e2e6",
              backgroundColor: "#fff",
              borderWidth: 1.8,
              borderRadius: 20,
              height: 50,
            }
        }}
        onDateChange={ setDatePurchase }
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

      <Picker  style={styles.picker}
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
