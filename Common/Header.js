import React from 'react'
import { View, Text } from 'react-native'
import { StatusBar, Box, HStack, IconButton, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
    return (
        <>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="violet.600" />
            <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                    <View>
                        <Text style={{ color: "white" }} fontSize="20" fontWeight="bold">
                            Home
                        </Text>
                    </View>

                </HStack>
                <HStack>
                    <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                </HStack>
            </HStack>
        </>
    )
}
