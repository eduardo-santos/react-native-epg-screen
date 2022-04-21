import { IChannelSchedule } from '@api/models/IEPGResponseModel'

export const sortScheduleAsc = (a: IChannelSchedule, b: IChannelSchedule) => {
  if (a.start < b.start) {
    return -1
  }
  if (a.start > b.start) {
    return 1
  }

  return 0
}
