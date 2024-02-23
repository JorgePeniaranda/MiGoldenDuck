import { Appearance } from "react-native";

export function getBaseColors() {
  const isLight = Appearance.getColorScheme() === 'light';
  return {
    DOMINANT: isLight ? '#f9f7f7' : '#1f1f1f',
    PRIMARY: '#4f46e5',
    SECONDARY: '#ffc04f',
  };
}