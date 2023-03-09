import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { VStack, Box, Divider, Avatar } from 'native-base';

export default function LeaderCorner() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Box p={4} borderRadius="md" w={250} pr={0}>
                <Box border="1" borderRadius="md" style={{ backgroundColor: "white" }}>
                    <VStack space="4" divider={<Divider />}>
                        <Box px="4" pt="4" >
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                                AJ
                            </Avatar>
                            <Text>NativeBase</Text>

                        </Box>
                        <Box px="4" pb="4">
                            <Text>
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Text>

                        </Box>
                    </VStack>
                </Box>
            </Box>
            <Box p={4} borderRadius="md" w={250} pr={0}>
                <Box border="1" borderRadius="md" style={{ backgroundColor: "white" }}>
                    <VStack space="4" divider={<Divider />}>
                        <Box px="4" pt="4" >
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                                AJ
                            </Avatar>
                            <Text>NativeBase</Text>

                        </Box>
                        <Box px="4" pb="4">
                            <Text>
                                NativeBase is a free and open source framework that enable developers
                                to build high-quality mobile apps using React Native iOS and Android
                                apps with a fusion of ES6.
                            </Text>

                        </Box>

                    </VStack>
                </Box>
            </Box>

        </ScrollView>

    )
}
