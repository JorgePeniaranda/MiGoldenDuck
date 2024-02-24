import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import LoginScreen from '../screens/loginScreen'
import SimpleNavbar from '../components/organisms/navbar/SimpleNavbar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { getBaseColors } from '../const'

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
          tabBarItemStyle: {
            borderRightColor: "#000",
            borderRightWidth: .5,
          },
          tabBarContentContainerStyle: {
            padding: 6,
          },
          tabBarStyle: {
            backgroundColor: getBaseColors().DOMINANT,
          },
          tabBarLabelStyle:{
            fontSize: 16,
          },
          tabBarIndicatorStyle: {
            backgroundColor: getBaseColors().PRIMARY,
          },

        }}>
            <Tab.Screen name="Ingresar" component={() => <LoginScreen/>}/>
            <Tab.Screen name="Crear Cuenta" component={() => <Text>Register</Text>}/>
        </Tab.Navigator>
    )
}

export default function AuthNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Signup'>
            <Stack.Screen name="Auth" component={() => <TabNavigation/>} options={{header: SimpleNavbar}}/>
            <Stack.Screen name="Forgot" component={() => <Text>Forgot</Text>} options={{header: SimpleNavbar}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
