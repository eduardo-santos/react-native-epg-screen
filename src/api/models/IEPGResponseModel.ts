interface ISchedules {
  id: string
  title: string
  start: number
  end: number
}

export interface IChannel {
  id: string
  title: string
  images: {
    LOGO: string
  }
  schedules: ISchedules[]
}

export interface IEPGResponseModel {
  channels: IChannel[]
}
