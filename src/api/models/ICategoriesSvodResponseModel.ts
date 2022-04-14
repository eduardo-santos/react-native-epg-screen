import { ContentType } from '@api/typings/content.type'

interface IContents {
  type: ContentType
  title: string
  images: {
    CarouselLandscapeSmall: string
  }
  metadata: {
    duration: number
  }
  id: string
}

export interface ICategoriesSvodResponseModel {
  title: string
  contents: [IContents]
}
