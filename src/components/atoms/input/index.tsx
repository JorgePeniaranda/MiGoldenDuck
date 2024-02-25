import React from 'react'
import { TextInput } from 'react-native-paper'
import { getBaseColors } from '../../../const'

interface Props {
    label: string
    right?: React.ReactNode
    onChange?: (event: any) => void
    onBlur?: (event: any) => void
    value?: string
}

export default function Input({label, right, onChange, onBlur, value}: Props) {
  return (
    <TextInput
        mode="outlined"
        label={label}
        right={right}
        activeOutlineColor={getBaseColors().PRIMARY}
        style={{ backgroundColor: 'transparent' }}
        outlineStyle={{ borderWidth: 0, borderBottomWidth: 1 }}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
    />
  )
}
