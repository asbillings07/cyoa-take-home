import styled from 'styled-components'
import { elevation } from '../../utils'
export const StyledButton = styled.button`
  padding: 5px 15px;
  justify-content: center;
  margin-top: 10px;
  font-size: 20px;
  &:hover {
    ${elevation[2]};
    cursor: pointer;
  }

  ${({ size }) => {
    switch (size) {
      case 'small': {
        return `font-size: 12px;
        `
      }
      case 'medium': {
        return `font-size: 16px;
                margin-top: 20px;
        `
      }
      case 'large': {
        return `font-size: 24px;
                margin-top: 30px;
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
