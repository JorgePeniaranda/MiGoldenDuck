import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import {
  NotificationListener,
  requestUserPermission,
} from './src/services/firebaseService'
import Loader from './src/components/pages/loader'
import Navigation from './src/navigation'
import { getBaseColors } from './src/const'

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = React.useState(false)

  useEffect(() => {
    setIsLoading(true)
    // Firebase notifications
    requestUserPermission()
    NotificationListener()

    setIsLoading(false)
  }, [])

  if(isLoading) return <Loader />

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={getBaseColors().PRIMARY}
      />
      <Navigation />
    </>
  )
}
