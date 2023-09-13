import { Card, CardContainer } from '../../components'

export function Comment({comment}) {
  return (
  <CardContainer>
    <Card width='95%' key={comment.id}>
        <Card.Body>
          <Card.Text>{comment.message}</Card.Text>
        </Card.Body>
        <Card.Title bold={true}>{comment.name}</Card.Title>
    </Card>
  </CardContainer>
  )
}
