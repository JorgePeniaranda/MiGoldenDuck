import React from 'react'
import { TextInput } from 'react-native-paper'
import { getBaseColors } from '../../../const'
import { KeyboardTypeOptions } from 'react-native'
import Input from '.'

interface Props {
    label: string
    onChange?: (event: any) => void
    onBlur?: (event: any) => void
    value?: string
    keyboardType?: KeyboardTypeOptions
    errorMessage?: string
}

export default function SecretInput({label, onChange, onBlur, value, keyboardType, errorMessage}: Props) {
  const [isSecret, setIsSecret] = React.useState(true)

  const handlePress = () => setIsSecret(!isSecret)

  return (
    <Input
        label={label}
        right={<TextInput.Icon icon={isSecret ? 'eye' : 'chat'} theme={{version: 2}} onPress={handlePress} />}
        secureTextEntry={isSecret}
        keyboardType={keyboardType}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        errorMessage={errorMessage}
    />
  )
}
