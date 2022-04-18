import React from 'react'
import { View, ViewStyle } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { DynamicText } from '@components/DynamicText'
import { IChannelSchedule } from '@api/models/IEPGResponseModel'
import { generateStyle } from './styles'

interface IChannelSchedulesProps {
  schedules: IChannelSchedule[]
  leftBarCardHeight: number
}

export const ChannelSchedules: React.FC<IChannelSchedulesProps> = ({
  schedules,
  leftBarCardHeight,
}) => {
  const { colors } = useTheme()

  const styles = generateStyle(colors, leftBarCardHeight)

  return (
    <View style={styles.wrapper}>
      {schedules.map((schedule, index) => {
        const backgroundColor =
          index % 2 === 0
            ? colors.app.PROGRAM_CARD_1
            : colors.app.PROGRAM_CARD_2

        return (
          <View
            key={index}
            style={[styles.scheduleCard, { backgroundColor } as ViewStyle]}>
            <DynamicText variant="medium">{schedule.title}</DynamicText>
          </View>
        )
      })}
    </View>
  )
}
