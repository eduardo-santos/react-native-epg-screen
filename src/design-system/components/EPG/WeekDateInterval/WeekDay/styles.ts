import { StyleSheet } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (colors: IColors, isSelected?: boolean) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 16,
      marginBottom: 4,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: isSelected ? 2 : 0,
      borderBottomColor: colors.app.PRIMARY,
    },
  })
}
