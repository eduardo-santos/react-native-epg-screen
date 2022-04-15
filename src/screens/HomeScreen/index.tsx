import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ApiError, ApiLoading, DynamicText, ScreenWrapper } from '@components'
import { useAuthAnonymousApi } from '@api/hooks'

export const HomeScreen: React.FC = () => {
  const { reponseData, loading, error } = useAuthAnonymousApi()

  if (loading) {
    return <ApiLoading />
  }

  if (error) {
    return <ApiError />
  }

  return (
    <ScreenWrapper>
      <View style={styles.background}>
        <DynamicText variant="header1" bold>
          Welcome
        </DynamicText>
        <DynamicText variant="paragraph">{reponseData.sessionId}</DynamicText>
      </View>
    </ScreenWrapper>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
