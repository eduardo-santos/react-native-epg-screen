import React from 'react'
import { ScrollView, View } from 'react-native'
import { IChannel } from '@api/models/IEPGResponseModel'
import { ChannelSchedules } from '@components/EPG'
import { useEPGContext } from '@contexts/EPGContext'

interface IChannelSchedulesContainerProps {
  channels: IChannel[]
  leftBarCardHeight: number
}

export const ChannelSchedulesContainer: React.FC<
  IChannelSchedulesContainerProps
> = ({ channels, leftBarCardHeight }) => {
  const {
    programsScrollRef,
    onProgramsScroll,
    onProgramsScrollEnd,
    scrollWidthRef,
  } = useEPGContext()

  return (
    <ScrollView
      ref={programsScrollRef}
      horizontal
      onScroll={onProgramsScroll}
      scrollEventThrottle={16}
      // disableIntervalMomentum
      decelerationRate="fast"
      snapToInterval={scrollWidthRef?.current!}
      onMomentumScrollEnd={onProgramsScrollEnd}>
      <View>
        {channels.map((channel, index) => (
          <ChannelSchedules
            key={`${channel.id}-${index}`}
            schedules={channel.schedules}
            leftBarCardHeight={leftBarCardHeight}
            channelId={channel.id}
          />
        ))}
      </View>
    </ScrollView>
  )
}
