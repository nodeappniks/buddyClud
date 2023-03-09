import React from 'react'
import { View, Text } from 'react-native'
import MyProfileScreen from '../Screens/MyProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ProfileNavigator(route) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="MyProfile">
            <Stack.Screen name="MyProfile" initialParams={route.params} component={MyProfileScreen} />
        </Stack.Navigator>
    )
}
