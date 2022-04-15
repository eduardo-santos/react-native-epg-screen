import React, { useRef, useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { IMAGES } from '@utils/images'
import { IChannel } from '@api/models/IEPGResponseModel'
import { ChannelCard } from './ChannelCard'
import { styles } from './styles'
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs'

interface IChannelsLeftBarProps {
  channels: IChannel[]
}

export const ChannelsLeftBar: React.FC<IChannelsLeftBarProps> = ({
  channels,
}) => {
  const flatListRef = useRef<FlatList<IChannel>>(null)

  const [selectedChannelIndex, setSelectedChannelIndex] = useState<number>()

  const scrollToIndex = (index: number) => {
    flatListRef?.current?.scrollToIndex({
      index,
      viewPosition: 0.5,
    })
  }

  const handleScrollToIndexFailed = ({
    highestMeasuredFrameIndex,
  }: {
    index: number
    highestMeasuredFrameIndex: number
    averageItemLength: number
  }) => {
    if (!flatListRef.current?.scrollToIndex) return

    flatListRef?.current.scrollToIndex({
      index: highestMeasuredFrameIndex,
    })
  }

  const handleSelectedChannel = (index: number, channel: IChannel) => {
    if (index === selectedChannelIndex) return

    scrollToIndex(index)
    setSelectedChannelIndex(index)
  }

  const renderChannelItem: ListRenderItem<IChannel> = ({
    item: channelItem,
    index,
  }) => {
    const isSelected = selectedChannelIndex === index

    return (
      <ChannelCard
        key={`${channelItem.id}-${index}`}
        logo={IMAGES.CHANNELS[channelItem.id]}
        onPress={() => handleSelectedChannel(index, channelItem)}
        isSelected={isSelected}
      />
    )
  }

  return (
    <BottomTabBarHeightContext.Consumer>
      {tabBarHeight => (
        <FlatList
          ref={flatListRef}
          keyExtractor={(item, i) => `${item}-${i}`}
          data={channels}
          renderItem={renderChannelItem}
          showsVerticalScrollIndicator={false}
          style={styles.wrapper}
          onScrollToIndexFailed={handleScrollToIndexFailed}
          contentContainerStyle={{
            paddingBottom: tabBarHeight ? tabBarHeight * 2 : tabBarHeight,
          }}
        />
      )}
    </BottomTabBarHeightContext.Consumer>
  )
}
