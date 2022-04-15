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
  totalMinutesInterval,
}) => {
  const { colors } = useTheme()

  const [liveDate, setLiveDate] = useState(new Date())

  useEffect(() => {
    const timeToWait = moveTimeType === 'seconds' ? 1000 : 1000 * 60

    const interval = setInterval(() => {
      setLiveDate(new Date())
    }, timeToWait)

    return () => clearTimeout(interval)
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

    return endReached ? xEndPosition : lineHorizontalPosition
  }

  const styles = generateStyle(
    colors,
    xStartPosition,
    getLinePositionFromLiveDate(),
  )

  return (
    <>
      <View style={styles.thickCenterVerticalLine} />
      <View style={styles.thinCenterVerticalLine} />
    </>
  )
}
