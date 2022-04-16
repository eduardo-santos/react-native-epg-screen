import React, { useState } from 'react'
import { LayoutRectangle, View } from 'react-native'
import { IMAGES } from '@utils/images'
import { IChannel } from '@api/models/IEPGResponseModel'
import { styles } from 'screens/EPGScreen'
import { ChannelCard } from '@components/EPG'

interface IChannelsLeftBarProps {
  channels: IChannel[]
  onSelectChannel: (index: number) => void
  getLeftCardLayout?: ({ width, height, x, y }: LayoutRectangle) => void
}

export const ChannelsLeftBar: React.FC<IChannelsLeftBarProps> = ({
  channels,
  onSelectChannel,
  getLeftCardLayout,
}) => {
  const [selectedChannelIndex, setSelectedChannelIndex] = useState<number>()

  const handleSelectChannel = (index: number) => {
    if (index === selectedChannelIndex) return

    setSelectedChannelIndex(index)
    onSelectChannel(index)
  }

  const handleGetCardLayout = ({ width, height, x, y }: LayoutRectangle) => {
    getLeftCardLayout && getLeftCardLayout({ width, height, x, y })
  }

  return (
    <View>
      {channels.map((channel, index) => (
        <View key={index} style={styles.wrapper}>
          <ChannelCard
            key={`${channel.id}-${index}`}
            logo={IMAGES.CHANNELS[channel.id]}
            onPress={() => handleSelectChannel(index)}
            isSelected={selectedChannelIndex === index}
            getLayout={handleGetCardLayout}
          />
        </View>
      ))}
    </View>
  )
}
