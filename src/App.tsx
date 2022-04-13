/**
 * React Native EPG Screen App
 *
 * @version 1.0.0
 * @author [Eduardo Santos](https://github.com/eduardo-santos)
 */

import React from 'react'
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native'
import { ScreenWrapper } from '@components/ScreenWrapper'
import { Colors } from '@colors'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const styles = generateStyle(isDarkMode)

  return (
    <ScreenWrapper>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}>
        <View style={styles.background} />
        <Text>Olá mundo</Text>
      </ScrollView>
    </ScreenWrapper>
  )
}

const generateStyle = (isDarkMode: boolean) => {
  return StyleSheet.create({
    background: {
      backgroundColor: isDarkMode ? Colors.BLACK : Colors.WHITE,
    },
  })
}

export default App
