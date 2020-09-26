import { Calendar as CalendarMaterial } from '@material-ui/pickers'
import { ComponentProps } from 'react'

export const Calendar = ({ ...props }: ComponentProps<typeof CalendarMaterial>) => {
  return <CalendarMaterial {...props} />
}
