import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { ScreenWrapper } from '@components/ScreenWrapper'
import { styles } from './styles'

export const ApiLoading: React.FC = () => {
  const { colors } = useTheme()

  return (
    <ScreenWrapper usePadding>
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" color={colors.app.PRIMARY} />
      </View>
    </ScreenWrapper>
  )
}
