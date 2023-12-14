import React from 'react'
import {Text} from 'react-native'

import {Props} from './interfaces'
import {useStyles} from './useStyles'

export const BodyText: React.FC<Props> = ({children, style}) => {
  const styles = useStyles()
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}
