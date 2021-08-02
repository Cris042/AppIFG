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
   width: 40%; 
   margin-left: 30%;
   margin-bottom: 20%;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;



export const Input = styled.TextInput`
  height: 54px;
  width: 100%;

  background: transparent;
  color: ${ colors.fonte };

  border: 2px solid #ddd;
  border-radius: 4px;

  padding-left: 20px;
  margin-bottom: 5px;
`;

type ButtonProps = { solid ? : boolean };

export const Button =  styled.Button<ButtonProps>`
  width: 100%;
  height: 70px;

  background: ${ colors.primary };

  text-align: center;
  color: #fff;
  
  border-radius: 14px;

  margin-top: 10px;
  padding-top: 10px;
  
`;
