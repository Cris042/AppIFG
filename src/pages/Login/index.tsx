import React,{ useState, useEffect } from 'react';

import { Wrapper, Heading, BoxLogin, Input, Button, Card} from './styles';
import { useNavigation } from "@react-navigation/native";

export default function Login() {

  const navigation = useNavigation();
  const [ isLoading, setLoading ] = useState( true );
  const [ email, setEmail] = useState("");
  const [ senha, setSenha] = useState("");
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // import api from "../../services/axios";

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

  
  useEffect(() => 
  {
    setTimeout(() => 
    {
      setLoading( false );
    }, 500);

  }, []);  

  return (
    <Wrapper>
     
      { isLoading ? 
      (
        <Heading> Carregando... </Heading>
      ) : 

      (
       
            <BoxLogin>

              <Card>
            
              </Card>

              <Input
                placeholder={'Digite seu email'}
                onChangeText={setEmail} />

              <Input
                placeholder={'Digite sua Senha'}
                onChangeText={setSenha} />

              <Button
                onPress={Logar}
                title="Logar"
                color="#32a4a8"
              >
              </Button>

            </BoxLogin>
      )}

    </Wrapper>
  );
};


