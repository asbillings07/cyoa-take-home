import PropTypes from 'prop-types'
import { Children, useState } from 'react'
import { Comment } from './Comment'
import { CreateComment } from './CreateComment'
import { ComponentContainer } from '../../components'
import { useAppContext } from '../../store'
import { Button } from '../../components'

export function Comments({ hidden }) {
  const { state } = useAppContext()
  const [toggleModal, setToggleModal] = useState(false)

  const comments = Children.toArray(state.comments.map((comment, id) => (
    <Comment comment={{...comment, cardId: id + 1 }}/>
  )))

  const emptyCommentDiv = <div style={{alignSelf: 'center'}}>"Hmmmmm.... There's no comments here. Go ahead and add one 😃"</div>

  return (
    <>
      <ComponentContainer hidden={hidden} id='comment_container' flexGrow={1} title='Comments'>
        {comments.length ? comments : emptyCommentDiv }
        <Button id='create_new_comment' alignSelf='center' width='25%' type='button' size='medium' name="Create new comment" onClick={() => setToggleModal(true)} />
      </ComponentContainer>
      <CreateComment messageToggle={toggleModal} setMessageToggle={setToggleModal}/>
    </>
  )
}

Comments.propTypes = {
  hidden: PropTypes.bool
}
