import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { DynamicText } from '@components/DynamicText'
import { IChannelSchedule } from '@api/models/IEPGResponseModel'
import {
  formatDate,
  getCleanHour,
  getMinutesDifferenceBetweenDates,
} from '@utils/date'
import { useEPGContext } from '@contexts/EPGContext'
import { sortScheduleAsc } from './utils'
import { generateStyle } from './styles'

interface IChannelSchedulesProps {
  schedules: IChannelSchedule[]
  leftBarCardHeight: number
  channelId: string
}

export const ChannelSchedules: React.FC<IChannelSchedulesProps> = ({
  schedules,
  leftBarCardHeight,
  channelId,
}) => {
  const { scrollWidthRef } = useEPGContext()

  const { colors } = useTheme()

  const styles = generateStyle(colors, leftBarCardHeight)

  let lastEndDate: Date | undefined

  const shouldSkipSchedule = (schedule: IChannelSchedule) => {
    const scheduleDay = formatDate(schedule.start, 'dd')

    return scheduleDay !== '20'
  }

  const renderEmptySchedule = (width: number) => {
    return (
      <View
        style={[
          styles.scheduleCard,
          {
            backgroundColor: colors.app.NO_PROGRAM,
            width: width,
          },
        ]}>
        <DynamicText variant="medium" numberOfLines={2}>
          No Program
        </DynamicText>
      </View>
    )
  }

  return (
    <View style={[styles.wrapper, { width: scrollWidthRef?.current! * 24 }]}>
      {schedules.sort(sortScheduleAsc).map((schedule, index) => {
        if (shouldSkipSchedule(schedule)) return

        if (lastEndDate === undefined) {
          lastEndDate = getCleanHour(schedule.start, 0)
        }

        let durationInMinutes = getMinutesDifferenceBetweenDates(
          schedule.end,
          schedule.start,
        )

        const diffLastDateAndNewStartDate = getMinutesDifferenceBetweenDates(
          new Date(schedule.start),
          new Date(lastEndDate),
        )

        const cardWidth = scrollWidthRef?.current! * (durationInMinutes / 60)

        const diffLastDateAndNewStartDateCardWidth =
          diffLastDateAndNewStartDate > 0
            ? scrollWidthRef?.current! * (diffLastDateAndNewStartDate / 60)
            : 0

        lastEndDate = new Date(schedule.end)

        const formattedStartDate = formatDate(schedule.start, 'HH:mm')
        const formattedEndDate = formatDate(schedule.end, 'HH:mm')

        const backgroundColor =
          index % 2 === 0
            ? colors.app.PROGRAM_CARD_1
            : colors.app.PROGRAM_CARD_2

        return (
          <View
            style={styles.wrapper}
            key={`${channelId}-${schedule.id}-${index}`}>
            {diffLastDateAndNewStartDateCardWidth > 0 &&
              renderEmptySchedule(diffLastDateAndNewStartDateCardWidth)}
            <View
              style={[
                styles.scheduleCard,
                {
                  backgroundColor,
                  width: cardWidth,
                },
              ]}>
              <DynamicText variant="medium" numberOfLines={2}>
                {schedule.title}
              </DynamicText>
              <DynamicText
                variant="small"
                color={
                  colors.app.ACCENT_2
                }>{`${formattedStartDate} - ${formattedEndDate}`}</DynamicText>
            </View>
          </View>
        )
      })}
    </View>
  )
}
