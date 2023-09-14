import styled from 'styled-components'
import { belowHeight } from '../../utils'

export const MainContainer = styled.div`
  display: flex;
  padding: 40px;
  height: 100%;
  justify-content: center;
`
export const CardContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  ${belowHeight.medLarge` 
max-height: 75%;
  `}
  ${belowHeight.medSmall` 
max-height: 50%;
  `}
`
export const StyledComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  padding: 10px;
  border: black 1px solid;
`
export const InteractionContainer = styled(StyledComponentContainer)`
  flex-grow: ${({ flexGrow }) => flexGrow};
`
export const MessagesContainer = styled(StyledComponentContainer)`
  flex-grow: ${({ flexGrow }) => flexGrow};
  position: relative;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`
export const NotesContainer = styled(StyledComponentContainer)`
  flex-grow: ${({ flexGrow }) => flexGrow};
  position: relative;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`
