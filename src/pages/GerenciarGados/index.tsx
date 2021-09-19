import {
  Text,
  View,
} from "react-native";

import React, { useEffect,useState } from "react";
import {  MaterialCommunityIcons } from '@expo/vector-icons';
import {  useNavigation } from "@react-navigation/native";

import styles from "./styles";

const ChamanageCattle: React.FC = () => {

  const navigation = useNavigation();
  const [ isLoading, setLoading ] = useState( true );

  useEffect(() => 
  {
    setTimeout(() => 
    {
      setLoading( false );
    }, 500);

  }, []);  

  function handleNavigatCattleList()
  {
    navigation.navigate("ListarGados");
  }
  

  return ( 
      <View style = { styles.container } >
        <Text style={styles.title}>Gerenciar</Text>

        <View style = { styles.card } >
            <View style = { styles.iconCard }>
                <MaterialCommunityIcons name = "cow" size={60} color="#000" /> 
            </View>

            <View style = { styles.cardBory }>
                <Text style = { styles.textCard }> Peso Medio: 200 KG </Text> 
                <Text style = { styles.textCard }> Media de Idade: 10 Anos </Text>                 
                <Text style = { styles.textCard }> Gados em Atividade: 1.000 </Text> 
                <Text style = { styles.textCard }> Quantidade de Gados: 1.000 </Text>    
            </View>

            <Text style = { styles.btnCard } onPress={ handleNavigatCattleList }> Gerenciar Gado </Text>      
        </View>     

         <View style = { styles.card } >
            <View style = { styles.iconCard }>
                <MaterialCommunityIcons name = "tractor-variant" size={60} color="#000" /> 
            </View>

            <View style = { styles.cardBory }>              
                <Text style = { styles.textCard }> Pastos Utilizados: 25 </Text> 
                <Text style = { styles.textCard }> Gados Suportada: 1200 </Text>   
                <Text style = { styles.textCard }> Quantidade de Pasto: 50 </Text> 
            </View>
                
            <Text style = { styles.btnCard } onPress={ handleNavigatCattleList }> Gerenciar Pasto </Text>   
        </View>     

      </View>    
  );
};

export default ChamanageCattle;
