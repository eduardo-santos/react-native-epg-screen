import { ContentType } from '@api/typings/content.type'

interface ITerminals {
  id: string
  title: string
}

export interface IMovieDetailsResponseModel {
  title: string
  type: ContentType
  description: string
  images: {
    CarouselLandscapeHeader: string
  }
  structuredTags: {
    terminals: [ITerminals]
  }
  metadata: {
    duration: number
  }
  id: string
}
