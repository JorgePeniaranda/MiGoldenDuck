import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getBaseColors } from '../../../const'
import { Logos } from '../../../assets/images'
import LoaderKit from 'react-native-loader-kit'

export default function Loader() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logos.GoldenDuck} style={styles.image} />
      <LoaderKit
        style={styles.loader}
        name={'BallPulseSync'}
        color={'#f4f4f5'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getBaseColors().PRIMARY,
  },
  image: {
    width: 170,
    height: 170,
    objectFit: 'contain',
  },
  loader: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 70,
  }
})
