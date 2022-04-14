import { FontIcons } from '@utils/fontIcons.enum'
import { Routes } from '@routes/enums/routeNames.enum'

export const getTabBarIconNameByRoute = (routeName: string) => {
  switch (routeName) {
    case Routes.HOME:
      return FontIcons.HOME
    case Routes.EGP:
      return FontIcons.EGP
    default:
      return ''
  }
}
