import { StyleSheet } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (colors: IColors) => {
  return StyleSheet.create({
    wrapper: {
      borderBottomWidth: 1,
      borderBottomColor: colors.app.FORTIARY,
    },
  })
}
