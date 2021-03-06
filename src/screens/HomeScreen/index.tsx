import React from 'react'
import { View } from 'react-native'
import { ApiError, ApiLoading, DynamicText, ScreenWrapper } from '@components'
import { useAuthAnonymousApi } from '@api/hooks'
import { styles } from './styles'

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
      <View style={styles.wrapper}>
        <DynamicText variant="header1" bold>
          Welcome
        </DynamicText>
        <DynamicText variant="paragraph">{reponseData.sessionId}</DynamicText>
      </View>
    </ScreenWrapper>
  )
}
