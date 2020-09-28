import { DatePicker as DatePickerMaterial } from '@material-ui/pickers'
import { ComponentProps } from 'react'
import styled from 'styled-components'

const StyledCalendar = styled.div`
  width: 100%;
`

export const DatePicker = ({ ...props }: ComponentProps<typeof DatePickerMaterial>) => {
  return (
    <StyledCalendar>
      <DatePickerMaterial {...props} />
    </StyledCalendar>
  )
}
