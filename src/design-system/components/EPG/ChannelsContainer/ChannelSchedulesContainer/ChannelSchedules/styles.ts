import { StyleSheet } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (colors: IColors, leftBarCardHeight: number) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: colors.app.NO_PROGRAM,
    },
    scheduleCard: {
      height: leftBarCardHeight,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: 12,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.app.TOGGLE_ACTIVE,
      borderRightWidth: 1,
      borderRightColor: colors.app.TOGGLE_ACTIVE,
    },
  })
}
