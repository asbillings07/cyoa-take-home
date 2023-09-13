import PropTypes from 'prop-types'
import { ComponentContainer } from '../../components'
import { Comment } from './Comment'
import { CreateMessage } from './CreateComment'
import { Button } from '../../components'
import { useContext } from '../../store'

export function Comments() {
  const { state } = useContext()

  const comments = state.comments.map(comment => (
    <Comment comment={comment}/>
  ))

  return comments
}

Comments.propTypes = {
  hidden: PropTypes.bool
}
