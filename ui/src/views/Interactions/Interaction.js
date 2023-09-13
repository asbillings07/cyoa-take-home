import { useContext } from '../../store'
import { Card, CardContainer, Input, TextArea } from '../../components'


export function Interaction() {
  const { state, setIsHidden, setInteractionId } = useContext()

  return (
  <CardContainer>
    <Card
        width='100%'
      >
        <Card.Title bold={true}>Name</Card.Title>
        <Input />
        <Card.Body>
        <TextArea
          label='Message to customer:'
          name='content'
          domID='content'
          hasError={error}
          errorMessage='Field can not be submitted when empty'
          onChange={(e) => setMessage(e.target.value)}
        />
        </Card.Body>
        <Card.Button>Comment</Card.Button>
      </Card>
  </CardContainer>
  )
}
