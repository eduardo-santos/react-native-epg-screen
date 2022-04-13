import { Colors } from '@colors'

type ColorAlpha = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1

export const getColorWithTransparency = (
  color: Colors,
  alpha: ColorAlpha = 1,
) => {
  const opacity = Math.round(alpha * 255)
  return color + opacity.toString(16).toUpperCase()
}
