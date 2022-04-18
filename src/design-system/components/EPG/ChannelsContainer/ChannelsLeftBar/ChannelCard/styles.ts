import { StyleSheet } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (colors: IColors, isSelected?: boolean) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderLeftWidth: isSelected ? 2 : 0,
      borderLeftColor: isSelected ? colors.app.PRIMARY : colors.app.FORTIARY,
      borderBottomWidth: isSelected ? 2 : 1,
      borderBottomColor: isSelected ? colors.app.PRIMARY : colors.app.FORTIARY,
    },
    logo: {
      width: 55,
      height: 60,
    },
  })
}
