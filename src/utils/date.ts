import {
  format,
  parseISO,
  addDays,
  subDays,
  addHours,
  subHours,
  eachDayOfInterval,
  eachHourOfInterval,
  differenceInMinutes,
  differenceInSeconds,
  addMinutes,
  subMinutes,
  isEqual,
  intervalToDuration,
  Duration,
  isAfter,
  isBefore,
} from 'date-fns'

export const formatDate = (
  date: Date | string | number,
  desiredFormat: string,
  locale?: Locale,
): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date

  if (locale) {
    return format(parsedDate, desiredFormat, { locale })
  }

  return format(parsedDate, desiredFormat)
}

export const getEachDayOfInterval = (
  startDate: Date | number,
  endDate: Date | number,
): Date[] => {
  return eachDayOfInterval({
    start: startDate,
    end: endDate,
  })
}

export const getEachHourOfInterval = (
  startDate: Date | number,
  endDate: Date | number,
): Date[] => {
  return eachHourOfInterval({
    start: startDate,
    end: endDate,
  })
}

export const subDateDays = (date: Date | number, daysToSub: number): Date => {
  return subDays(date, daysToSub)
}

export const addDateDays = (date: Date | number, daysToAdd: number): Date => {
  return addDays(date, daysToAdd)
}

export const subDateHours = (date: Date | number, hoursToSub: number): Date => {
  return subHours(date, hoursToSub)
}

export const addDateHours = (date: Date | number, hoursToAdd: number): Date => {
  return addHours(date, hoursToAdd)
}

export const addDateMinutes = (
  date: Date | number,
  minutesToAdd: number,
): Date => {
  return addMinutes(date, minutesToAdd)
}

export const subDateMinutes = (
  date: Date | number,
  minutesToSub: number,
): Date => {
  return subMinutes(date, minutesToSub)
}

export const getMinutesDifferenceBetweenDates = (
  startDate: Date | number,
  endDate: Date | number,
): number => {
  return differenceInMinutes(startDate, endDate)
}

export const getSecondsDifferenceBetweenDates = (
  startDate: Date | number,
  endDate: Date | number,
): number => {
  return differenceInSeconds(startDate, endDate)
}

export interface ITimeIntervalType {
  date: Date
  formatted: string
}

export interface ITimeInterval {
  startTime: ITimeIntervalType
  endTime: ITimeIntervalType
}

export const getCleanHour = (date: Date | number, hour?: number): Date => {
  const dateHour = new Date(date)

  if (hour !== undefined) {
    dateHour.setHours(hour)
  }

  dateHour.setMinutes(0)
  dateHour.setSeconds(0)
  dateHour.setMilliseconds(0)

  return dateHour
}

export const getDayHoursIntervals = (
  date: Date,
  interval: number,
): ITimeInterval[] => {
  let hours: ITimeInterval[] = []
  const dateStart = getCleanHour(date, 0)
  const dateEnd = addDateHours(dateStart, 23)

  const eachHourInterval = getEachHourOfInterval(dateStart, dateEnd)

  let lastEndHour: Date

  eachHourInterval.forEach((dateHour, index) => {
    if (lastEndHour && index % interval !== 0) {
      return
    }

    const startHour = dateHour
    const endHour = addDateHours(dateHour, interval)

    hours.push({
      startTime: {
        date: startHour,
        formatted: formatDate(startHour, 'HH:mm'),
      },
      endTime: {
        date: endHour,
        formatted: formatDate(endHour, 'HH:mm'),
      },
    })

    lastEndHour = endHour
  })

  return hours
}

export const getDateIndexFromInterval = (
  date: Date,
  eachInterval: ITimeInterval[],
): number => {
  const currentDateHour = getCleanHour(date)

  const index = eachInterval.findIndex(interval =>
    isEqual(currentDateHour, getCleanHour(interval.startTime.date)),
  )

  return index
}

export const duration = (
  start: Date | number,
  end: Date | number,
): Duration => {
  return intervalToDuration({ start, end })
}

export const dateIsEqual = (date1: Date | number, date2: Date | number) => {
  return isEqual(date1, date2)
}

export const isDateAfter = (date1: Date | number, date2: Date | number) => {
  return isAfter(date1, date2)
}

export const isDateBefore = (date1: Date | number, date2: Date | number) => {
  return isBefore(date1, date2)
}
