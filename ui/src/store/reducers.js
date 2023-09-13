import { requestApi } from './requestApi'

const ERROR = 'ERROR'
const GETCOMMENT = 'GETCOMMENT'
const CREATECOMMENT = 'CREATECOMMENT'
const DELETECOMMENTS = 'DELETECOMMENTS'
const GETALLCOMMENTS = 'GETALLCOMMENTS'
const LOADING = 'LOADING'
const TOGGLESUCCESS = 'TOGGLESUCCESS'

const routes = {
'GETCOMMENT': '/getComment',
'CREATECOMMENT': '/createComment',
'DELETECOMMENT': '/deleteComments',
'GETALLCOMMENTS': '/getComments'
}

export const initialState = {
  comment: null,
  comments: [],
  success: false,
  error: false,
  errorMessage: null,
  loading: true
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CREATECOMMENT:
      return {
        ...state,
        success: true,
        loading: false
      }
    case GETCOMMENT:
      return {
        ...state,
        comment: action.payload.comment,
        loading: false
      }
    case GETALLCOMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false
      }
    case DELETECOMMENTS:
      return {
        ...state,
        success: true,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case TOGGLESUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}

const errorMessage = 'ooops, looks like an error happened!'

// export const fetchAgents = () => async (dispatch) => {
//   dispatch({ type: LOADING })
//   try {
//     const res = await requestApi('/agents')
//     dispatch({ type: GETAGENTS, payload: { agents: res.data } })
//   } catch (err) {
//     dispatch({ type: ERROR, payload: { error: errorMessage } })
//   }
// }

// export const fetchCustomers = () => async (dispatch) => {
//   dispatch({ type: LOADING })
//   try {
//     const res = await requestApi('/customers')
//     dispatch({ type: GETCUSTOMERS, payload: { customers: res.data } })
//   } catch (err) {
//     dispatch({ type: ERROR, payload: { error: errorMessage } })
//   }
// }

export const fetchComments = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(routes.GETALLCOMMENTS)
    dispatch({ type: GETALLCOMMENTS, payload: { comments: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

export const fetchComment = (id) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(routes.GETCOMMENT)
    dispatch({ type: GETCOMMENT, payload: { comment: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

// @Object { agentId, content }
export const createComment = (id, note) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(routes.CREATECOMMENT, 'POST', note)
    dispatch({ type: CREATECOMMENT, payload: { comment: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(fetchComments(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

// export const editComment = (id, note) => async (dispatch) => {
//   dispatch({ type: LOADING })
//   try {
//     const res = await requestApi(`/interactions/${id}/notes`, 'PUT', note)
//     dispatch({ type: EDITCOMMENT, payload: { message: res.data } })
//     dispatch({ type: TOGGLESUCCESS, payload: false })
//     dispatch(getInteraction(id)(dispatch))
//   } catch (err) {
//     dispatch({ type: ERROR, payload: { error: errorMessage } })
//   }
// }

export const deleteComments = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(routes.DELETECOMMENT, 'DELETE')
    dispatch({ type: DELETECOMMENT, payload: { message: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(fetchComments(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}
// @Object { content, type: {'customer_message' || 'agent_message'}, agentId }
// export const createMessage = (id, message) => async (dispatch) => {
//   dispatch({ type: LOADING })
//   try {
//     const res = await requestApi(`/interactions/${id}/messages`, 'POST', message)
//     dispatch({ type: CREATENEWMESSAGE, payload: { message: res.data } })
//     dispatch({ type: TOGGLESUCCESS, payload: false })
//     dispatch(getInteraction(id)(dispatch))
//   } catch (err) {
//     dispatch({ type: ERROR, payload: { error: errorMessage } })
//   }
// }
