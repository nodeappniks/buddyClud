import React from 'react'
import { View, Text, Image } from 'react-native'
import { Stack, Center, Heading, ScrollView, VStack, Divider, NativeBaseProvider } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';

export default function DashBoardMenu() {
    return (
        // <ScrollView style={{ marginTop: 70 }}>
        <VStack style={{ marginTop: 10 }}>
            <Stack direction="row" space={2} p={3} >
                <Center h="20" bg={["red.400", "blue.400"]} style={{ width: "49%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold"
                }} shadow={"3"}>
                    <Image style={{ height: 55, width: 55 }}
                        source={require('../../../assets/friend.gif')}
                    />
                    Friends
                </Center>
                <Center bg="#F8BD27" h="20" style={{ width: "49%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold"
                }} shadow={"3"}>
                    <Image style={{ height: 55, width: 55 }}
                        source={require('../../../assets/chatroom.gif')}
                    />
                    Chatrooms(20)
                </Center>
            </Stack>
            <Stack direction="row" space={2} px={3} >
                <Center h="20" bg="#A7B1EA" style={{ width: "49%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold"
                }} shadow={"3"}>
                    <Image style={{ height: 55, width: 55 }}
                        source={require('../../../assets/community.gif')}
                    />
                    Community
                </Center>
                <Center bg="#9DBC6B" h="20" style={{ width: "49%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold",
                    marginTop: -7
                }} shadow={"3"}>
                    <Image style={{ height: 55, width: 95, marginTop: 30 }}
                        source={require('../../../assets/pol.gif')}
                    />
                    Polls
                </Center>
            </Stack>
            <Stack direction="row" space={2} p={3} >
                <Center h="20" bg="primary.400" style={{ width: "49%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold"
                }} shadow={"3"}>
                    <Image style={{ height: 55, width: 100 }}
                        source={require('../../../assets/games.gif')}
                    />
                    Games
                </Center>
                <Center bg="#CAA98B" h="20" style={{ width: "49%" }} rounded="md" _text={{
                    color: "black",
                    fontWeight: "bold",
                    marginTop: 1.5
                }} shadow={"3"}>
                    <FontAwesome5 name="blogger" size={35} color="black" style={{ marginTop: 17 }} />
                    Blogs
                </Center>
            </Stack>
        </VStack>
        // </ScrollView>
    )
}
