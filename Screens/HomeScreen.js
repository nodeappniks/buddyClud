import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'
import Header from '../Common/Header'

export default function HomeScreen({ navigation }) {

    return (
        <View>
            <Header />
            <View>
                <Text>This is Home Screen</Text>
                <Button
                    title="Go to About Screen"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </View>

    )
}
