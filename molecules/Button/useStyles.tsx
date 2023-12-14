import React, {useMemo} from 'react'
import {StyleSheet} from 'react-native'

import {useTheme} from '@theme'

export const useStyles = () => {
  const theme = useTheme()
  const styles = useMemo(() => StyleSheet.create({
    container: {
      
    }
  }), [])
  return styles
}