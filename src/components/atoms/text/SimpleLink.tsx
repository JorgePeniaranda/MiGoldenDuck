import { Link } from '@react-navigation/native'
import React from 'react'
import SimpleText from './SimpleText'
import { StyleSheet } from 'react-native'
import { TextProps } from '../../../types'

interface Props extends TextProps {
  to: string
}

export default function SimpleLink({
  to,
  fontSize,
  fontWeight,
  textAlign,
  color,
  children,
}: Props) {
  const styles = StyleSheet.create({
    text: {
      textAlign,
    },
  })

  return (
    <Link to={`/${to}`} style={styles.text}>
      <SimpleText
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        color={color}
      >
        {children}
      </SimpleText>
    </Link>
  )
}
