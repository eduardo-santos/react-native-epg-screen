import React from 'react'
import {
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
  LayoutRectangle,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { generateStyle } from './styles'

interface IChannelCardProps {
  logo: ImageSourcePropType
  onPress: () => void
  isSelected?: boolean
  getLayout?: ({ width, height, x, y }: LayoutRectangle) => void
}

export const ChannelCard: React.FC<IChannelCardProps> = ({
  logo,
  onPress,
  isSelected,
  getLayout,
}) => {
  const { colors } = useTheme()

  const handleOnLayout = (e: LayoutChangeEvent) => {
    const { width, height, x, y } = e.nativeEvent.layout

    getLayout && getLayout({ width, height, x, y })
  }

  const styles = generateStyle(colors, isSelected)

  const customProps = getLayout ? { onLayout: handleOnLayout } : {}

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper} {...customProps}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>
    </TouchableOpacity>
  )
}
