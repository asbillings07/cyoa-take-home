import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { Title, InteractionContainer, MessagesContainer } from '..'

const componentMap = {
  Interactions: InteractionContainer,
  Comments: MessagesContainer,
}

export function ComponentContainer({ classes, title, children, hidden, ...restProps }) {
  const Container = componentMap[title]
  return !hidden ? (
    <>
      <Container className={classNames(`${title}_container`, classes)} {...restProps}>
        <Title>{title}</Title>
        {children}
      </Container>
    </>
  ) : null
}

ComponentContainer.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  title: PropTypes.string.isRequired
}
