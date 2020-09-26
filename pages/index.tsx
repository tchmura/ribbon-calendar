import moment, { Moment } from 'moment'
import { useMemo, useState } from 'react'
import { EventData, eventsData } from '../utils/EventsData'

import { Calendar } from '../components/Calendar'

const IndexPage = () => {
  const [activeDate, setActiveDate] = useState(moment(moment.now()))
  const activeDates = useMemo(() => {
    return eventsData.map((eventData: EventData) => moment(eventData.startsAt))
    // in reality this would be dynamic so I leave it in deps
  }, [eventsData])

  const handleDateChange = (date: Moment | null) => {
    if (date && !moment(activeDate).isSame(date)) {
      setActiveDate(date)
    }
  }

  const shouldDisableDate = (date: Moment | null) => {
    return !activeDates.some((activeDate) => activeDate.isSame(date, 'day'))
  }

  return <Calendar date={activeDate} disablePast shouldDisableDate={shouldDisableDate} onChange={handleDateChange} />
}

export default IndexPage
