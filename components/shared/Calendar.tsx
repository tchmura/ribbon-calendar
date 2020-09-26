import { Calendar as CalendarMaterial } from '@material-ui/pickers'
import { ComponentProps } from 'react'
import styled from 'styled-components'

const StyledCalendar = styled.div`
  width: 100%;
`

export const Calendar = ({ ...props }: ComponentProps<typeof CalendarMaterial>) => {
  return (
    <StyledCalendar>
      <CalendarMaterial {...props} />
    </StyledCalendar>
  )
}
