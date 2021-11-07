import {
    Text,
    View,
    ScrollView,
} from "react-native";

import React, { useEffect,useState } from "react";
import {  MaterialCommunityIcons } from '@expo/vector-icons';
import {  useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

import styles from "./styles";
import api from "../../services/axios";

interface DetailsRouteParams {
    id: number;
}

interface PickedUsed{
    id: number;
    dateEntryPicket: String,
    dateExitPicket: String,
    picketID : number,
    cattleID : string,
    occupancyRate : number,
}

interface Cattle{
    id: number;
    name: string;
    breed: string; 
    status: boolean;
    initialWeight: number; 
    Weight: number;  
    dateOfBirth: Date;  
    sexo: string;
}

interface Farms {
    id: number;
    name: string;
    size: number;
    countFood: number;
    latitude: number;
    longitude: number;
}

const ManagePasture: React.FC = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const [ picket , setPicket ] = useState<PickedUsed[]>([]);
    const [ cattle , setCattle ] = useState<Cattle[]>([]);
    const [ farms , setFarms ] = useState<Farms[]>([]);

    const params = route.params as DetailsRouteParams;
    const now = new Date();

    let count = 0;

    useEffect(() => 
    {

      async function load() 
      {
        const response = await api.get("picketUsed");
     
        setPicket( response.data );
      }
  
      load();

    });

    useEffect(() => 
    {
  
      async function loadCattle() 
      {
        const response = await api.get("cattle");
  
        setCattle( response.data );
      }
  
      loadCattle();
  
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

    function handleNavigatCattleList()
    {
        alert( "ops!");
    }


    return (
        <View style = { styles.container } >
    
            <Text style = { styles.title }>Gerenciar Pasto</Text>

            <ScrollView style= { styles.scroll } >

                { picket.map(( picket ) => 
                {
                    if( picket.picketID === params.id )
                    {
                        count++; 
                        const cattkeObj =  cattle.find( cattle => cattle.name === picket.cattleID );
                        const picketObj =  farms.find( farms => farms.id === picket.picketID );

                        let sizePicket = picketObj?.size != null ? picketObj?.size : 0;

                        return( 
                            <View key = { picket.id } style = { styles.card } >
                                <View style = { styles.iconCard }>
                                    <MaterialCommunityIcons name = "cow" size={50} color="#000" /> 
                                </View>

                                <View style = { styles.cardBory }>
                                    <Text style = { styles.textCard }> Taxa de Ocupação : { ( 100 / ( sizePicket / ( 1 / picket.occupancyRate ) )  ).toFixed( 1 ) }% </Text>         
                                    <Text style = { styles.textCard }> Nome : { cattkeObj?.name } </Text>  
                                    <Text style = { styles.textCard }> Sexo : { cattkeObj?.sexo  == "m" ? "Masculino" : "Femenino" } </Text>         
                                    <Text style = { styles.textCard }> Raça : { cattkeObj?.breed } </Text>    
                                    <Text style = { styles.textCard }> Peso : { cattkeObj?.Weight } </Text>                             
                                </View>

                                <Text style = { styles.btnCard }  > Remover </Text>   
                            </View>
                        );   
                    }
                })}

            </ScrollView>

            <View style={styles.footer}>

                <Text style={styles.footerText}>
                    {  count } Gados(s) encontrado(s)
                </Text>

                <RectButton
                    style = {styles.addButton}
                    onPress = { handleNavigatCattleList }
                >
                    <Feather name="plus" size={20} color="#fff" />

                </RectButton>

            </View>

        </View>            
    );
};

export default ManagePasture;
    