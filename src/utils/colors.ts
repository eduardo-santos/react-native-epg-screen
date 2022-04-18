import { ColorsDefault, ColorsDark, ColorsLight } from '@colors'
import { ColorAlpha, Colors, IColors } from '@ds/colors/type'
import { ThemeType } from '@contexts/ThemeContext'

export const getColorWithTransparency = (
  color: Colors,
  alpha: ColorAlpha = 1,
) => {
  const opacity = Math.round(alpha * 255)
  return color + opacity.toString(16).toUpperCase()
}

export const getThemeColors = (currentTheme: ThemeType): IColors => {
  if (currentTheme === 'dark') {
    return {
      default: ColorsDefault,
      app: ColorsDark,
    }
  }

  return {
    default: ColorsDefault,
    app: ColorsLight,
  }
}
