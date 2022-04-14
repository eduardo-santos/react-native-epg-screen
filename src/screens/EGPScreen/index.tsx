import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { ScreenWrapper } from '@components/ScreenWrapper'
import { useTheme } from '@hooks/useTheme'
import { IColors } from '@ds/colors/type'

export const EGPScreen: React.FC = () => {
  const { colors } = useTheme()

  const styles = generateStyle(colors)

  return (
    <ScreenWrapper>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.background}>
          <Text>EGP Screen</Text>
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
