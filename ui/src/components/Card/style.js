import styled from 'styled-components'
import { StyledButton } from '../Button/style'
import { TextInput } from '../Input/style'

export const Input = TextInput

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 100%;
  width: ${({ width }) => width};
  word-wrap: break-word;
  ${({ selected }) =>
    selected ? 'background-color: rgb(71, 252, 255);' : 'background-color: #fff;'};
  background-clip: border-box;
  border: 1px solid black;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  ${({ hovered }) => {
    if (hovered) {
      return `
    &:hover {
    cursor: pointer;
    background-color: rgb(71, 252, 255);
    }
    `
    }
  }}
`

export const Body = styled.div`
${({ styles }) => (styles ? styles : null)};
`

export const Title = styled.h1`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '12px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  align-self: ${({ center }) => (center ? 'center' : 'auto')};
  margin: 0;
`

export const Text = styled.p`
  align-self: ${({ center }) => (center ? 'center' : 'auto')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '12px')};
  line-height: 16px;
  color: black;
  opacity: 0.9;
`

export const Image = styled.img`
  width: 100%;
`

export const Button = StyledButton

export const ButtonContainer = styled.div`
  display: flex;
`
