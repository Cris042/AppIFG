import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

import MapView, { Callout,Marker,PROVIDER_GOOGLE, Circle } from "react-native-maps";
import * as Progress from 'react-native-progress';

import * as Location from "expo-location";
import { Feather } from "@expo/vector-icons";

import {  useFocusEffect, useNavigation } from "@react-navigation/native";

import mapMaker from "../../images/map-marker.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import api from "../../services/axios";

interface Farms {
  id: number;
  name: string;
  size: number;
  countFood: number;
  latitude: number;
  longitude: number;
}

interface PickedUsed{
  dateEntryPicket: String,
  dateExitPicket: String,
  picketID : number,
  cattleID : string,
}

export default function Map() 
{
    const navigation = useNavigation();
    const [ farms , setFarms ] = useState<Farms[]>([]);
    const [ pickedUsed , setPicketUsed ] = useState<PickedUsed[]>([]);
    let count = 0;

    const [initialPosition, setInitialPosition] = useState({
      latitude: -16.81508090497519,
      longitude: -48.02909970297907,
    });

    useEffect(() => 
    {
      
      async function loadPosition() 
      {
          const { status } = await Location.requestForegroundPermissionsAsync();

          if (status !== "granted") 
          {
              Alert.alert(
                "Ops!",
                "Precisamos de sua permissão para obter a localização."
              );

              return;
          }

          // const location = await Location.getCurrentPositionAsync();

          // const { latitude, longitude } = location.coords;

          // alert( initialPosition.latitude );

          // setInitialPosition( { latitude, longitude } );
      }

      loadPosition();

    }, []);

    useFocusEffect(() => 
    {

      async function load() 
      {
        const response = await api.get("picket");
        const picketUsedCount = await api.get("picketUsed");
       
        setPicketUsed( picketUsedCount.data );
        setFarms( response.data );
      }
      
      load();

    });

  
  function handleNavigatFarmDetails( id: number ) 
  {
      navigation.navigate("FazendaEdit", { id } );
  }
  
  function handleNavigateToCreateFarms() 
  {
     navigation.navigate("SelectMapPosition", { initialPosition });
  }
  
  return (
    <View style={styles.container}>
      {initialPosition.latitude !== 0 && (

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          loadingEnabled={initialPosition.latitude === 0}
          initialRegion={{
            latitude: initialPosition.latitude,
            longitude: initialPosition.longitude,
            latitudeDelta: 0.010,
            longitudeDelta: 0.010,
          }}
        >
          { farms.map(( farm ) => 
          { 

            { count == 0 ? count = count : count = 0 }
            return (
              <Marker
                key={ farm.id }
                icon={mapMaker}

                calloutAnchor={{
                  x: 0.75,
                  y: -0.1,
                }}

                coordinate={{
                    latitude: farm.latitude,
                    longitude: farm.longitude,
                }}
              >
                <Callout
                    tooltip
                    onPress={() => handleNavigatFarmDetails( farm.id )}
                >
    
                    <View style={styles.calloutContainer}>
                      <Text style={styles.calloutText}> Nome : { farm.name }</Text>
                      <Text style={styles.calloutText}> Capacidade :            
                        { pickedUsed.map(( picket ) => { picket.picketID === farm.id? count++ : count = count } ) } 
                        { count } /
                        { ( ( farm.countFood * farm.size ) / 4501 ).toFixed( 0 ) } 
                      </Text>
                      <Text style={styles.calloutText}> Quantiade de Forragem</Text>
                      <Progress.Bar  progress={0.5} width={180} color="#3FC71D" /> 
                    </View>

                </Callout>
              </Marker>
            );

          })}

        </MapView>

      )}

       <View style={styles.footer}>

        <Text style={styles.footerText}>
          { farms.length } Pasto(s) encontrado(s)
        </Text>

      

        <RectButton
          style={styles.createOrphanageButton}
          onPress={ handleNavigateToCreateFarms }
        >
          <Feather name="plus" size={20} color="#fff" />

        </RectButton>

       </View>

    </View>

  );
}
