import { StyleSheet } from 'react-native'

export const generateStyle = (width = 50, height = 50) => {
  return StyleSheet.create({
    logo: {
      width,
      height,
    },
  })
}
