import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Routes, getBaseColors } from '../const'
import SimpleText from '../components/atoms/text/SimpleText'
import { Switch, TextInput } from 'react-native-paper'
import Button from '../components/atoms/button'
import SimpleLink from '../components/atoms/text/SimpleLink'
import Input from '../components/atoms/input'
import SecretInput from '../components/atoms/input/SecretInput'
import { LoginForm } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '../useCases/loginUseCase'
import { Controller, useForm } from 'react-hook-form'

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema)
  })

  return (
    <SafeAreaView style={styles.container}>
      <SimpleText
        fontSize={30}
        fontWeight="600"
        textAlign="center"
        color={getBaseColors().TEXT}
      >
        ¡Bienvenido a Golden Duck!
      </SimpleText>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name='email'
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <SecretInput
              label="Contraseña"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
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
        <Button text="Ingresar" onPress={handleSubmit((form) => console.log(form))} />
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
    paddingVertical: 35,
    gap: 25,
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
