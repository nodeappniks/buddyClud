import React, { useState } from 'react'
import { ScrollView } from "react-native"
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center } from "native-base";


export default function LoginScreen({ navigation, auth }) {
    const [formData, setFormData] = useState({});
    const navigteToSignUP = () => {
        navigation.navigate("Register")
    }
    const login = () => {
        auth(formData);
    }


    return (
        <ScrollView keyboardShouldPersistTaps={`never`} style={{ width: "100%" }}>
            <Box safeArea p="6" py="10" w="100%" >
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "black"
                }}>
                    Welcome
                </Heading>
                <Heading mt="1" _dark={{
                    color: "black"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                            ...formData,
                            username: value
                        })} color={`black`} size={30} height={38} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                            ...formData,
                            password: value
                        })} type="password" color={`black`} size={30} height={38} />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={login}>
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "black"
                        }}>
                            I'm a new user.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={navigteToSignUP}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </ScrollView>
    )
}
