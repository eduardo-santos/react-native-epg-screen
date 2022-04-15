import React from 'react'
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { generateStyle } from './styles'

interface IChannelCardProps {
  logo: ImageSourcePropType
  onPress: () => void
  isSelected?: boolean
}

export const ChannelCard: React.FC<IChannelCardProps> = ({
  logo,
  onPress,
  isSelected,
}) => {
  const { colors } = useTheme()

  const styles = generateStyle(colors, isSelected)

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.wrapper]}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>
    </TouchableOpacity>
  )
}
