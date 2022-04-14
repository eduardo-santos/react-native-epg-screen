import React from 'react'
import { Text, View } from 'react-native'
import { ScreenWrapper } from '@components'
import { styles } from './styles'

export const ApiError: React.FC = () => {
  return (
    <ScreenWrapper usePadding>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Ops! An Error ocurred! {'\n'}
          Check if you're running the mock-api on localhost ant try again
        </Text>
      </View>
    </ScreenWrapper>
  )
}
