import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ApiError, ApiLoading, ScreenWrapper } from '@components'
import {
  WeekDateInterval,
  DayHourInterval,
  ChannelsLeftBar,
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
      <View style={styles.wrapper}>
        <WeekDateInterval onSelectDate={(date: Date) => console.log(date)} />
        <DayHourInterval />
        <ChannelsLeftBar channels={reponseData.channels} />
      </View>
    </ScreenWrapper>
  )
}

export const styles = StyleSheet.create({
  wrapper: {},
})
