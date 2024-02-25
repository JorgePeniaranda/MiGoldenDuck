import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import SimpleNavbar from '../components/organisms/navbar/SimpleNavbar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Routes, getBaseColors } from '../const'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotScreen from '../screens/ForgotScreen'

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          borderRightColor: '#000',
          borderRightWidth: 0.5,
        },
        tabBarContentContainerStyle: {
          padding: 6,
        },
        tabBarStyle: {
          backgroundColor: getBaseColors().DOMINANT,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIndicatorStyle: {
          backgroundColor: getBaseColors().PRIMARY,
        },
      }}
    >
      <Tab.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Tab.Screen
        name={Routes.REGISTER}
        component={RegisterScreen}
      />
    </Tab.Navigator>
  )
}

export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name={Routes.AUTH}
          component={TabNavigation}
          options={{ header: SimpleNavbar }}
        />
        <Stack.Screen
          name={Routes.FORGOT}
          component={ForgotScreen}
          options={{ header: SimpleNavbar }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
