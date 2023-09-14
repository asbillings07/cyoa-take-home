import styled from 'styled-components'
import { InputLabel } from '../Input/style'
import { borders, elevation, typography, colors } from '../../utils'

export const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 15em;
  padding: 6px 8px;
  ${borders('grey50')}
  ${borders('smallRadius')}
${elevation[1]}
${typography('default')}
color: ${colors('grey100')};
  background-color: white;
  resize: none;
  outline: none;
  &:hover {
    ${borders('grey70')}
  }
  &:focus {
    ${borders('grey100')}
  }
  &:placeholder {
    color: ${colors('grey50')};
    opacity: 1;
  }
`

export const TextAreaLabel = styled(InputLabel)`
  flex-grow: 1;
  color: black;
  ${typography('defaultLineHeight')}
  ${typography('bold')}
`
