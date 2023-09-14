import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSetState } from '../../store/hooks'
import { Modal, TextArea, Input } from '../../components'
import { useAppContext } from '../../store'

export function CreateComment({ messageToggle, setMessageToggle }) {

  const initialState = {
    name: '',
    comment: '',
    nameError: false,
    commentError: false
  }

  const { createComment, dispatch } = useAppContext()
  const [commentState, setCommentState] = useSetState(initialState)

  useEffect(() => {
    handleFieldErrors(commentState)
  }, [commentState.name, commentState.comment])

  const closeCommentModal = (value) => {
    setMessageToggle(value)
    setCommentState(initialState)
  }

  const handleCommentChange = (e) => {
    const { name, value } = e.target
    setCommentState({[name]: value})
  }

  const handleFieldErrors = (state) => {
    const fieldMap = {
      name: 'nameError',
      comment: 'commentError'
    }

    for (const key in state) {
      if (state[key].length <= 0) {
        setCommentState({
          [fieldMap[key]]: true,
        })
      } else {
        setCommentState({
          [fieldMap[key]]: false,
        })
      }
    }

  }

  const handleSubmit = () => {
    const { nameError, commentError } = commentState
  
    if (!nameError || !commentError) {
      dispatch(createComment(commentState))
      closeCommentModal(false)
    } 
  }

  return (
    <Modal id='comments_modal' toggle={messageToggle} setToggle={closeCommentModal}>
      <Modal.Header>New Comment</Modal.Header>
      <Modal.Body>
        <Input
          placeholder='Enter your name'
          label='Name:'
          domID='name'
          name='name'
          textColor='black'
          hasError={commentState.nameError}
          errorMessage='Name field can not be submitted when empty'
          onChange={handleCommentChange}
        />
        <TextArea
          label='Enter your comment:'
          name='comment'
          domID='comment'
          hasError={commentState.commentError}
          errorMessage='Comment field can not be submitted when empty'
          onChange={handleCommentChange}
        />
      </Modal.Body>
      <Modal.Button id='comment_modal' name='Create comment' onClick={handleSubmit} />
    </Modal>
  )
}

CreateComment.propTypes = {
  setMessageToggle: PropTypes.func,
  messageToggle: PropTypes.bool
}
