import { useContext } from 'react'
import { useColorScheme } from 'react-native'
import { IColors } from '@ds/colors/type'
import { getThemeColors } from '@utils/colors'
import { ITheme, ThemeContext, ThemeType } from '@contexts/ThemeContext'

interface IUseThemeOutputProps {
  isDarkMode: boolean
  colors: IColors
  currentTheme: ThemeType
  setCurrentTheme: (newTheme: ThemeType) => void
}

export const useTheme = (): IUseThemeOutputProps => {
  const isDarkMode = useColorScheme() === 'dark'

  const { currentTheme, setCurrentTheme } = useContext(ThemeContext) as ITheme

  const colors = getThemeColors(currentTheme)

  return {
    isDarkMode,
    colors,
    currentTheme,
    setCurrentTheme,
  }
}
