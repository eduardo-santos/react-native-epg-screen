import { useColorScheme } from 'react-native'

interface IUseThemeOutputProps {
  isDarkMode: boolean
}

export const useTheme = (): IUseThemeOutputProps => {
  const isDarkMode = useColorScheme() === 'dark'

  return {
    isDarkMode,
  }
}
