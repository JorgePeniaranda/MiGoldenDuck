import React from 'react'
import { StyleSheet, Text as RNText } from 'react-native'

interface Props{
    fontSize?: number
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    textAlign?: "left" | "right" | "center" | "justify"
    color?: string
    children: React.ReactNode
}

export default function SimpleText({fontSize = 16, fontWeight = "normal", textAlign = 'right', color, children}: Props) {
    const styles = StyleSheet.create({
        text: {
            fontSize,
            fontWeight,
            textAlign,
            color
        }
    })

  return (
    <RNText style={styles.text}>{children}</RNText>
  )
}

