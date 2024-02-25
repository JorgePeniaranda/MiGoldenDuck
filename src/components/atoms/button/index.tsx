import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { getBaseColors } from '../../../const'
import { Text } from 'react-native-paper'

interface Props {
  text: string
  marginTop?: number
  onPress?: () => void
}

export default function Button({ text, marginTop, onPress }: Props) {
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
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  )
}
