import React, { useRef, useState } from 'react'
import {
  FlatList,
  LayoutRectangle,
  ListRenderItem,
  TouchableHighlight,
  View,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  ITimeInterval,
  getDayHoursIntervals,
  getDateIndexFromInterval,
} from '@utils/date'
import { useTheme } from '@hooks/useTheme'
import { DynamicButton, DynamicText } from '@components'
import { TimeInteractiveVerticalLine } from '@components/EPG'
import { CHANNEL_LEFT_BAR_WIDTH } from '@components/EPG/ChannelsContainer/ChannelsLeftBar/styles'
import { ScreenWidth } from '@utils/dimensions'
import { generateStyle, RIGHT_PADDING } from './styles'

interface IWeekDateIntervalProps {
  minutesInterval?: number
}

const currentDate: Date = new Date()
const hoursInterval = 1
const dayHoursInterval: ITimeInterval[] = getDayHoursIntervals(
  currentDate,
  hoursInterval,
)
const currentDateIndex = getDateIndexFromInterval(currentDate, dayHoursInterval)

const viewabilityConfig = {
  itemVisiblePercentThreshold: 100,
  waitForInteraction: true,
}

export const DayHourInterval: React.FC<IWeekDateIntervalProps> = ({
  minutesInterval = 60,
}) => {
  const { colors } = useTheme()

  const flatListRef = useRef<FlatList<ITimeInterval>>(null)
  const [textWidth, setTextWidth] = useState<number>(0)
  const [liveTimeIntervalIndex, setLiveTimeIntervalIndex] =
    useState<number>(currentDateIndex)
  const [selectedTimeIntervalIndex, setSelectedTimeIntervalIndex] =
    useState<number>(currentDateIndex)

  const paddingLeft = CHANNEL_LEFT_BAR_WIDTH
  const xLineStartPosition = paddingLeft
  const xMarkLineLeftPosition = xLineStartPosition - 2
  const xMarkLineRightPosition = ScreenWidth - textWidth / 2 - RIGHT_PADDING
  const xLineEndPosition = xMarkLineRightPosition - paddingLeft

  const startInteractiveLineDate: Date =
    dayHoursInterval[liveTimeIntervalIndex].startTime.date

  const styles = generateStyle(
    colors,
    textWidth,
    xMarkLineLeftPosition,
    xMarkLineRightPosition,
  )

  const scrollToIndex = (index: number) => {
    flatListRef?.current?.scrollToIndex({
      index,
      viewPosition: 0,
      animated: true,
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

  const handleOnLayout = ({ width }: LayoutRectangle) => {
    setTextWidth(width)
  }

  const handleChangeInterval = (nextIntervalIndex: number) => {
    if (nextIntervalIndex >= 0 && nextIntervalIndex <= 23) {
      setSelectedTimeIntervalIndex(nextIntervalIndex)
      scrollToIndex(nextIntervalIndex)
    }
  }

  const goToNextFutureInterval = () => {
    handleChangeInterval(selectedTimeIntervalIndex + 1)
  }

  const goToNextPastInterval = () => {
    handleChangeInterval(selectedTimeIntervalIndex - 1)
  }

  const onPressNowButton = () => {
    handleChangeInterval(liveTimeIntervalIndex)
  }

  const onCurrentIntervalEndReached = () => {
    const nextIndex =
      liveTimeIntervalIndex + 1 > 23 ? 0 : liveTimeIntervalIndex + 1

    setLiveTimeIntervalIndex(nextIndex)
    handleChangeInterval(nextIndex)
  }

  const renderItem: ListRenderItem<ITimeInterval> = ({ item: interval }) => {
    // Prevent to call getTextLayout multiple times because every text has the same width
    const customProps = textWidth <= 0 ? { getTextLayout: handleOnLayout } : {}
    const { startTime, endTime } = interval


    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
          onPress={goToNextPastInterval}
          style={styles.intervalPressable}>
          <>
            {selectedTimeIntervalIndex > 0 && (
              <MaterialCommunityIcons
                name="chevron-left"
                size={22}
                color={colors.app.ACCENT_2}
                style={styles.leftChevron}
              />
            )}
            <DynamicText
              variant="header3"
              color={colors.app.ACCENT}
              style={styles.leftText}
              {...customProps}>
              {startTime.formatted}
            </DynamicText>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={goToNextFutureInterval}
          style={styles.intervalPressable}>
          <>
            <DynamicText variant="header3" color={colors.app.ACCENT}>
              {endTime.formatted}
            </DynamicText>
            {selectedTimeIntervalIndex < 23 && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={22}
                color={colors.app.ACCENT_2}
                style={styles.rightChevron}
              />
            )}
          </>
        </TouchableHighlight>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        keyExtractor={(item, i) => `${item}-${i}`}
        data={dayHoursInterval}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={handleScrollToIndexFailed}
        scrollEnabled={false}
        viewabilityConfig={viewabilityConfig}
        initialScrollIndex={liveTimeIntervalIndex}
        getItemLayout={(_, index) => ({
          length: ScreenWidth,
          offset: ScreenWidth * index,
          index,
        })}
      />
      <TimeInteractiveVerticalLine
        moveTimeType="seconds"
        totalMinutesInterval={minutesInterval * hoursInterval}
        startDate={startInteractiveLineDate}
        xStartPosition={xLineStartPosition}
        xEndPosition={xLineEndPosition}
        showLine={selectedTimeIntervalIndex === liveTimeIntervalIndex}
        showPastShadow={selectedTimeIntervalIndex <= liveTimeIntervalIndex}
        onEndReached={onCurrentIntervalEndReached}
      />
      <View style={styles.leftMarkLine} />
      <View style={styles.rightMarkLine} />
      <View style={styles.nowButton}>
        <DynamicButton text="NOW" onPress={onPressNowButton} />
      </View>
    </View>
  )
}
