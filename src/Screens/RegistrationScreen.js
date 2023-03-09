import React, { useState } from 'react'
import { ScrollView } from "react-native"
import { Box, Text, Heading, VStack, FormControl, Input, Button, HStack, Radio, Stack, Link } from "native-base";
import UserService from '../Services/UserService';
import { useToast } from 'native-base';
import envs from '../Services/Config';

export default function RegistrationScreen({ navigation }) {
    let { BACKEND_URL } = envs
    const toast = useToast();
    const [formData, setFormData] = useState({});
    const [gender, setGender] = useState("male");
    const navigteToSignIn = () => {
        navigation.navigate("Login")
    }

    const handleSubmit = () => {

        let userData = { ...formData, gender }

        UserService.register(userData, BACKEND_URL).then((response) => {
            navigation.navigate("Login")
            toast.show({
                description: "You got registered successfully"
            })
        }).catch((error) => {
            toast.show({
                description: "Error while registering. Please contact admin"
            })
        })
    }


    return (
        <ScrollView keyboardShouldPersistTaps={`never`} style={{ width: "100%" }}>
            <Box safeArea p="6" w="100%" py="12">
                <Heading size="lg" color="coolGray.800" _dark={{
                    color: "black"
                }} fontWeight="semibold">
                    Welcome
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "black"
                }} fontWeight="medium" size="xs">
                    Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input color={`black`} size={30} height={38} onChangeText={value => setFormData({
                            ...formData,
                            email: value
                        })} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input color={`black`} size={30} height={38} onChangeText={value => setFormData({
                            ...formData,
                            username: value
                        })} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={value => setFormData({
                            ...formData,
                            password: value
                        })} type="password" color={`black`} size={30} height={38} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Gender</FormControl.Label>
                        <Radio.Group name="exampleGroup"
                            onChange={(nextValue) => {
                                setGender(nextValue)
                            }}
                            value={gender} accessibilityLabel="pick a size">
                            <Stack direction={{
                                base: "row",
                                md: "row"
                            }} alignItems={{
                                base: "flex-start",
                                md: "center"
                            }} space={4} w="100%" color="black">
                                <Radio value="male" colorScheme="blue" size="md" my={1} color="black">
                                    Male
                                </Radio>
                                <Radio value="female" colorScheme="blue" size="md" my={1}>
                                    Female
                                </Radio>

                            </Stack>
                        </Radio.Group>
                    </FormControl>

                    <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
                        Sign up
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "black"
                        }}>
                            Already have an account?{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={navigteToSignIn}>
                            Sign In
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </ScrollView>

    )
}
