import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
export default function Auth(propsD) {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName="Login">
                <Stack.Screen name="Login" auth={'test'} >
                    {(props) => (
                        <LoginScreen {...props} auth={propsD.auth} />
                    )}
                </Stack.Screen>
                <Stack.Screen name="Register" component={RegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
