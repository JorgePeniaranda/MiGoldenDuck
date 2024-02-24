import React from 'react'
import { StatusBar } from 'react-native'
import { getBaseColors } from '../../../../const'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={getBaseColors().PRIMARY}
      />
      {children}
    </>
  )
}
