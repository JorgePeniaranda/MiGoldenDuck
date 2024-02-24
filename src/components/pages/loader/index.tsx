import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getBaseColors } from '../../../const'
import { Logos } from '../../../assets/images'

export default function Loader() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logos.GoldenDuck} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getBaseColors().PRIMARY,
  },
})
