import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Logos } from '../../../assets/images'
import { getBaseColors } from '../../../const'

export default function SimpleNavbar() {
  return (
    <View style={styles.container}>
        <Image source={Logos.GoldenDuck} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#aeaeae50',
        paddingVertical: 12,
        backgroundColor: getBaseColors().DOMINANT,
    },
    logo: {
        objectFit: 'contain',
        height: 50,
    }
})