import React from 'react'
import {TouchableOpacity, View} from 'react-native'

import {Props} from './interfaces'
import {useStyles} from './useStyles'
import { BodyText } from '../../atoms'

export const Button: React.FC<Props> = ({
  onPress, 
  children,
  disabled,
  isLoading
}) => {
  const styles = useStyles()
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || isLoading} style={styles.container}>
      <BodyText>{children}</BodyText>
    </TouchableOpacity>
  )
}
