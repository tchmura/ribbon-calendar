import { Moment } from 'moment'
import React from 'react'
import styled from 'styled-components'

const StyledEventDate = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: grey;
`

export const EventDate = ({ date }: { date: Moment }) => {
  return <StyledEventDate>{date.format('dddd, LL')}</StyledEventDate>
}
