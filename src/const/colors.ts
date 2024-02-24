import { Appearance } from 'react-native'

export function getBaseColors() {
  const isLightMode = Appearance.getColorScheme() === 'light'
  return {
    DOMINANT: isLightMode ? '#fafafa' : '#1f1f1f',
    PRIMARY: '#4f46e5',
    SECONDARY: '#ffc04f',
    TEXT: isLightMode ? '#18181b' : '#f4f4f5',
    LINK: isLightMode ? '#4f46e5' : '#ffc04f',
  }
}
