import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Pressable } from 'react-native'
import { StatusBar, Box, Menu, HStack, IconButton, Icon, useColorModeValue, useColorMode, Popover, Input, FormControl } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Header(props) {
    const [userData, setUserData] = useState({})
    const initialFocusRef = useRef(null);

    useEffect(() => {
        _retrieveData()
    }, [])
    const _retrieveData = async () => {
        try {
            let value = await AsyncStorage.getItem('@user');
            if (value !== null) {
                let newVal = JSON.parse(value)
                setUserData(newVal)
            }

        } catch (error) {
            // Error retrieving data
            console.log(error)
        }
    };

    const logOut = () => {
        props.logout();
    }

    const {
        toggleColorMode
    } = useColorMode();
    const text = useColorModeValue("black", "white");
    const bg = useColorModeValue("warmGray.50", "violet.600");
    return (
        <>
            {/* <SideDrawer /> */}

            {/* #bg="violet.600" */}
            {/* bg="#3700B3" */}

            <StatusBar hidden />
            <Box safeAreaTop bg={bg} />
            <HStack bg={bg} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color={text} />} />
                    <View>
                        <Text style={{ color: `${text}`, fontSize: 20, fontWeight: "bold" }} size={20} fontWeight="bold">
                            Hii {userData?.username}
                        </Text>
                    </View>

                </HStack>
                <HStack>
                    <IconButton icon={<Entypo name="message" size={24} color={text} />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size={6} color={text} />} />


                    <IconButton onPress={toggleColorMode} icon={text === "black" ? <Ionicons name="moon" size={24} color={text} /> : <Ionicons name="sunny" size={24} color={text} />} />




                    <Menu w="160" trigger={triggerProps => {
                        return (
                            <IconButton {...triggerProps} icon={<Entypo name="dots-three-vertical" size={18} color={text} />} />
                        )

                    }}>

                        <Menu.Item>Help</Menu.Item>
                        <Menu.Item>Terms</Menu.Item>
                        <Menu.Item>About the App</Menu.Item>
                        <Menu.Item onPress={logOut}>Logout</Menu.Item>
                    </Menu>



                </HStack>
            </HStack>
        </>
    )
}
