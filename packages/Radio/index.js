import React, { forwardRef } from 'react'
import { bool, elementType, func, oneOf, string } from 'prop-types'
import Label from '@welcome-ui/label'

import { DIRECTIONS_TYPE } from '../Core/utils/propTypes'

import * as S from './styles'

export const Radio = forwardRef((props, ref) => {
  const {
    dataTestId,
    disabled,
    disabledIcon,
    flexDirection,
    label,
    onChange,
    onClick,
    variant,
    ...rest
  } = props

  const handleClick = e => {
    e.stopPropagation()
    onClick && onClick(e)
    onChange && onChange(e)
  }

  return (
    <Label
      checkableField
      disabled={disabled}
      disabledIcon={disabledIcon}
      flexDirection={flexDirection}
      onClick={handleClick}
      variant={variant}
    >
      <S.Input>
        <S.Radio
          data-testid={dataTestId}
          disabled={disabled}
          label={label}
          ref={ref}
          variant={variant}
          {...rest}
        />
      </S.Input>
      <S.Content>{label}</S.Content>
    </Label>
  )
})

Radio.type = 'Radio'
Radio.displayName = 'Radio'

Radio.propTypes = {
  disabled: bool,
  disabledIcon: elementType,
  flexDirection: oneOf(DIRECTIONS_TYPE),
  label: string,
  name: string,
  onChange: func,
  onClick: func,
  value: string,
  variant: string
}