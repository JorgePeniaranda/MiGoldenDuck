import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { getBaseColors } from '../../../const'
import { Text } from 'react-native-paper'
import LoaderKit from 'react-native-loader-kit'

interface Props {
  text: string
  marginTop?: number
  onPress?: () => void
  loading?: boolean
}

export default function Button({ text, marginTop, onPress, loading = false }: Props) {
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: getBaseColors().PRIMARY,
      borderRadius: 10,
      marginTop
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
  })

  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      {
        loading ?
        <LoaderKit
          style={{ width: 50, height: 50 }}
          name={'BallPulse'}
          color={'#f4f4f5'}
        /> :
        <Text style={styles.text}>{text}</Text>
      }
    </TouchableHighlight>
  )
}
