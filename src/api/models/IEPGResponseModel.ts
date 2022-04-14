interface ISchedules {
  id: string
  title: string
  start: number
  end: number
}

export interface IEPGResponseModel {
  id: string
  title: string
  images: {
    LOGO: string
  }
  schedules: [ISchedules]
}
