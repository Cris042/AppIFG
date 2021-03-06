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
  occupancyRate : number,
}

export default function Map() 
{
    const navigation = useNavigation();
    const [ farms , setFarms ] = useState<Farms[]>([]);
    const [ pickedUsed , setPicketUsed ] = useState<PickedUsed[]>([]);
    
    let count = 0;

    const [initialPosition, setInitialPosition] = useState({
      latitude: 0,
      longitude: 0,
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

          const location = await Location.getCurrentPositionAsync();

          const { latitude, longitude } = location.coords;

          setInitialPosition( { latitude, longitude } );

          const picketUsedCount = await api.get("picketUsed");
       
          setPicketUsed( picketUsedCount.data );
      }

      loadPosition();

    }, []);

    useFocusEffect(() => 
    {

      async function load() 
      {
        const response = await api.get("picket");
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

            { count = 0 }
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
                      <Text style={styles.calloutText}> Hectares Ocupados </Text>
                      <Text style={styles.calloutText}>       
                        { pickedUsed.map(( picket ) => { picket.picketID === farm.id ? count = count + ( 1 / picket.occupancyRate ) : 0 } ) } 
                        { count != 0 ? count.toFixed( 1 ) : 0 } de  
                        { farm.size }
                      </Text>
                      <Progress.Bar  progress={ count != 0 ? count  * 0.10 : 0 } width = { 180 }  color="#3FC71D" /> 
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