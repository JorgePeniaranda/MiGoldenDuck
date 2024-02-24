import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getBaseColors } from '../const'
import SimpleText from '../components/atoms/simple-text'
import { TextInput } from 'react-native-paper'
import Button from '../components/atoms/button'

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleText
        fontSize={28}
        fontWeight="600"
        textAlign="center"
        color={getBaseColors().TEXT}
      >
        ¡Bienvenido a Golden Duck!
      </SimpleText>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          activeOutlineColor={getBaseColors().PRIMARY}
        />
        <TextInput
          mode="outlined"
          label="Contraseña"
          activeOutlineColor={getBaseColors().PRIMARY}
        />
        <Button text="Ingresar" />
      </View>
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
    gap: 30,
  },
  formContainer: {
    width: '100%',
    height: '60%',
    paddingHorizontal: 40,
    gap: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: getBaseColors().DOMINANT,
  },
})
