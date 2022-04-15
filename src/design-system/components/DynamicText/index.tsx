import React from 'react'
import { Text, TextProps } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { Colors } from '@ds/colors/type'
import { styles, TextVariant } from './styles'

interface IDynamicTextProps extends TextProps {
  children: React.ReactNode
  variant: TextVariant
  bold?: boolean
  color?: Colors
}

export const DynamicText: React.FC<IDynamicTextProps> = ({
  children,
  style,
  variant,
  bold,
  color,
  ...props
}) => {
  const { colors } = useTheme()

  const appliedStyles = [styles[variant]]

  appliedStyles.push({ fontWeight: 'normal' })
  appliedStyles.push({ color: colors.app.ACCENT })

  if (bold) {
    appliedStyles.push({ fontWeight: 'bold' })
  }

  if (color) {
    appliedStyles.push({ color })
  }

  return (
    <Text style={[...appliedStyles, style]} {...props}>
      {children}
    </Text>
  )
}
