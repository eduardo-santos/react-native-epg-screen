export interface IChannelSchedule {
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
  schedules: IChannelSchedule[]
}

export interface IEPGResponseModel {
  channels: IChannel[]
}
