import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import AboutScreen from '../Screens/AboutScreen';

export default function MainNavigator({ route }) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="Home">
            <Stack.Screen name="Home" initialParams={route.params} component={HomeScreen} />
            <Stack.Screen name="About" initialParams={route.params} component={AboutScreen} />
        </Stack.Navigator>
    )
}
