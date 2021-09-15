import React,{ useState, useEffect } from 'react';

import { Wrapper, BoxLogin, Input, Button, Card, Image, Gif} from './styles';
import { useNavigation } from "@react-navigation/native";

import Logo from "../../../assets/icon.png";
import GifImage from "../../images/loading.gif";

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


    if( reg.test( email ) == true )
      navigation.navigate("Home");
    else
      alert("Email invalido");

  }

  const [ isLoading, setLoading ] = useState( true );

  useEffect(() => 
  {
    setTimeout(() => 
    {
      setLoading( false );
    }, 2000);

  }, []);  
  
  
  return (
    <Wrapper> 

          { isLoading ? 
          (
             <Image source={ GifImage } />
          ) : 
          
          (

            <BoxLogin>

              <Card>
                  <Image source={ Logo } />
              </Card>

              <Input
                  placeholder={'Digite seu Nome'}
                  onChangeText={setEmail} 
              />

              <Input
                  placeholder={'Digite seu E-mail'}
                  onChangeText={setEmail} 
              />

              <Button
                onPress={Logar}
                title="Continuar"
                color="#27b844"
              >
              </Button>

            </BoxLogin>

          )}

    </Wrapper>
  );
};
