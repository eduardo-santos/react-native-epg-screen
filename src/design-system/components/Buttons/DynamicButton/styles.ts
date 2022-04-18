import { StyleSheet } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (colors: IColors) => {
  return StyleSheet.create({
    wrapper: {
      backgroundColor: colors.app.PRIMARY,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
  })
}
