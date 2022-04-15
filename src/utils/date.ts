import {
  format,
  parseISO,
  addDays,
  subDays,
  addHours,
  subHours,
  eachDayOfInterval,
  differenceInMinutes,
  differenceInSeconds,
  addMinutes,
  subMinutes,
} from 'date-fns'

export const formatDate = (
  date: Date | string,
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
  startDate: Date,
  endDate: Date,
): number => {
  return differenceInMinutes(startDate, endDate)
}

export const getSecondsDifferenceBetweenDates = (
  startDate: Date,
  endDate: Date,
): number => {
  return differenceInSeconds(startDate, endDate)
}
