import styled from 'styled-components'
import { typography } from '../../utils'

export const ErrorMessage = styled.span`
  display: block;
  color: red;
  ${typography('small')}
  ${typography('defaultLineHeight')}
  margin-bottom: 1.5em;
`
export const ErrorWrapper = styled.div`
  position: relative;
  ${({ hasError }) =>
    hasError
      ? `
    label {
      color: red;
    }
    input, textarea {
      border: 1px solid red;
      box-shadow: 0 0 0 1px red;
      margin-bottom: 0.5em;
    }
    
    `
      : ''}
`
