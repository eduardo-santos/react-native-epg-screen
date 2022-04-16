import { ScreenWidth } from '@utils/dimensions'
import { StyleSheet } from 'react-native'

export const CHANNEL_LEFT_BAR_WIDTH = ScreenWidth * 0.22

export const styles = StyleSheet.create({
  wrapper: {
    width: CHANNEL_LEFT_BAR_WIDTH,
    zIndex: -1,
  },
})
