import React, { forwardRef } from 'react'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type Shape = 'circle' | 'square'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary-info'
  | 'secondary-info'
  | 'primary-success'
  | 'secondary-success'
  | 'tertiary-negative'
  | 'quaternary'
  | 'primary-warning'
  | 'secondary-warning'
  | 'primary-danger'
  | 'secondary-danger'
  | 'disabled'

export interface ButtonOptions {
  disabled?: boolean
  size?: Size
  variant?: Variant
  shape?: Shape
}

export type ButtonProps = ButtonOptions & React.HTMLAttributes<HTMLButtonElement> & WuiProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, dataTestId, disabled, size = 'md', variant = 'primary', ...rest }, ref) => (
    <S.Button
      data-testid={dataTestId}
      disabled={disabled}
      ref={ref}
      size={size}
      variant={disabled ? 'disabled' : variant}
      {...rest}
    >
      {children}
    </S.Button>
  )
)

Button.displayName = 'Button'

export const StyledButton = S.Button
