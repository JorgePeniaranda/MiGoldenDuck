import React from 'react'
import SimpleText from './SimpleText'

interface Props{
    children: React.ReactNode
    show?: boolean
}

export default function ErrorText({children, show = true}: Props) {
    if(!show) return null

  return (
    <SimpleText fontSize={17} color='#ed4337' textAlign='center'>
        {children}
    </SimpleText>
  )
}
