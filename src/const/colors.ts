import { Appearance } from 'react-native'

export function getBaseColors() {
  const isLight = Appearance.getColorScheme() === 'light'
  return {
    DOMINANT: isLight ? '#fafafa' : '#1f1f1f',
    PRIMARY: '#4f46e5',
    SECONDARY: '#ffc04f',
    TEXT: isLight ? '#18181b' : '#f4f4f5',
    LINK: isLight ? '#4f46e5' : '#ffc04f',
  }
}
