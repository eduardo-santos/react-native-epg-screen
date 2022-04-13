import { Colors } from '@colors'
import { StyleSheet } from 'react-native'

export const generateStyle = (isDarkMode: boolean) => {
  return StyleSheet.create({
    background: {
      backgroundColor: isDarkMode ? Colors.BLACK : Colors.WHITE,
    },
  })
}
