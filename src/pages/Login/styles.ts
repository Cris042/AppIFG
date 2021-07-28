import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${ colors.primary };
  flex: 1;
  padding-top: ${ statusBarHeight + 'px' };

  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${ colors.fonte };
  font-size: 30px;
`;

export const BoxLogin = styled.View`
  width: 80%;
  height: 400px;

  margin-left: 10%;
  margin-right: 10%;
`;

export const Card = styled.View`
 
  background: transparent;
  color: ${ colors.fonte };
  border: 1px #000;
  border-radius: 8px;

  height: 120px;
  width: 50%;

  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 20%;
`;


export const Input = styled.TextInput`
  height: 60px;
  width: 100%;

  background: transparent;
  color: ${ colors.fonte };

  border: 1px solid #000;
  border-radius: 5px;

  padding-left: 20px;
  margin-bottom: 5px;
`;

type ButtonProps = { solid ? : boolean };

export const Button =  styled.Button<ButtonProps>`
  width: 100%;
  height: 75px;

  background: ${ colors.secondary };

  text-align: center;
  color: #fff;
  
  margin-top: 50px;
  border-radius: 18px;
  padding-top: 10px;
  
`;
