interface IChannelInfo {
  images: {
    LOGO: string
  }
  title: string
  channelId: string
}

interface IContents {
  type: string
  title: string
  description: string
  images: {
    CarouselLandscapeHeader: string
  }
  start: number
  end: number
  channelInfo: IChannelInfo
  id: string
}

export interface ISlideShowResponseModel {
  contents: [IContents]
}
