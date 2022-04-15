import React from 'react'
import { View } from 'react-native'
import { DynamicText, ScreenWrapper } from '@components'
import { styles } from './styles'

export const ApiError: React.FC = () => {
  return (
    <ScreenWrapper usePadding>
      <View style={styles.wrapper}>
        <DynamicText variant="header1" bold style={styles.text}>
          Ops! An Error ocurred! {'\n'}
          <DynamicText variant="header3">
            Check if you're running the mock-api on localhost
          </DynamicText>
        </DynamicText>
      </View>
    </ScreenWrapper>
  )
}
