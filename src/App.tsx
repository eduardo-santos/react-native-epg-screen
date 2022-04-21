/**
 * React Native EPG Screen App
 *
 * @version 1.0.0
 * @author [Eduardo Santos](https://github.com/eduardo-santos)
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomTabNavigator } from '@routes/Navigators/BottomTabNavigator'
import { configureApi } from '@api/config'
import { ThemeProvider } from '@contexts/ThemeContext'
import { EPGProvider } from '@contexts/EPGContext'

MaterialCommunityIcons.loadFont()
configureApi()

const App = () => {
  return (
    <ThemeProvider>
      <EPGProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </EPGProvider>
    </ThemeProvider>
  )
}

export default App
