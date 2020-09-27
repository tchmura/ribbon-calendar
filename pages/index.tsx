import moment, { Moment } from 'moment'
import { useMemo, useState } from 'react'
import styled from 'styled-components'

import { EventData, eventsData } from '../utils/EventsData'
import { EventCard } from '../components/indexPage/EventCard'
import { durationToMinutes } from '../utils/TimeFormatters'
import { EventCalendar } from '../components/indexPage/EventCalendar'
import { PaymentForm } from '../components/shared/PaymentForm'

const StyledIndexPage = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledEventCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
  gap: 0.3rem;
  place-content: center;
`

const getEventsForDate = (date: Moment, eventsList: EventData[]) => {
  return eventsList.filter((event: EventData) => date.isSame(event.startsAt, 'day'))
}

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

  return (
    <StyledIndexPage>
      <EventCalendar date={activeDate} disablePast shouldDisableDate={shouldDisableDate} onChange={handleDateChange} />
      <StyledEventCards>
        {getEventsForDate(activeDate, eventsData).map((event: EventData, idx) => (
          <EventCard
            key={idx}
            eventName={event.name}
            eventDuration={`${durationToMinutes(event.duration)} min`}
            eventStartsAt={moment(event.startsAt).format('HH:MM')}
            eventEndsAt={moment(event.endsAt).format('HH:MM')}
          />
        ))}
      </StyledEventCards>
      <PaymentForm />
    </StyledIndexPage>
  )
}

export default IndexPage
