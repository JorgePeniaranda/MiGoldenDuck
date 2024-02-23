import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'

const Stack = createNativeStackNavigator()

export default function AuthNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Home" component={() => <Text>Home</Text>} />
            <Stack.Screen name="Login" component={() => <Text>Login</Text>} />
            <Stack.Screen name="Forgot" component={() => <Text>Forgot</Text>} />
            <Stack.Screen name="Signin" component={() => <Text>Signin</Text>} />
        </Stack.Navigator>
    </NavigationContainer> 
  )
}
