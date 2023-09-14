import React from 'react'
import { Provider } from './Context'

describe('<Provider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Provider />)
  })
})