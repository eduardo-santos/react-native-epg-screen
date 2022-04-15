import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { IColors } from '@ds/colors/type'
import { ApiError, ApiLoading, DynamicText, ScreenWrapper } from '@components'
import { useEPGApi } from '@api/hooks'

export const EPGScreen: React.FC = () => {
  const { colors } = useTheme()
  const { reponseData, loading, error } = useEPGApi()

  if (loading) {
    return <ApiLoading />
  }

  if (error) {
    return <ApiError />
  }

  const styles = generateStyle(colors)

  return (
    <ScreenWrapper>
      <View style={styles.background}>
        <DynamicText variant="header1" bold>
          EGP Screen
        </DynamicText>
      </View>
    </ScreenWrapper>
  )
}

const generateStyle = (colors: IColors) => {
  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.app.BACKGROUND,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
}
