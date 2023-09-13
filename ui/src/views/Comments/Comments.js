import PropTypes from 'prop-types'
import { Comment } from './Comment'
import { useAppContext } from '../../store'

export function Comments() {
  const { state } = useAppContext()

  const comments = state.comments.map(comment => (
    <Comment comment={comment}/>
  ))

  return comments
}

Comments.propTypes = {
  hidden: PropTypes.bool
}
