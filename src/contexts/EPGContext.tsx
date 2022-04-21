import React, { createContext, useContext, useRef, useState } from 'react'
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native'
import { ITimeInterval } from '@utils/date'
import { ScreenWidth } from '@utils/dimensions'

interface IEPG {
  dayHourScrollRef: React.RefObject<FlatList<ITimeInterval>>
  programsScrollRef: React.RefObject<ScrollView>
  scrollWidthRef: React.MutableRefObject<number>
  selectedTimeIntervalIndex: number
  setSelectedTimeIntervalIndex: (index: number) => void
  handleScrollDayHourToIndex: (index: number) => void
  handleScrollToPrograms: (index: number) => void
  onProgramsScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onProgramsScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  handleScrollToIndexFailed?:
    | ((info: {
        index: number
        highestMeasuredFrameIndex: number
        averageItemLength: number
      }) => void)
    | undefined
}

const EPGContext = createContext<IEPG | null>(null)

export const EPGProvider = (props: { children: React.ReactNode }) => {
  const dayHourScrollRef = useRef<FlatList<ITimeInterval>>(null)
  const programsScrollRef = useRef<ScrollView>(null)
  const scrollWidthRef = useRef<number>(0)
  const [selectedTimeIntervalIndex, setSelectedTimeIntervalIndex] =
    useState<number>(0)

  const handleScrollToIndexFailed = ({
    highestMeasuredFrameIndex,
  }: {
    index: number
    highestMeasuredFrameIndex: number
    averageItemLength: number
  }) => {
    console.log('[handleScrollToIndexFailed]')
    if (!dayHourScrollRef.current?.scrollToIndex) return

    dayHourScrollRef?.current.scrollToIndex({
      index: highestMeasuredFrameIndex,
    })
  }

  const handleScrollDayHourToIndex = (index: number) => {
    handleScrollToPrograms(index)

    dayHourScrollRef?.current?.scrollToIndex({
      index,
      viewPosition: 0,
      animated: true,
    })
  }

  const handleScrollDayHourToOffset = (x: number) => {
    const endIndex = Math.round(x / scrollWidthRef.current)

    const isInvalidEndIndex = endIndex < 0 || endIndex > 23

    if (isInvalidEndIndex) return

    setSelectedTimeIntervalIndex(endIndex)

    dayHourScrollRef?.current?.scrollToOffset({
      animated: false,
      offset: ScreenWidth * endIndex,
    })
  }

  const handleScrollToPrograms = (index: number) => {
    programsScrollRef.current?.scrollTo({
      x: scrollWidthRef.current * index,
      animated: true,
    })
  }

  const onProgramsScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset

    handleScrollDayHourToOffset(x)
  }

  const onProgramsScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const { x } = event.nativeEvent.contentOffset

    handleScrollDayHourToOffset(x)
  }

  const value = {
    dayHourScrollRef,
    programsScrollRef,
    scrollWidthRef,
    handleScrollDayHourToIndex,
    handleScrollToIndexFailed,
    handleScrollToPrograms,
    onProgramsScroll,
    onProgramsScrollEnd,
    selectedTimeIntervalIndex,
    setSelectedTimeIntervalIndex,
  }

  return (
    <EPGContext.Provider value={value}>{props.children}</EPGContext.Provider>
  )
}

export const useEPGContext = () => {
  return useContext(EPGContext) as IEPG
}
