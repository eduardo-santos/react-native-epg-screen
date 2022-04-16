import React from 'react'
import { ScrollView, View } from 'react-native'
import { IChannel } from '@api/models/IEPGResponseModel'
import { ChannelSchedules } from '@components/EPG'

interface IChannelSchedulesContainerProps {
  channels: IChannel[]
  leftBarCardHeight: number
}

export const ChannelSchedulesContainer: React.FC<
  IChannelSchedulesContainerProps
> = ({ channels, leftBarCardHeight }) => {
  return (
    <ScrollView horizontal>
      <View>
        {channels.map(channel => (
          <ChannelSchedules
            key={channel.id}
            schedules={channel.schedules}
            leftBarCardHeight={leftBarCardHeight}
          />
        ))}
      </View>
    </ScrollView>
  )
}
