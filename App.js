import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { extendTheme, NativeBaseProvider } from "native-base";
import 'react-native-gesture-handler';
import Main from './src/Navigator/Main';
import Auth from './src/Navigator/Auth';
import UserService from './src/Services/UserService';
import envs from './src/Services/Config';
import { useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from 'native-base';

export default function App() {
  const toast = useToast();
  let { BACKEND_URL } = envs
  const [loggedin, setLoggedin] = useState('loading')

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: loggedin ? "dark" : "light",
    },
  });

  useEffect(() => {
    _retrieveData();
  }, [])





  const auth = (userLoginData) => {
    console.log(userLoginData)
    UserService.auth(userLoginData, BACKEND_URL).then((response) => {
      if (response.data.status === "success") {
        let userData = response.data.data;
        userData = JSON.stringify(userData);
        storeData(userData)
        setLoggedin(true)
        toast.show({
          description: "Loggedin successfully"
        })
      }

    }).catch((error) => {
      console.log("error")
      toast.show({
        description: "Error while Logging. Please contact admin"
      })
    })
  }

  const _retrieveData = async () => {
    // console.log("hiiiii")
    try {
      const value = await AsyncStorage.getItem('@user');
      if (value !== null) {
        setLoggedin(true)
      } else {
        setLoggedin(false)
      }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@user', value)
    } catch (e) {
      // saving error
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@user')
      setLoggedin(false)
    } catch (e) {
      // remove error
    }
  }

  return (
    <NativeBaseProvider theme={theme}>
      {
        loggedin !== "loading" && (
          <>
            {
              loggedin ? <Main logout={logout} /> : <Auth auth={auth} />
            }
          </>
        )

      }
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
