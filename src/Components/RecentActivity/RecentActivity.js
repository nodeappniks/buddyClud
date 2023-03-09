import React from 'react'
import { View, Text } from 'react-native'
import { Stack, Center, Heading, ScrollView, VStack, Divider, NativeBaseProvider } from "native-base";

export default function RecentActivity() {
    return (
        <VStack >
            <Stack direction="row" space={2} p={3} >
                <Center h="10" bg={["blue.400"]} style={{ width: "32%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold"
                }} shadow={"3"}>
                    Chatroom
                </Center>
                <Center h="10" bg={["yellow.500"]} style={{ width: "32%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold"
                }} shadow={"3"}>
                    Blog
                </Center>
                <Center h="10" bg={["red.400", "blue.400"]} style={{ width: "32%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold"
                }} shadow={"3"}>
                    Blog
                </Center>
            </Stack>
        </VStack>
    )
}
