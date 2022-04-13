import { useTheme } from '@hooks/useTheme'
import React from 'react'
import { StatusBar } from 'react-native'

export const DynamicStatusBar: React.FC = () => {
  const { isDarkMode } = useTheme()
  const barStyle = isDarkMode ? 'light-content' : 'dark-content'

  return <StatusBar barStyle={barStyle} />
}
