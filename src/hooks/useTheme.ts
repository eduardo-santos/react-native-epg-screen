import { useColorScheme } from 'react-native'
import { IColors } from '@ds/colors/type'
import { getThemeColors } from '@utils/colors'

interface IUseThemeOutputProps {
  isDarkMode: boolean
  colors: IColors
}

export const useTheme = (): IUseThemeOutputProps => {
  const isDarkMode = useColorScheme() === 'dark'

  const colors = getThemeColors(isDarkMode)

  return {
    isDarkMode,
    colors,
  }
}
