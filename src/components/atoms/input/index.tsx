import React from 'react'
import { TextInput } from 'react-native-paper'
import { getBaseColors } from '../../../const'

interface Props {
    label: string
}

export default function Input({label}: Props) {
  return (
    <TextInput
        mode="outlined"
        label={label}
        activeOutlineColor={getBaseColors().PRIMARY}
        style={{ backgroundColor: 'transparent' }}
        outlineStyle={{ borderWidth: 0, borderBottomWidth: 1 }}
    />
  )
}
