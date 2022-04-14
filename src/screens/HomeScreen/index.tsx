import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { IColors } from '@ds/colors/type'
import { ApiError, ApiLoading, ScreenWrapper } from '@components'
import { useAuthAnonymousApi } from '@api/hooks'

export const HomeScreen: React.FC = () => {
  const { colors } = useTheme()
  const { reponseData, loading, error } = useAuthAnonymousApi()

  if (loading) {
    return <ApiLoading />
  }

  if (error) {
    return <ApiError />
  }

  const styles = generateStyle(colors)

  return (
    <ScreenWrapper>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.background}>
          <Text>Home Screen</Text>
          <Text>{reponseData.sessionId}</Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const generateStyle = (colors: IColors) => {
  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.default.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
}
