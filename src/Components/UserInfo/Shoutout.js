import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import { Flex, Center, Heading, ScrollView, VStack, Divider, Box, NativeBaseProvider } from "native-base";
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
        marginLeft: 5,
    },
    viewContainer: {
        width: "100%",
        height: 80,
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: "row",

    },
    card: {
        width: "100%",
        height: 80,
        backgroundColor: "#0d2422",
        borderRadius: 10,

    },
    welcomeText: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 8,


    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        fontStyle: "italic",
        color: "white"
    }
});

export default function Shoutout() {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.card}>
                <Flex direction="row">
                    <View >
                        <ImageBackground source={require('../../../assets/shoutOut.gif')} style={styles.stretch} />

                    </View>

                    <View style={styles.welcomeText}>
                        <Text style={styles.title}>Nitzzzzy: Happy Birthday Rozaa@. May Allah bless you with lots of happiness!!! </Text>
                    </View>

                </Flex>

            </View>
        </View >
    )
}
