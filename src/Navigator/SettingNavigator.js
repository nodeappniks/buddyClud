import React from 'react'
import { View, Text } from 'react-native'
import SettingScreen from '../Screens/SettingScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SettingNavigator(route) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="Settings">
            <Stack.Screen name="Settings" initialParams={route.params} component={SettingScreen} />
        </Stack.Navigator>
    )
}
