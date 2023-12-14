import React from 'react'
import {View} from 'react-native'

import {Props} from './interfaces'
import {useStyles} from './useStyles'

export const Button: React.FC<Props> = () => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <></>
    </View>
  )
}
