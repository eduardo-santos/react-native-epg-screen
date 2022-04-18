import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import {
  getMinutesDifferenceBetweenDates,
  getSecondsDifferenceBetweenDates,
} from '@utils/date'
import { useTheme } from '@hooks/useTheme'
import { generateStyle } from './styles'

interface ITimeInteractiveVerticalLineProps {
  moveTimeType: 'seconds' | 'minutes'
  totalMinutesInterval: number
  startDate: Date
  xStartPosition: number
  xEndPosition: number
  showLine: boolean
  showPastShadow: boolean
  onEndReached: () => void
}

export const TimeInteractiveVerticalLine: React.FC<
  ITimeInteractiveVerticalLineProps
> = ({
  moveTimeType,
  startDate,
  xStartPosition,
  xEndPosition,
  onEndReached,
  showLine,
  showPastShadow,
  totalMinutesInterval,
}) => {
  const { colors } = useTheme()

  const [liveDate, setLiveDate] = useState(new Date())

  useEffect(() => {
    const timeToWait = moveTimeType === 'seconds' ? 1000 : 1000 * 60

    const interval = setInterval(() => {
      setLiveDate(new Date())
    }, timeToWait)

    return () => clearInterval(interval)
  }, [])

  const getLinePositionFromLiveDate = () => {
    let lineHorizontalPosition: number = 0

    if (moveTimeType === 'seconds') {
      const differenceInSeconds = getSecondsDifferenceBetweenDates(
        liveDate,
        startDate,
      )

      const totalSecondsInterval = totalMinutesInterval * 60
      lineHorizontalPosition =
        (differenceInSeconds / totalSecondsInterval) * xEndPosition
    } else {
      const differenceInMinutes = getMinutesDifferenceBetweenDates(
        liveDate,
        startDate,
      )

      lineHorizontalPosition =
        (differenceInMinutes / totalMinutesInterval) * xEndPosition
    }

    const endReached = lineHorizontalPosition > xEndPosition

    if (endReached) {
      onEndReached()
    }

    return lineHorizontalPosition
  }

  const styles = generateStyle(
    colors,
    xStartPosition,
    xEndPosition,
    getLinePositionFromLiveDate(),
    showLine,
  )

  return (
    <>
      {showLine && (
        <View style={styles.thickCenterVerticalLine} pointerEvents="none" />
      )}
      {showLine && (
        <View style={styles.thinCenterVerticalLine} pointerEvents="none" />
      )}
      {showPastShadow && (
        <View style={styles.pastShadow} pointerEvents="none" />
      )}
    </>
  )
}
