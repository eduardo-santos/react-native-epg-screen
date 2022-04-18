import { StyleSheet, ViewStyle } from 'react-native'
import { IColors } from '@ds/colors/type'
import { ScreenHeight, ScreenWidth } from '@utils/dimensions'

export const RIGHT_PADDING = 32

export const generateStyle = (
  colors: IColors,
  textWidth: number,
  xMarkLineLeftPosition: number,
  xMarkLineRightPosition: number,
) => {
  const halfTextWidth = textWidth / 2
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
      paddingRight: RIGHT_PADDING,
      paddingVertical: 12,
    },
    intervalPressable: {
      justifyContent: 'center',
    },
    leftChevron: {
      position: 'absolute',
      left: -halfTextWidth - 24,
      alignSelf: 'center',
    },
    rightChevron: {
      position: 'absolute',
      right: -halfTextWidth,
      alignSelf: 'center',
    },
    leftText: {
      marginLeft: -halfTextWidth,
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
