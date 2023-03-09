import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './MainNavigator';
import ProfileNavigator from './ProfileNavigator';
import SettingNavigator from './SettingNavigator';
import { Icon } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorMode, useColorModeValue } from "native-base";
import Header from '../Common/Header';

export default function Main(props) {
    const Tab = createBottomTabNavigator();
    const text = useColorModeValue("black", "white");
    const bg = useColorModeValue("warmGray.50", "coolGray.800");
    return (
        <>
            <Header logout={props.logout} />
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Main" screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: text === "white" ? "#3700B3" : "black", fontWeight: "bold"
                }}>
                    <Tab.Screen name="Main" options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon as={Ionicons} name="home" size={6} color={color} />
                        ),
                    }}
                        component={MainNavigator}
                        barStyle={{ backgroundColor: bg }}
                    />
                    <Tab.Screen name="My Profile"
                        options={{
                            tabBarLabel: 'My Profile',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
                            ),
                        }}
                        component={ProfileNavigator} />
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({ color, size }) => (
                                <Icon as={Ionicons} size={6} name="settings" color={color} />
                            ),
                        }}
                        name="Setting" component={SettingNavigator} />
                </Tab.Navigator>
            </NavigationContainer>
        </>

    )
}
