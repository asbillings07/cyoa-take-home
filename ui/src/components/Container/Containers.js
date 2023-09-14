import styled from 'styled-components'
import { belowHeight } from '../../utils'

export const MainContainer = styled.div`
  display: flex;
  padding: 40px;
  height: 100%;
  justify-content: ${({ commentsHidden }) => (commentsHidden ? 'center' : 'space-between')};
`
export const CardContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  align-self: center;
  width: 90%;
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
  height: 100%;
`
export const MessagesContainer = styled(StyledComponentContainer)`
  flex-grow: ${({ flexGrow }) => flexGrow};
  position: relative;
  align
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`
