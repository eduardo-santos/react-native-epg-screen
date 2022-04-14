import { ColorsDefault, ColorsDark, ColorsLight } from '@colors'

export interface IColors {
  default: typeof ColorsDefault
  app: typeof ColorsDark | typeof ColorsLight
}

export type Colors =
  | typeof ColorsDefault
  | typeof ColorsDark
  | typeof ColorsLight
export type ColorAlpha = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
