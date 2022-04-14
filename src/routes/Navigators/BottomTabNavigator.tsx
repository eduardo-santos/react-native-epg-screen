import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HomeScreen, EGPScreen } from '@screens'
import { Routes } from '@routes/enums/routeNames.enum'
import { getTabBarIconNameByRoute } from '@utils/navigators'
import { useTheme } from '@hooks/useTheme'
import { Logo } from '@components'

export type NavigatorParamsList = {
  [Routes.HOME]: undefined
  [Routes.EGP]: undefined
}

const Tab = createBottomTabNavigator<NavigatorParamsList>()

interface ITabNavigator {
  children: React.ReactNode
}

const TabNavigator: React.FC<ITabNavigator> = ({ children }) => {
  const { colors } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: () => <Logo />,
        headerTitleAlign: 'center',
        headerTintColor: colors.app.HIGHLIGHT,
        headerStyle: {
          backgroundColor: colors.app.SECONDARY,
          height: 110,
        },
        tabBarActiveTintColor: colors.app.PRIMARY,
        tabBarInactiveTintColor: colors.app.HIGHLIGHT,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.app.TERTIARY,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = getTabBarIconNameByRoute(route.name)

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          )
        },
      })}>
      {children}
    </Tab.Navigator>
  )
}

export const BottomTabNavigator: React.FC = () => {
  return (
    <TabNavigator>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.EGP} component={EGPScreen} />
    </TabNavigator>
  )
}
