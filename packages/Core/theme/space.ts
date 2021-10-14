import { WuiTheme } from './types'

export type ThemeSpace = {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  '3xl': string
  '4xl': string
}

export const getSpace = (theme: WuiTheme): ThemeSpace => {
  return {
    xxs: theme.toRem(6),
    xs: theme.toRem(8),
    sm: theme.toRem(10),
    md: theme.toRem(12),
    lg: theme.toRem(15),
    xl: theme.toRem(20),
    xxl: theme.toRem(24),
    '3xl': theme.toRem(30),
    '4xl': theme.toRem(36),
  }
}