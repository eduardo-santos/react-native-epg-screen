export interface IChannelProgramDetailsResponseModel {
  title: string
  description: string
  images: {
    CarouselLandscapeHeader: string
  }
  start: number
  end: number
  channelInfo: {
    images: {
      LOGO: string
    }
    title: string
    channelId: string
    terminals: [string]
  }
  id: string
}
