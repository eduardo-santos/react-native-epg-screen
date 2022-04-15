import { StyleSheet, TextStyle } from 'react-native'

export const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    lineHeight: 40,
  } as TextStyle,
  header2: {
    fontSize: 20,
    lineHeight: 28,
  } as TextStyle,
  header3: {
    fontSize: 18,
    lineHeight: 26,
  } as TextStyle,
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
  } as TextStyle,
  medium: {
    fontSize: 14,
    lineHeight: 18,
  } as TextStyle,
  small: {
    fontSize: 12,
    lineHeight: 16,
  } as TextStyle,
})

export type TextVariant = keyof typeof styles
