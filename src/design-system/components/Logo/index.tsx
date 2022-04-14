import React from 'react'
import { Image } from 'react-native'
import { IMAGES } from '@utils/images'
import { generateStyle } from './styles'

interface ILogoProps {
  width?: number
  height?: number
}

export const Logo: React.FC<ILogoProps> = ({ width, height }) => {
  const styles = generateStyle(width, height)

  return <Image style={styles.logo} source={IMAGES.LOGO} />
}
