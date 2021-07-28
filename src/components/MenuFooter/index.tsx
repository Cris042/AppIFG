import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';

import Home from '../../pages/Home';
import Chat from '../../pages/Chat';
import Camera from '../../pages/Camera';
import Login from '../../pages/Login';

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

                <Screen
                    name="Camera"
                    component={ Camera }
                    options={{
                    tabBarIcon: ({ size, focused }) => 
                    {
                        return (
                            <MaterialCommunityIcons
                                name= "camera-outline"
                                size= { size }
                                color= { focused ? colors.secondary : colors.fonte }
                            />
                        );
                    },
                    }}
                />
                
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
                    name="Chat"
                    component={ Chat }
                    options={{
                    tabBarIcon: ({ size, focused }) => 
                    {
                        return (
                            <MaterialCommunityIcons
                                name = "chat-outline"
                                size = { size }
                                color = { focused ? colors.secondary : colors.fonte }
                            />
                        );
                    },
                    }}
                />

                <Screen
                    name="Login"
                    component={ Login }
                    options={{
                    tabBarIcon: ({ size, focused }) => 
                    {
                        return (
                            <Ionicons
                                name = "md-add"
                                size = { size }
                                color = { focused ? colors.secondary : colors.fonte }
                            />
                        );
                    },
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );
};

export default Menu;