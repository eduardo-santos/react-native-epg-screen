import React from 'react'
import { View } from 'react-native'
import { ApiError, ApiLoading, ScreenWrapper } from '@components'
import {
  WeekDateInterval,
  DayHourInterval,
  ChannelsContainer,
} from '@components/EPG'
import { useEPGApi } from '@api/hooks'

export const EPGScreen: React.FC = () => {
  const { reponseData, loading, error } = useEPGApi()

  if (loading) {
    return <ApiLoading />
  }

  if (error) {
    return <ApiError />
  }

  return (
    <ScreenWrapper>
      <View>
        <WeekDateInterval onSelectDate={(date: Date) => console.log(date)} />
        <DayHourInterval />
        <ChannelsContainer channels={reponseData.channels} />
      </View>
    </ScreenWrapper>
  )
}
