import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    }
}

export const getToken = async () =>{
    const token = await messaging().getToken() 
    console.log('token: ', token)
} 

export const NotificationListener = () => {
    messaging().subscribeToTopic('cosito-test')

    messaging().sendMessage({
        fcmOptions: {

        }
    })

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('notificacion app open ', remoteMessage.notification)
    })

    messaging().getInitialNotification().then(
        remoteMessage => {
            if(remoteMessage){
                console.log('notificacion app no sé ', remoteMessage.notification)
            }
        }
    )

    messaging().setBackgroundMessageHandler(async remoteMessage =>{
        console.log('otro mensaje pero de fondo(? ', remoteMessage)
    })

    messaging().onMessage(async remoteMessage =>{
        console.log('otro mensaje pero tampoco se que es ', remoteMessage)
    })
}