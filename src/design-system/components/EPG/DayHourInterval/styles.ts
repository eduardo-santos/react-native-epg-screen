import { StyleSheet, ViewStyle } from 'react-native'
import { IColors } from '@ds/colors/type'
import { ScreenHeight } from '@utils/dimensions'

export const generateStyle = (
  colors: IColors,
  textWidth: number,
  xMarkLineLeftPosition: number,
  xMarkLineRightPosition: number,
) => {
  const lineMarkStyle: ViewStyle = {
    width: 2,
    backgroundColor: colors.app.FORTIARY,
    position: 'absolute',
    top: 38,
    bottom: 0,
  }

  return StyleSheet.create({
    wrapper: {
      width: ScreenWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: colors.app.FORTIARY,
      paddingLeft: xMarkLineLeftPosition,
      paddingRight: 16,
      paddingVertical: 12,
    },
    leftText: {
      marginLeft: -textWidth / 2,
    },
    leftMarkLine: {
      ...lineMarkStyle,
      left: xMarkLineLeftPosition,
    },
    rightMarkLine: {
      ...lineMarkStyle,
      left: xMarkLineRightPosition,
    },
    nowButton: {
      position: 'absolute',
      top: ScreenHeight * 0.62,
      right: 16,
      zIndex: 1000,
    },
  })
}
