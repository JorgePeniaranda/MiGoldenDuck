import React from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import { TextProps } from '../../../types'

export default function SimpleText({
  fontSize = 16,
  fontWeight = 'normal',
  textAlign = 'right',
  color,
  children,
}: TextProps) {
  const styles = StyleSheet.create({
    text: {
      fontSize,
      fontWeight,
      textAlign,
      color,
    },
  })

  return <RNText style={styles.text}>{children}</RNText>
}
