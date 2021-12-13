import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';

import Home from '../../pages/Home';
import GerenciarGados from '../../pages/GerenciarGados';
import Login from '../../pages/Login';
import CadastroFazenda from '../../pages/CadastroFazenda';
import SelectMapPosition from '../../pages/SelectMapPosition';
import MeusDados from '../../pages/AtualizarDados';
import FazendaEdit from '../../pages/FazendaEdit';
import ListarGados from '../../pages/ListarGados';
import ListarPastos from '../../pages/ListarPastos';
import CadastarGados from '../../pages/CadastroGados';
import ManagePasture from '../../pages/ManagePasture';

const { Navigator, Screen } = createBottomTabNavigator();

const Menu: React.FC = () => {

    return (
        <NavigationContainer>
            <Navigator
                tabBarOptions=
                {{
                    style: 
                    {
                        height: 60,
                        width: 1220,
                        paddingLeft: 20,
                        backgroundColor: colors.menu,
                        borderTopWidth: 0,
                    },

                    tabStyle: 
                    {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },

                    iconStyle: 
                    {
                        flex: 0,
                        width: 20,
                        height: 20,
                    },

                    labelStyle: 
                    {
                        fontSize: 11,
                        marginTop: 5,
                    },

                    inactiveTintColor: colors.fonte,
                    activeTintColor: colors.secondary,
                }}
                
            >

                {/* <Screen
                    name="Login"
                    component={ Login }
                    options={{

                        tabBarVisible:false,
                        tabBarLabel: "",   

                    }}
                />      */}

                <Screen
                    name="Home"
                    component={ Home }
                    options={{

                        tabBarIcon: ({ size, focused }) => 
                        {
                            return (
                                <Ionicons
                                    name = "md-home"
                                    size = { size }
                                    color = { focused ? colors.secondary : colors.fonte }
                                />
                            );
                        },

                    }}
                
                />

                <Screen
                    name="Gerenciar"
                    component={ GerenciarGados }
                    options= {{

                        tabBarIcon: ({ size, focused }) => 
                        {
                            return (
                                <MaterialCommunityIcons
                                    name = "tractor"
                                    size = { size }
                                    color = { focused ? colors.secondary : colors.fonte }
                                />
                            );
                        },
                        
                    }}
                />

                <Screen
                    name="MeusDados"
                    component={  MeusDados }
                    options={{

                        tabBarIcon: ({ size, focused }) => 
                        {
                            return (
                                <Ionicons
                                    name = "md-person-circle"
                                    size = { size }
                                    color = { focused ? colors.secondary : colors.fonte }
                                />
                            );
                        },

                    }}
                />

                <Screen 
                    name="SelectMapPosition"
                    component={ SelectMapPosition }
                    options={{

                        tabBarVisible:false,
                        tabBarLabel: "",                

                    }}
                />

                <Screen
                    name="CadastroFazenda"
                    component={ CadastroFazenda }
                    options={{

                        tabBarVisible:false,
                        tabBarLabel: "",   

                    }}
                />

                <Screen
                    name="FazendaEdit"
                    component={ FazendaEdit }
                    options={{

                        tabBarVisible:false,
                        tabBarLabel: "",   

                    }}
                />

                <Screen
                    name="ListarGados"
                    component={ ListarGados }
                    options={{

                        tabBarVisible:true,
                        tabBarLabel: "",   

                    }}
                />

                <Screen
                    name="CadastarGados"
                    component={ CadastarGados }
                    options={{

                        tabBarVisible:false,
                        tabBarLabel: "",   

                    }}
                /> 

                <Screen
                    name="ListarPastos"
                    component={ ListarPastos }
                    options={{

                        tabBarVisible:true,
                        tabBarLabel: "",   

                    }}
                />      

                 <Screen
                    name="ManagePasture"
                    component={ ManagePasture }
                    options={{

                        tabBarVisible:true,
                        tabBarLabel: "",   

                    }}
                />  

            </Navigator>
        </NavigationContainer>
    );
};

export default Menu;