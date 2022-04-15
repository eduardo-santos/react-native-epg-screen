import React, { useState } from 'react'
import { View } from 'react-native'
import { addDateMinutes, formatDate, subDateMinutes } from '@utils/date'
import { useTheme } from '@hooks/useTheme'
import { DynamicText, ITextLayout } from '@components/DynamicText'
import { TimeInteractiveVerticalLine } from '@components/EPG'
import { ScreenWidth } from '@utils/dimensions'
import { CHANNEL_LEFT_BAR_WIDTH } from '../ChannelsLeftBar/styles'
import { generateStyle } from './styles'

interface IWeekDateIntervalProps {
  minutesInterval?: number
}

const currentDate = new Date()

export const DayHourInterval: React.FC<IWeekDateIntervalProps> = ({
  minutesInterval = 1,
}) => {
  const { colors } = useTheme()

  const [textWidth, setTextWidth] = useState<number>(0)

  // const pastHour = subDateMinutes(currentDate, minutesInterval)
  const pastHour = subDateMinutes(currentDate, 0)
  const futureHour = addDateMinutes(currentDate, minutesInterval)
  const formattedPastHour = formatDate(pastHour, 'HH:mm')
  const formattedFutureHour = formatDate(futureHour, 'HH:mm')

  const paddingLeft = CHANNEL_LEFT_BAR_WIDTH
  // const xLineStartPosition = paddingLeft - textWidth / 2
  const xLineStartPosition = paddingLeft
  const xLineEndPosition = ScreenWidth - paddingLeft - textWidth - 16
  const xMarkLineLeftPosition = xLineStartPosition
  const xMarkLineRightPosition = ScreenWidth - textWidth / 2 - 16

  const styles = generateStyle(
    colors,
    textWidth,
    xMarkLineLeftPosition,
    xMarkLineRightPosition,
  )

  const handleOnLayout = ({ width }: ITextLayout) => {
    setTextWidth(width)
  }

  return (
    <View style={styles.wrapper}>
      <DynamicText
        variant="header3"
        color={colors.app.ACCENT}
        getTextLayout={handleOnLayout}
        style={styles.leftText}>
        {formattedPastHour}
      </DynamicText>
      <DynamicText variant="header3" color={colors.app.ACCENT}>
        {formattedFutureHour}
      </DynamicText>
      <TimeInteractiveVerticalLine
        moveTimeType="seconds"
        totalMinutesInterval={minutesInterval * 2}
        startDate={pastHour}
        xStartPosition={xLineStartPosition}
        xEndPosition={xLineEndPosition}
        onEndReached={() => {}}
      />
      <View style={styles.leftMarkLine} />
      <View style={styles.rightMarkLine} />
    </View>
  )
}
