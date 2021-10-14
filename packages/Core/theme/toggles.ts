import { WuiTheme } from './types'

// To allow for line-height of text in label
const LINE_HEIGHT_ADJUSTMENTS = '0.15rem'

type State = 'default' | 'checked' | 'disabled'

type CommonAttributesToggle = {
  width?: string | number
  height?: string | number
  backgroundColor?: string
  borderColor?: string
  borderWidth?: string
  borderStyle?: string
  borderRadius?: string
  marginTop?: string
}

type FocusAttributesToggle = {
  '&:focus'?: {
    borderColor?: string
    boxShadow?: string
  }
}

export type ThemeToggles = {
  item: Record<State, CommonAttributesToggle & FocusAttributesToggle>
  after: Record<State, CommonAttributesToggle & FocusAttributesToggle>
}

export const getToggles = (theme: WuiTheme): ThemeToggles => {
  const { borderWidths, colors, focus, toRem } = theme

  return {
    item: {
      default: {
        width: toRem(34),
        height: toRem(18),
        borderRadius: toRem(9),
        backgroundColor: colors.light[900],
        borderColor: colors.light[800],
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        marginTop: LINE_HEIGHT_ADJUSTMENTS,

        '&:focus': {
          borderColor: colors.primary[500],
          ...focus(),
        },
      },
      checked: {
        backgroundColor: colors.primary[500],
        borderColor: colors.primary[500],
      },
      disabled: {
        borderColor: colors.nude[700],
        backgroundColor: colors.nude[500],
      },
    },
    after: {
      default: {
        width: 14,
        height: 14,
        backgroundColor: colors.light[900],
        borderColor: colors.light[500],
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        borderRadius: '50%',
      },
      checked: {
        backgroundColor: colors.light[900],
        borderColor: colors.light[900],
      },
      disabled: {
        borderColor: colors.nude[700],
        backgroundColor: colors.nude[700],
      },
    },
  }
}