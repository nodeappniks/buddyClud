import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { NativeBaseProvider, Box } from "native-base";
import Header from '../Common/Header';
export default function AboutScreen({ navigation, route }) {

    return (
        <>
            <Box flex={1} bg="#8287af" >
                <Text>Open up App.js to start working on your app!</Text>
            </Box>
        </>
    )
}
