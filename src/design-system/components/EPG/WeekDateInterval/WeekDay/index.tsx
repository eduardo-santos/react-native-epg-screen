import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useTheme } from '@hooks/useTheme'
import { DynamicText } from '@components/DynamicText'
import { styles } from './styles'
import { formatDate } from '@utils/date'

interface IWeekDayProps {
  date: Date
  onPress: () => void
  isSelected?: boolean
}

export const WeekDay: React.FC<IWeekDayProps> = ({
  date,
  onPress,
  isSelected,
}) => {
  const { colors } = useTheme()
  const formattedDay = formatDate(date, 'iii')
  const formattedDayAndMonth = formatDate(date, 'dd/MM')
  const textColor = isSelected ? colors.app.ACCENT : colors.default.INOX

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <DynamicText
          variant="paragraph"
          color={textColor}
          bold={isSelected}
          align="center">
          {formattedDay}
          <DynamicText
            variant="small"
            color={textColor}
            bold={isSelected}
            align="center">
            {'\n' + formattedDayAndMonth}
          </DynamicText>
        </DynamicText>
      </View>
    </TouchableOpacity>
  )
}
