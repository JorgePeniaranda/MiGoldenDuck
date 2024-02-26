import React from 'react'
import { TextInput } from 'react-native-paper'
import { getBaseColors } from '../../../const'
import { KeyboardTypeOptions, View } from 'react-native'
import ErrorText from '../text/ErrorText'

interface Props {
    label: string
    right?: React.ReactNode
    onChange?: (event: any) => void
    onBlur?: (event: any) => void
    value?: string
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    errorMessage?: string | undefined
}

export default function Input({label, right, onChange, onBlur, value, keyboardType, secureTextEntry, errorMessage}: Props) {
  return (
    <View>
      <TextInput
          mode="outlined"
          label={label}
          right={right}
          activeOutlineColor={getBaseColors().PRIMARY}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          style={{ backgroundColor: 'transparent' }}
          outlineStyle={{ borderWidth: 0, borderBottomWidth: 1 }}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
      />
      <ErrorText show={typeof errorMessage === 'string'}>
        {errorMessage}
      </ErrorText>
    </View>
  )
}
