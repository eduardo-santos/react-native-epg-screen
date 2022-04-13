import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { generateStyle } from './styles'

interface IDynamicStatusBarProps {
  children: React.ReactNode
}

export const SafeArea: React.FC<IDynamicStatusBarProps> = ({ children }) => {
  const { isDarkMode } = useTheme()

  const styles = generateStyle(isDarkMode)

  return <SafeAreaView style={styles.background}>{children}</SafeAreaView>
}
