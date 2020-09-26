import React from 'react'
import styled from 'styled-components'
import { BLUE_BRAND, TEAL_BRAND, VIOLET_BRAND } from '../../constants/colors'
import { Card } from '../shared/Card'

const StyledName = styled.div`
  color: ${VIOLET_BRAND};
  font-size: 1rem;
  font-weight: bold;
`

const StyledDuration = styled.div`
  color: ${TEAL_BRAND};
  font-size: 0.9rem;
`

const StyledStartsAt = styled.div`
  color: ${BLUE_BRAND};
  font-size: 1.3rem;
  font-weight: bold;
`

const StyledEventCard = styled(Card)`
  padding: 0.5rem;
  text-align: center;
  display: grid;
  row-gap: 0.1rem;
  cursor: pointer;
`

const StyledBold = styled.span`
  font-weight: bold;
`

type Props = {
  eventName: string
  eventDuration: string
  eventStartsAt: string
  eventEndsAt: string
  onClick: () => void
}

export const EventCard = ({ eventName, eventDuration, eventStartsAt, eventEndsAt, onClick }: Props) => {
  return (
    <StyledEventCard raised variant={'elevation'} onClick={onClick}>
      <StyledName>{eventName}</StyledName>
      <StyledStartsAt>{`at ${eventStartsAt}`}</StyledStartsAt>
      <StyledDuration>
        <StyledBold>{eventDuration}&nbsp;</StyledBold>
        <span>until&nbsp;</span>
        <StyledBold>{eventEndsAt}</StyledBold>
      </StyledDuration>
    </StyledEventCard>
  )
}
