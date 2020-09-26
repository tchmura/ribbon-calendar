import moment from 'moment'
import momentDurationSetup from 'moment-duration-format'

// add format method to moment.duration()
// @ts-ignore
momentDurationSetup(moment)

export function durationToHoursMinutes(duration: string) {
  return moment.duration(duration, 'milliseconds').format('hh:mm')
}
