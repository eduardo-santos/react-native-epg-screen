import { StyleSheet } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (colors: IColors) => {
  return StyleSheet.create({
    top: {
      flex: 0,
      backgroundColor: colors.app.SECONDARY,
    },
    bottom: {
      flex: 1,
      backgroundColor: colors.app.TERTIARY,
    },
  })
}
