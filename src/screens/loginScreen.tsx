import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Routes, getBaseColors } from '../const'
import SimpleText from '../components/atoms/text/SimpleText'
import { Switch, TextInput } from 'react-native-paper'
import Button from '../components/atoms/button'
import SimpleLink from '../components/atoms/text/SimpleLink'

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleText
        fontSize={27}
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
          style={{ backgroundColor: 'transparent' }}
          outlineStyle={{ borderWidth: 0, borderBottomWidth: 1 }}
        />
        <TextInput
          mode="outlined"
          label="Contraseña"
          activeOutlineColor={getBaseColors().PRIMARY}
          style={{ backgroundColor: 'transparent' }}
          outlineStyle={{ borderWidth: 0, borderBottomWidth: 1 }}
          right={<TextInput.Icon icon="eye" />}
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Switch value={true} color={getBaseColors().PRIMARY} />
          <SimpleText fontSize={16} color={getBaseColors().TEXT}>
            Recordar usuario
          </SimpleText>
        </View>
        <Button text="Ingresar" />
        <SimpleLink
          to={Routes.FORGOT}
          color={getBaseColors().LINK}
          textAlign="center"
        >
          ¿Olvidaste tu contraseña?
        </SimpleLink>
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
    gap: 20,
  },
  formContainer: {
    width: '100%',
    height: '60%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 40,
    gap: 30,
    backgroundColor: getBaseColors().DOMINANT,
  },
})
