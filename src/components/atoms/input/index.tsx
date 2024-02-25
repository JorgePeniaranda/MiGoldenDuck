import React from 'react'
import { TextInput } from 'react-native-paper'
import { getBaseColors } from '../../../const'

interface Props {
    label: string
    right?: React.ReactNode
}

export default function Input({label, right}: Props) {
  return (
    <TextInput
        mode="outlined"
        label={label}
        right={right}
        activeOutlineColor={getBaseColors().PRIMARY}
        style={{ backgroundColor: 'transparent' }}
        outlineStyle={{ borderWidth: 0, borderBottomWidth: 1 }}
    />
  )
}
