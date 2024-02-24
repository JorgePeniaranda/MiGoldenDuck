import messaging from '@react-native-firebase/messaging'

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) getToken()
}

export const getToken = async () => {
  const token = await messaging().getToken()
  console.log('Firebase Token: ', token)
}

export const NotificationHandler = async (remoteMessage: any) => {
  console.log('New Firebase Notification: ', remoteMessage)
}

export const NotificationListener = () => {
  messaging().setBackgroundMessageHandler(NotificationHandler)
  messaging().onMessage(NotificationHandler)
}
