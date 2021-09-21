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

interface Cattle{
    id: number;
    name: string;
    breed: string; 
    status: boolean;
    initialWeight: number; 
    Weight: number;  
    dateOfBirth: Date;  
}

const CatleList: React.FC = () => {

    const navigation = useNavigation();
    const [ cattle , setCattle ] = useState<Cattle[]>([]);

    const now = new Date();

    useEffect(() => 
    {

      async function loadOrphanages() 
      {
        const response = await api.get("cattle");
  
        setCattle( response.data );
      }
  
      loadOrphanages();

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
                                <Text style = { styles.textCard }> Nome : { cattle.name } </Text>  
                                <Text style = { styles.textCard }> Peso : { cattle.Weight } </Text> 
                                <Text style = { styles.textCard }> Idade :  10 anos </Text>                 
                                <Text style = { styles.textCard }> Pasto : pasto01 </Text> 
                                <Text style = { styles.textCard }> Raça : { cattle.breed } </Text>    
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

export default CatleList;
    