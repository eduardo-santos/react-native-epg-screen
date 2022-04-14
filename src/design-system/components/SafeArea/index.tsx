import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@hooks/useTheme'
import { generateStyle } from './styles'

interface IDynamicStatusBarProps {
  children: React.ReactNode
}

export const SafeArea: React.FC<IDynamicStatusBarProps> = ({ children }) => {
  const { colors } = useTheme()

  const styles = generateStyle(colors)

  return (
    <>
      <SafeAreaView style={styles.top} />
      <SafeAreaView style={styles.bottom}>{children}</SafeAreaView>
    </>
  )
}
