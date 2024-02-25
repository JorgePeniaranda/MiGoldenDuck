import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getBaseColors } from '../const'
import SimpleText from '../components/atoms/text/SimpleText'

export default function ForgotScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleText
        fontSize={27}
        fontWeight="600"
        textAlign="center"
        color={getBaseColors().TEXT}
      >
        Cambiar contraseña
      </SimpleText>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
})
