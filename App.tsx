import React, { useEffect } from 'react'
import {
  SafeAreaView, Text,
} from 'react-native'
import { getToken, NotificationListener, requestUserPermission } from './src/utils/requestPermission'
import Loader from './src/components/pages/loader'
import Navigation from './src/navigation'

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = React.useState(false)

  useEffect(() => {
    setIsLoading(true)
    requestUserPermission()
    getToken()
    NotificationListener()
    setIsLoading(false)
  }, [])

  return isLoading ? <Loader/> : <Navigation/>
}