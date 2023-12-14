import React, {useMemo} from 'react'
import {StyleSheet} from 'react-native'

import {useTheme} from '@theme'

export const useStyles = () => {
  const theme = useTheme()
  const styles = useMemo(() => StyleSheet.create({
    text: {
      color: theme.colors.text.primary,
      fontSize: theme.fonts.size.contextual.body
    }
  }), [])
  return styles
}