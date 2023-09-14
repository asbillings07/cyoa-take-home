import PropTypes from 'prop-types'
import React from 'react'
import { StyledButton } from './style'
import classNames from 'classnames'

export function Button({
  classes,
  buttonType,
  name = null,
  disabled = false,
  width = '80%',
  id='',
  alignSelf = 'auto',
  type = 'button',
  size = 'small',
  onClick = () => false,
  ...restProps
}) {
  return (
    <StyledButton
      id={ id ? `${id}_button` : ''}
      disabled={disabled}
      width={width}
      alignSelf={alignSelf}
      size={size}
      type={type}
      buttonType={buttonType}
      onClick={onClick}
      className={classNames(`${id}_button`, classes)}
      {...restProps}
    >
      {name}
    </StyledButton>
  )
}

Button.propTypes = {
  awaitedResourceDidLoad: PropTypes.bool,
  buttonType: PropTypes.string,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onClickAfterLoaded: PropTypes.func,
  progress: PropTypes.number,
  showLoadOnClick: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string
}
