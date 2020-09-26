import { Card as CardMaterial } from '@material-ui/core'
import { ComponentProps } from 'react'

export const Card = ({ ...props }: ComponentProps<typeof CardMaterial>) => {
  return <CardMaterial {...props} />
}
