import styled from 'styled-components'
import { elevation } from '../../utils'

export const StyledButton = styled.button`
  padding: 5px 15px;
  justify-content: center;
  margin: 10px 0;
  font-size: 20px;
  width: ${({ width }) => width};
  align-self: ${({ alignSelf }) => alignSelf};
  &:hover {
    ${elevation[2]};
    cursor: pointer;
  }
  &:disabled {
    background: #e7e8e9;
    color: #9fa3a9;
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case 'small': {
        return `font-size: 12px;
        `
      }
      case 'medium': {
        return `font-size: 16px;
                margin: 20px 0;
        `
      }
      case 'large': {
        return `font-size: 24px;
                margin: 30px 0;
        `
      }
      case 'standard': {
        return `
        `
      }
      default:
        return
    }
  }}

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'cancel': {
        return `background: tomato;
                border-color: tomato;
                color: white;
        `
      }
      case 'standard': {
        return `background: lightgray; 
                border-color: lightgray;
                color: black;
        `
      }
      case 'unstyled': {
        return `
        padding: 1px;
  justify-content: center;
  font-size: 15px;
  &:hover {
    ${elevation[2]};
    cursor: pointer;
  }
                background: lightgray; 
                border-color: lightgray;
                color: black;
        `
      }

      default: {
        return `background: cornflowerblue; 
                border-color: cornflowerblue;
                color: white;
        `
      }
    }
  }}
`