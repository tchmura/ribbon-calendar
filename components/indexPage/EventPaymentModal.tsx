import { Dialog } from '@material-ui/core'
import React from 'react'
import moment from 'moment'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'

import { durationToMinutes } from '../../utils/TimeFormatters'
import { FormValues, PaymentForm } from '../shared/PaymentForm'
import { EventCard } from './EventCard'
import { EventData } from '../../utils/EventsData'
import { GREY_LIGHT } from '../../constants/colors'

const StyledCloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 500ms ease-out;
  cursor: pointer;
  &:hover {
    background-color: ${GREY_LIGHT};
  }
`

type Props = {
  isOpen: boolean
  onSubmit: (values: FormValues, eventId: number) => void
  onClose: () => void
  eventData?: EventData | null
}

export const EventPaymentModal = ({ isOpen, onSubmit, onClose, eventData }: Props) => {
  const handleSubmit = (values: FormValues) => {
    if (eventData?.id) {
      onSubmit(values, eventData.id)
      onClose()
    }
  }
  return (
    <div>
      <Dialog open={isOpen} fullScreen={true} onClose={onClose}>
        {eventData && (
          <EventCard
            eventName={eventData.name}
            eventDuration={`${durationToMinutes(eventData.duration)} min`}
            eventStartsAt={moment(eventData.startsAt).format('HH:mm MMMM-D-YYYY')}
            eventEndsAt={moment(eventData.endsAt).format('HH:mm')}
          />
        )}
        <StyledCloseIcon onClick={onClose}>
          <CloseIcon />
        </StyledCloseIcon>
        <PaymentForm onSubmit={(values: FormValues) => handleSubmit(values)} />
      </Dialog>
    </div>
  )
}
