import React,{ useState, useEffect } from 'react';

import { Wrapper, BoxLogin, Input, Button, Card, Image } from './styles';
import { useNavigation } from "@react-navigation/native";

import Logo from "../../../assets/icon.png";

export default function Login() {

  const navigation = useNavigation();
  const [ email, setEmail] = useState("");
  const [ senha, setSenha] = useState("");
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  async function Logar()
  { 
    const data = new FormData();

    data.append("email", email);
    data.append("senha", senha);

    // await api.post("orphanages", data);

    if( reg.test( email ) == true )
      navigation.navigate("Home");
    else
      alert("Email invalido");

  }

  
  
  return (
    <Wrapper>    
        <BoxLogin>

          <Card>
              <Image source={ Logo } />
          </Card>

          <Input
              placeholder={'Digite seu email'}
              onChangeText={setEmail} 
          />

          <Input
              placeholder={'Digite sua Senha'}
              onChangeText={setSenha} 
          />

          <Button
            onPress={Logar}
            title="Logar"
            color="#27b844"
          >
          </Button>

        </BoxLogin>
    </Wrapper>
  );
};
