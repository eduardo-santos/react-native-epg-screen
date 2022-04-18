import React from 'react'
import { Switch, View } from 'react-native'
import { DynamicText, ScreenWrapper } from '@components'
import { useTheme } from '@hooks/useTheme'
import { styles } from './styles'

export const SettingsScreen: React.FC = () => {
  const { currentTheme, setCurrentTheme, colors } = useTheme()

  const currentThemeName = currentTheme === 'light' ? 'Light' : 'Dark'

  const onThemeChange = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(newTheme)
  }

  return (
    <ScreenWrapper usePadding>
      <View style={styles.wrapper}>
        <DynamicText variant="header1" bold>
          Theme
        </DynamicText>
        <View style={styles.themeContainer}>
          <Switch
            trackColor={{
              false: colors.app.FORTIARY,
              true: colors.app.TOGGLE_ACTIVE,
            }}
            thumbColor={colors.app.PRIMARY}
            ios_backgroundColor={colors.app.FORTIARY}
            onValueChange={onThemeChange}
            value={currentTheme === 'dark'}
          />
          <DynamicText variant="header3" bold style={styles.themeName}>
            {currentThemeName}
          </DynamicText>
        </View>
      </View>
    </ScreenWrapper>
  )
}
