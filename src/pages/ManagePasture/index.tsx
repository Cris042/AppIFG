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

import styles from "./styles";
import api from "../../services/axios";

interface PickedUsed{
    id: number;
    dateEntryPicket: String,
    dateExitPicket: String,
    picketID : number,
    cattleID : string,
    occupancyRate : number,
}

const ManagePasture: React.FC = () => {

    const navigation = useNavigation();
    const [ cattle , setCattle ] = useState<PickedUsed[]>([]);

    const now = new Date();

    useEffect(() => 
    {

      async function load() 
      {
        const response = await api.get("picketUsed");
  
        setCattle( response.data );
      }
  
      load();

    });

    function handleNavigatCattleList()
    {
        navigation.navigate("CadastarGados");
    }


    return (
        <View style = { styles.container } >
    
            <Text style = { styles.title }>Gados</Text>

            <ScrollView style= { styles.scroll } >

                { cattle.map(( cattle ) => 
                {
                    return( 
                        <View key = { cattle.id } style = { styles.card } >
                            <View style = { styles.iconCard }>
                                <MaterialCommunityIcons name = "cow" size={50} color="#000" /> 
                            </View>

                            <View style = { styles.cardBory }>
                                <Text style = { styles.textCard }> Nome : { cattle.cattleID } </Text>  
                                <Text style = { styles.textCard }> Raça : { cattle.dateEntryPicket } </Text>    
                                <Text style = { styles.textCard }> Peso : { cattle.occupancyRate } </Text> 
                                <Text style = { styles.textCard }> Sexo : { cattle.picketID } </Text>               
                            </View>

                            <Text style = { styles.btnCard }  > Editar Gado </Text>   
                        </View>
                    );   
                })}

            </ScrollView>

            <View style={styles.footer}>

                <Text style={styles.footerText}>
                    { cattle.length } Gados(s) encontrado(s)
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
    