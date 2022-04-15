import React from 'react'
import { LayoutChangeEvent, Text, TextProps } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { Colors } from '@ds/colors/type'
import { styles, TextVariant } from './styles'

export interface ITextLayout {
  width: number
  height: number
  x: number
  y: number
}
interface IDynamicTextProps extends TextProps {
  children: React.ReactNode
  variant: TextVariant
  bold?: boolean
  color?: Colors
  align?: 'auto' | 'center' | 'justify' | 'left' | 'right'
  getTextLayout?: ({ width, height, x, y }: ITextLayout) => void
}

export const DynamicText: React.FC<IDynamicTextProps> = ({
  children,
  style,
  variant,
  bold,
  color,
  align,
  getTextLayout,
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

  if (align) {
    appliedStyles.push({ textAlign: align })
  }

  const handleOnTextLayout = (e: LayoutChangeEvent) => {
    const { width, height, x, y } = e.nativeEvent.layout

    getTextLayout && getTextLayout({ width, height, x, y })
  }

  if (getTextLayout) {
    return (
      <Text
        onLayout={handleOnTextLayout}
        style={[...appliedStyles, style]}
        {...props}>
        {children}
      </Text>
    )
  }

  return (
    <Text style={[...appliedStyles, style]} {...props}>
      {children}
    </Text>
  )
}
