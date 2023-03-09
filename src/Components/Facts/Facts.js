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
        color: "black"
    }
});
export default function Facts() {
    return (
        <Box style={styles.viewContainer} mb="10">
            <Box style={styles.card}>
                <Flex direction="row">
                    <View>
                        <Image style={styles.stretch}
                            source={require('../../../assets/welcomeBear.gif')}
                        />
                    </View>

                    <View style={styles.welcomeText}>
                        <Text style={styles.title}>Did you know??     Camels are the only living creatures who can survive without water for 1 months!!! </Text>
                    </View>

                </Flex>

            </Box>
        </Box>
    )
}
