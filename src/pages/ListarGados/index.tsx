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


const CatleList: React.FC = () => {

    return (
        <View style = { styles.container } >
    
            <Text style = { styles.title }>Gados</Text>

            <ScrollView style= { styles.scroll } >
                <View style = { styles.card } >
                    <View style = { styles.iconCard }>
                        <MaterialCommunityIcons name = "cow" size={50} color="#000" /> 
                    </View>

                    <View style = { styles.cardBory }>
                        <Text style = { styles.textCard }> Peso : 300 KG </Text> 
                        <Text style = { styles.textCard }> Idade : 10 Anos </Text>                 
                        <Text style = { styles.textCard }> Pasto ocupado: teste </Text> 
                        <Text style = { styles.textCard }> Raça : Nelore </Text>    
                        <Text style = { styles.textCard }> Nome : Pirulito </Text>    
                    </View>

                    <Text style = { styles.btnCard }> Editar Gado </Text>   
                </View>

                <View style = { styles.card } >
                    <View style = { styles.iconCard }>
                        <MaterialCommunityIcons name = "cow" size={50} color="#000" /> 
                    </View>

                    <View style = { styles.cardBory }>
                        <Text style = { styles.textCard }> Peso : 300 KG </Text> 
                        <Text style = { styles.textCard }> Idade : 10 Anos </Text>                 
                        <Text style = { styles.textCard }> Pasto ocupado: teste </Text> 
                        <Text style = { styles.textCard }> Raça : Nelore </Text>
                        <Text style = { styles.textCard }> Nome : Pirulito </Text>    
                    </View>

                    <Text style = { styles.btnCard }> Editar Gado </Text>   
                </View> 

                <View style = { styles.card } >
                    <View style = { styles.iconCard }>
                        <MaterialCommunityIcons name = "cow" size={50} color="#000" /> 
                    </View>

                    <View style = { styles.cardBory }>
                        <Text style = { styles.textCard }> Peso : 300 KG </Text> 
                        <Text style = { styles.textCard }> Idade : 10 Anos </Text>                 
                        <Text style = { styles.textCard }> Pasto ocupado: teste </Text> 
                        <Text style = { styles.textCard }> Raça : Nelore </Text>   
                        <Text style = { styles.textCard }> Nome : Pirulito </Text> 
                    </View>

                    <Text style = { styles.btnCard }> Editar Gado </Text>   
                </View>   

                 <View style = { styles.card } >
                    <View style = { styles.iconCard }>
                        <MaterialCommunityIcons name = "cow" size={50} color="#000" /> 
                    </View>

                    <View style = { styles.cardBory }>
                        <Text style = { styles.textCard }> Peso : 300 KG </Text> 
                        <Text style = { styles.textCard }> Idade : 10 Anos </Text>                 
                        <Text style = { styles.textCard }> Pasto ocupado: teste </Text> 
                        <Text style = { styles.textCard }> Raça : Nelore </Text>
                        <Text style = { styles.textCard }> Nome : Pirulito </Text>    
                    </View>

                    <Text style = { styles.btnCard }> Editar Gado </Text>   
                </View>      

                 <View style = { styles.card } >
                    <View style = { styles.iconCard }>
                        <MaterialCommunityIcons name = "cow" size={50} color="#000" /> 
                    </View>

                    <View style = { styles.cardBory }>
                        <Text style = { styles.textCard }> Peso : 300 KG </Text> 
                        <Text style = { styles.textCard }> Idade : 10 Anos </Text>                 
                        <Text style = { styles.textCard }> Pasto ocupado: teste </Text> 
                        <Text style = { styles.textCard }> Raça : Nelore </Text>    
                        <Text style = { styles.textCard }> Nome : Pirulito </Text>
                    </View>

                    <Text style = { styles.btnCard }> Editar Gado </Text>   
                </View>      
                               
            </ScrollView>

            <View style={styles.footer}>

                <Text style={styles.footerText}>
                   10 Gados(s) encontrado(s)
                </Text>

                <RectButton
                    style={styles.addButton}
                >
                    <Feather name="plus" size={20} color="#fff" />

                </RectButton>

            </View>

        </View>            
    );
};

export default CatleList;
    