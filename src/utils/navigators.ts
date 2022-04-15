import { FontIcons } from '@utils/fontIcons.enum'
import { Routes } from '@routes/enums/routeNames.enum'

export const getTabBarIconNameByRoute = (routeName: string): string => {
  switch (routeName) {
    case Routes.HOME:
      return FontIcons.HOME
    case Routes.EPG:
      return FontIcons.EPG
    default:
      return ''
  }
}
