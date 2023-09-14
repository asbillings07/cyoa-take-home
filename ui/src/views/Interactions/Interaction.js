import { useState } from 'react'
import { useAppContext } from '../../store'
import { useSetError } from '../../store/hooks'
import { Card, CardContainer, Input, TextArea } from '../../components'


export function Interaction() {
  const initialState = {
    name: '',
    comment: ''
  }
  const { state, createComment, dispatch } = useAppContext()
  const [interactionState, setInteractionState] = useState(initialState) 
  const [nameError, useRefName] = useSetError(false, interactionState.name)
  const [commentError, useRefComment] = useSetError(false, interactionState.comment)

  const createNewComment = (commentState) => {
    useRefComment(true)
    useRefName(true)

    if (!error) {
      dispatch(createComment(commentState))
      setInteractionState(initialState)
    }
  }
  
  return (
  <CardContainer>
    <Card
        width='100%'
      >
        <Input
          placeholder='Enter your name'
          label='Name'
          domID='name'
          name='name'
          textColor='black'
          hasError={nameError}
          errorMessage='Field can not be submitted when empty'
          onChange={(e) => setInteractionState({...interactionState, name: e.target.value})}
        />
        <Card.Body>
        <TextArea
          label='Enter your comment:'
          name='content'
          domID='content'
          hasError={commentError}
          errorMessage='Field can not be submitted when empty'
          onChange={(e) => setInteractionState({...interactionState, comment: e.target.value})}
        />
        </Card.Body>
        <Card.Button onClick={() => createNewComment(interactionState)} size='medium'>Comment</Card.Button>
      </Card>
  </CardContainer>
  )
}
