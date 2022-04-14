import { DynamicStatusBar, SafeArea } from '@components'
import React from 'react'
import { View } from 'react-native'
import { generateStyle } from './styles'

interface IScreenWrapperProps {
  children: React.ReactNode
  useSafeArea?: boolean
  usePadding?: boolean
}

export const ScreenWrapper: React.FC<IScreenWrapperProps> = ({
  children,
  useSafeArea,
  usePadding,
}) => {
  const styles = generateStyle(usePadding)

  if (useSafeArea) {
    return (
      <SafeArea>
        <DynamicStatusBar />
        <View style={styles.wrapper}>{children}</View>
      </SafeArea>
    )
  }

  return (
    <>
      <DynamicStatusBar />
      <View style={styles.wrapper}>{children}</View>
    </>
  )
}
