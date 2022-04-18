import React, { useRef, useState } from 'react'
import { LayoutRectangle, ScrollView, View } from 'react-native'
import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs'
import { IChannel } from '@api/models/IEPGResponseModel'
import { ChannelsLeftBar, ChannelSchedulesContainer } from '@components/EPG'
import { styles } from './styles'

interface IChannelsContainerProps {
  channels: IChannel[]
}

export const ChannelsContainer: React.FC<IChannelsContainerProps> = ({
  channels,
}) => {
  const verticalScrollRef = useRef<ScrollView>(null)

  const [leftBarCardWidth, setLeftBarCardWidth] = useState<number>(0)
  const [leftBarCardHeight, setLeftBarCardHeight] = useState<number>(0)

  const scrollToIndex = (index: number) => {
    const yToUp = index * -leftBarCardWidth
    const yToDown = index * leftBarCardWidth
    const shouldGoDown = index > channels.length / 2

    verticalScrollRef.current?.scrollTo({
      y: shouldGoDown ? yToDown : yToUp,
    })
  }

  const handleSelectedChannel = (index: number) => {
    scrollToIndex(index)
  }

  const handleGetLeftCardLayout = ({ width, height }: LayoutRectangle) => {
    setLeftBarCardWidth(width)
    setLeftBarCardHeight(height)
  }

  return (
    <BottomTabBarHeightContext.Consumer>
      {tabBarHeight => (
        <>
          <ScrollView
            ref={verticalScrollRef}
            showsVerticalScrollIndicator={false}
            style={styles.verticalScroll}
            nestedScrollEnabled
            contentContainerStyle={{
              paddingBottom: tabBarHeight ? tabBarHeight * 2 : tabBarHeight,
            }}>
            <View style={styles.wrapper}>
              <ChannelsLeftBar
                channels={channels}
                onSelectChannel={handleSelectedChannel}
                getLeftCardLayout={
                  leftBarCardWidth && leftBarCardHeight
                    ? undefined
                    : handleGetLeftCardLayout
                }
              />

              <ChannelSchedulesContainer
                channels={channels}
                leftBarCardHeight={leftBarCardHeight}
              />
            </View>
          </ScrollView>
        </>
      )}
    </BottomTabBarHeightContext.Consumer>
  )
}
