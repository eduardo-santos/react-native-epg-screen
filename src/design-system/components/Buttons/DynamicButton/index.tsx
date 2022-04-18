import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { DynamicText } from '@components/DynamicText'
import { generateStyle } from './styles'

interface IDynamicButtonProps {
  text: string
  onPress: () => void
  position?: 'relative' | 'absolute'
}

export const DynamicButton: React.FC<IDynamicButtonProps> = ({
  text,
  onPress,
}) => {
  const { colors } = useTheme()

  const styles = generateStyle(colors)

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <DynamicText variant={'paragraph'} bold>
          {text}
        </DynamicText>
      </View>
    </TouchableOpacity>
  )
}
