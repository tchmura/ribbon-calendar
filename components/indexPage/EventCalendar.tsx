import { Calendar as CalendarMaterial } from '@material-ui/pickers'
import { ComponentProps } from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import { Calendar } from '../shared/Calendar'
import { TEAL_BRAND, TEAL_ULTRA_LIGHT } from '../../constants/colors'

const themeOverride = createMuiTheme({
  overrides: {
    MuiPickersDay: {
      day: {
        backgroundColor: TEAL_ULTRA_LIGHT,
        color: TEAL_BRAND,
        '& [class*="MuiTypography-body2"]': { fontWeight: 700 },
      },
      dayDisabled: { backgroundColor: 'inherit', '& [class*="MuiTypography-body2"]': { fontWeight: 400 } },
      current: { textDecoration: 'underline' },
    },
  },
})

export const EventCalendar = ({ ...props }: ComponentProps<typeof CalendarMaterial>) => {
  return (
    <ThemeProvider theme={themeOverride}>
      <Calendar {...props} />
    </ThemeProvider>
  )
}
