import { Card, CardContainer } from '../../components'
import { formatDate } from '../../utils'
export function Comment({comment}) {

  const {
    cardId,
    message, 
    name, 
    created 
  } = comment;


  return (
  <CardContainer id={`card_${cardId}`}>
    <Card width='100%'>
        <Card.Body>
          <Card.Text>{message}</Card.Text>
        </Card.Body>
        <Card.Title bold={true}>{name} on {formatDate(created)}</Card.Title>
    </Card>
  </CardContainer>
  )
}
