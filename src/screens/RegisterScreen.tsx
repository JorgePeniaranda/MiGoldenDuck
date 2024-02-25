import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getBaseColors } from '../const'
import SimpleText from '../components/atoms/text/SimpleText'
import StepIndicator from '../components/organisms/indicator/StepIndicator'

const labels = ["Personal", "Contacto", "Adicional"]

export default function RegisterScreen() {
  const [step, setStep] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <SimpleText
        fontSize={32}
        fontWeight="600"
        textAlign="center"
        color={getBaseColors().TEXT}
      >
        Datos personales
      </SimpleText>
      <StepIndicator labels={labels} step={step}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: getBaseColors().DOMINANT,
    paddingTop: 30,
    gap: 20,
  },
})
