import React, { createContext, useState } from 'react'

export type ThemeType = 'dark' | 'light'

export interface ITheme {
  currentTheme: ThemeType
  setCurrentTheme: (newTheme: ThemeType) => void
}

export const ThemeContext = createContext<ITheme | null>(null)

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark')

  const value = { currentTheme, setCurrentTheme }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}
