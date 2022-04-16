import { StyleSheet } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (colors: IColors, leftBarCardHeight: number) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
    },
    scheduleCard: {
      height: leftBarCardHeight,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.app.FORTIARY,
      borderRightWidth: 1,
      borderRightColor: colors.app.FORTIARY,
    },
  })
}
