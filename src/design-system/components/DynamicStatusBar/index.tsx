import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from '@hooks/useTheme'

export const DynamicStatusBar: React.FC = () => {
  const { isDarkMode } = useTheme()
  const barStyle = isDarkMode ? 'light-content' : 'dark-content'

  return <StatusBar barStyle={barStyle} />
}
