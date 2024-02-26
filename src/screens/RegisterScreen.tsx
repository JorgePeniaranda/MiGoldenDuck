import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getBaseColors } from '../const'
import SimpleText from '../components/atoms/text/SimpleText'
import StepIndicator from '../components/organisms/indicator/StepIndicator'
import Button from '../components/atoms/button'
import Input from '../components/atoms/input'
import useStep from '../hooks/useStep'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema } from '../useCases/registerUseCase'
import { SignupForm } from '../types'

const labels = ["Personal", "Contacto", "Adicional"]

export default function RegisterScreen() {
  const {step, handleNext} = useStep()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<SignupForm>({
    resolver: zodResolver(SignUpSchema)
  })

  return (
    <SafeAreaView style={styles.container}>
      {
        step === 0 && (
          <>
            <SimpleText
              fontSize={32}
              fontWeight="600"
              textAlign="center"
              color={getBaseColors().TEXT}
            >
              Datos Personales
            </SimpleText>
            <View style={styles.formContainer}>
              <Controller 
                control={control}
                name='name'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => 
                  <Input 
                    label='Nombre'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.name?.message}
                  />
              }/>
              <Controller 
                control={control}
                name='lastName'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => 
                  <Input 
                    label='Apellido'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.lastName?.message}
                  />
              }/>
              <Controller 
                control={control}
                name='dni'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => 
                  <Input 
                    label='DNI'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.dni?.message}
                  />
              }/>
              <Button text="Siguiente" marginTop={20} onPress={handleSubmit(handleNext)} />
            </View>
          </>
        )
      }
      {
        step === 1 && (
          <>
            <SimpleText
              fontSize={32}
              fontWeight="600"
              textAlign="center"
              color={getBaseColors().TEXT}
            >
              Datos de Contacto
            </SimpleText>
            <View style={styles.formContainer}>
              <Controller 
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => 
                  <Input 
                    label='Email'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.email?.message}
                  />
              }/>
              <Controller 
                control={control}
                name='phoneNumber'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => 
                  <Input 
                    label='Teléfono'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.phoneNumber?.message}
                  />
              }/>
              <Controller 
                control={control}
                name='password'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => 
                  <Input 
                    label='Contraseña'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={errors.password?.message}
                  />
              }/>
              <Button text="Siguiente" marginTop={20} onPress={handleSubmit(handleNext)} />
            </View>
          </>
        )
      }
      {
        step === 2 && (
          <>
            <SimpleText
              fontSize={32}
              fontWeight="600"
              textAlign="center"
              color={getBaseColors().TEXT}
            >
              Datos adicionales
            </SimpleText>
            <View style={styles.formContainer}>
              <Input label='Domicilio'/>
              <Input label='Fecha de nacimiento'/>
              <Input label='Sexo'/>
              <Button text="Siguiente" marginTop={20} onPress={handleSubmit(handleNext)} />
            </View>
          </>
        )
      }
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
    paddingVertical: 35,
    gap: 25,
  },
  formContainer: {
    width: '80%',
    height: '70%',
    gap: 20,
  }
})
