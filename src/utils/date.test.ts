import { isMatch } from 'date-fns'
import { formatDate } from '@utils/date'

describe('dateHelper tests', () => {
  describe('formatDate method', () => {
    it('should return date in especified format HH:mm', () => {
      const currentDateFormatted = formatDate(new Date(), 'HH:mm')

      const isDateCorrect = isMatch(currentDateFormatted, 'HH:mm')

      expect(isDateCorrect).toBeTruthy()
    })
  })
})
