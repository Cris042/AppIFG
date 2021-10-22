import {
  ScrollView,
  Text,
  TextInput,
  View,
  Switch,
  Linking,
} from "react-native";

import React, { useEffect,useState } from "react";
import MapView, { Marker } from "react-native-maps";

import { RectButton } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from "./styles";
import api from "../../services/axios";

import mapMaker from "../../images/map-marker.png";

interface DetailsRouteParams {
  id: number;
}

interface Farms {
  id: number;
  name: string;
  type: string;
  size: any;
  latitude: number;
  longitude: number; 
  status: string;
}

export default function FazendaEdit()
{
  const route = useRoute();
  const navigation = useNavigation();

  const [ Farm, setFarms ] = useState<Farms>();

  const params = route.params as DetailsRouteParams;

  useEffect(() => {
    async function loadOrphanage() 
    {
      const response = await api.get( `farms/${params.id}` );
      setFarms( response.data );
    }

    loadOrphanage();
  }, [ params.id ] );

  if (!Farm) 
  {
    return (
      <View style = { styles.container } >
        <Text style = { styles.title }>Carregando...</Text>
      </View>
    );
  }
 
  async function handleEdit() 
  {  
    alert("Ops!")
  } 

  function handleManagePasture()
  {
     navigation.navigate("ManagePasture");
  }

  return (
      <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
      >
        <Text style={styles.title}> { Farm.name } </Text>

        <RectButton style={styles.button} onPress={ handleManagePasture  }>
          <MaterialCommunityIcons name = "cog-outline" size = { 35 } color="#000" /> 
        </RectButton>

        <View style={styles.mapView}>
          <MapView
              initialRegion={{
                latitude: Farm.latitude,
                longitude: Farm.longitude,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }}
              zoomEnabled={false}
              pitchEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
              style={ styles.map }
            >
              <Marker
                icon={ mapMaker }
                coordinate={{
                  latitude: Farm.latitude,
                  longitude: Farm.longitude,
                }}
              />

          </MapView>
        </View>

        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} value = { Farm.name } placeholder = "Nome do pasto ( Minimo 3 letras )"  />

        <Text style={styles.label}>Tamanho em hectares</Text>
        <TextInput style={styles.input} value = "123"  keyboardType = "numeric"  placeholder = "Tamanho do pasto" />

        <Text style={styles.label}>Tipo</Text>

        <Picker mode = "dropdown"  style={styles.picker} >
          <Picker.Item  label="Java" value= { Farm.type } />
          <Picker.Item  label="Java" value="java" />
          <Picker.Item  label="JavaScript" value="js" />
        </Picker>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>O pasto esta disponivel ?</Text>
          <Switch
            thumbColor="#fff"
            trackColor={{ false: "#ccc", true: "#39CC83" }}
          />
        </View>

        <RectButton style={styles.nextButton} onPress={ handleEdit  }>
          <Text style={styles.nextButtonText}> Editar </Text>
        </RectButton>

    </ScrollView>
    );
}
