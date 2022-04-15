import { StyleSheet, ViewStyle } from 'react-native'
import { IColors } from '@ds/colors/type'

export const generateStyle = (
  colors: IColors,
  xStartPosition: number,
  xEndPosition: number,
) => {
  const paddingLeft = 70

  const lineMarkStyle: ViewStyle = {
    width: 2,
    backgroundColor: colors.app.FORTIARY,
    position: 'absolute',
    top: 38,
    bottom: 0,
  }

  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: colors.app.FORTIARY,
      paddingLeft: paddingLeft,
      paddingRight: 16,
      paddingVertical: 12,
    },
    leftMarkLine: {
      ...lineMarkStyle,
      left: xStartPosition,
    },
    rightMarkLine: {
      ...lineMarkStyle,
      left: xEndPosition,
    },
  })
}
