import { ComponentProps } from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import { DatePicker } from '../shared/DatePicker'
import { TEAL_BRAND, TEAL_ULTRA_LIGHT } from '../../constants/colors'

const themeOverride = createMuiTheme({
  overrides: {
    MuiPickersDatePickerRoot: {
      toolbar: {
        display: 'none',
      },
    },
    MuiPickersBasePicker: {
      container: {
        placeContent: 'center',
        marginBottom: '1rem',
      },
      pickerView: {
        alignSelf: 'center',
      },
    },
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

export const EventCalendar = ({ ...props }: ComponentProps<typeof DatePicker>) => {
  return (
    <ThemeProvider theme={themeOverride}>
      <DatePicker disablePast variant={'static'} {...props} />
    </ThemeProvider>
  )
}
