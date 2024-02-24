import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { getBaseColors } from '../../../const'
import { Text } from 'react-native-paper'

interface Props{
    text: string
}

export default function Button({ text }: Props) {
  return (
    <TouchableHighlight style={styles.button}>
        <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: getBaseColors().PRIMARY,
        borderRadius: 10
    },
    text:{
        color: "#fff",
        fontSize: 20,
    }
})