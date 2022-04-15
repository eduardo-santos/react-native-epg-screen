import { ImageSourcePropType } from 'react-native'
import LOGO from '@assets/images/logo.png'

// Channels
import ACCEDO from '@assets/images/channels/accedo_logo.png'
import DISNEY from '@assets/images/channels/disney_logo.png'
import FOX from '@assets/images/channels/fox_logo.png'
import HBO from '@assets/images/channels/HBO_logo.png'
import SHOWTIME from '@assets/images/channels/showtime_logo.png'
import SIXX from '@assets/images/channels/sixx_logo.png'
import SKY from '@assets/images/channels/sky_logo.png'
import VOX from '@assets/images/channels/vox_logo.png'
import ZDF from '@assets/images/channels/ZDF_logo.png'

const CHANNELS = {
  ACCEDO,
  DISNEY,
  FOX,
  HBO,
  SHOWTIME,
  SIXX,
  SKY,
  VOX,
  ZDF,
}

interface IImages {
  LOGO: ImageSourcePropType
  CHANNELS: {
    [key: string]: ImageSourcePropType
  }
}

export const IMAGES: IImages = {
  LOGO,
  CHANNELS: {
    ['ard']: CHANNELS.HBO,
    ['pro7']: CHANNELS.SIXX,
    ['arte-hd']: CHANNELS.DISNEY,
    ['antena3']: CHANNELS.FOX,
    ['lasexta']: CHANNELS.SHOWTIME,
    ['24h']: CHANNELS.VOX,
    ['a3series']: CHANNELS.ACCEDO,
    ['eurosport-de']: CHANNELS.SKY,
    ['zdf']: CHANNELS.ZDF,
  },
}
