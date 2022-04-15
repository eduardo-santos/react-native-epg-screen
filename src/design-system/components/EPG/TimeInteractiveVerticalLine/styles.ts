import { StyleSheet, ViewStyle } from 'react-native'
import { IColors } from '@ds/colors/type'
import { ScreenHeight } from '@utils/dimensions'

const verticalLineProps = (
  colors: IColors,
  verticalLineLeft: number,
): ViewStyle => {
  return {
    backgroundColor: colors.app.PRIMARY,
    position: 'absolute',
    top: 38,
    bottom: 0,
    left: verticalLineLeft,
    borderRadius: 6,
  }
}

export const generateStyle = (
  colors: IColors,
  xStartPosition: number,
  livePosition: number,
) => {
  const verticalLineLeft = xStartPosition + livePosition

  return StyleSheet.create({
    thickCenterVerticalLine: {
      ...verticalLineProps(colors, verticalLineLeft),
      width: 4,
      zIndex: 1,
    },
    thinCenterVerticalLine: {
      ...verticalLineProps(colors, verticalLineLeft),
      width: 1,
      height: ScreenHeight,
      left: verticalLineLeft + 1,
      zIndex: 0,
    },
  })
}
