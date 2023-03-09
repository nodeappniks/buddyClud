import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Flex, Center, Heading, ScrollView, VStack, Divider, Box, NativeBaseProvider } from "native-base";
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
        marginLeft: 5
    },
    viewContainer: {
        width: "100%",
        height: 80,
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: "row",
        marginTop: 10
    },
    card: {
        width: "100%",
        height: 80,
        backgroundColor: "white",
        borderRadius: 10,

    },
    welcomeText: {
        flex: 1,
        justifyContent: "center",

    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        fontStyle: "italic",
        color: "purple"
    }
});
export default function Welcome() {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.card}>
                <Flex direction="row">
                    <View>
                        <Image style={styles.stretch}
                            source={require('../../../assets/welcomeBear.gif')}
                        />
                    </View>

                    <View style={styles.welcomeText}>
                        <Text style={styles.title}>Welcome abroad @nitzzzzy. Nitzzzy is a new buddy who joined today!!! </Text>
                    </View>

                </Flex>

            </View>
        </View>

    )
}


