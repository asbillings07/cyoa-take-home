import { requestApi } from './requestApi'

const ERROR = 'ERROR'
const GETCOMMENTS = 'GETCOMMENTS'
const CREATENEWCOMMENT = 'CREATENEWCOMMENT'
const DELETECOMMENT = 'DELETECOMMENT'
const GETALLCOMMENTS = 'GETALLCOMMENTS'
const LOADING = 'LOADING'
const TOGGLESUCCESS = 'TOGGLESUCCESS'

export const initialState = {
  customers: [],
  agents: [],
  interactions: [],
  interaction: null,
  notes: [],
  messages: [],
  success: false,
  error: false,
  errorMessage: null,
  loading: true
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CREATENEWCOMMENT:
      return {
        ...state,
        success: true,
        loading: false
      }
    case GETCOMMENTS:
      return {
        ...state,
        customers: action.payload.customers,
        loading: false
      }
    case GETALLCOMMENTS:
      return {
        ...state,
        interaction: action.payload.interaction,
        loading: false
      }
    case DELETECOMMENT:
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

export const fetchAgents = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi('/agents')
    dispatch({ type: GETAGENTS, payload: { agents: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

export const fetchCustomers = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi('/customers')
    dispatch({ type: GETCUSTOMERS, payload: { customers: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}
export const fetchInteractions = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi('/interactions')
    dispatch({ type: GETINTERACTIONS, payload: { interactions: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}
export const getInteraction = (id) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(`/interactions/${id}`)
    dispatch({ type: GETINTERACTION, payload: { interaction: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

// @Object { agentId, content }
export const createNote = (id, note) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(`/interactions/${id}/notes`, 'POST', note)
    dispatch({ type: CREATENEWNOTE, payload: { message: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(getInteraction(id)(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}
export const editNote = (id, note) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(`/interactions/${id}/notes`, 'PUT', note)
    dispatch({ type: EDITNOTE, payload: { message: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(getInteraction(id)(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

export const deleteNote = (intId, noteId) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(`/interactions/${intId}/notes`, 'DELETE', noteId)
    dispatch({ type: DELETENOTE, payload: { message: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(getInteraction(intId)(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}
// @Object { content, type: {'customer_message' || 'agent_message'}, agentId }
export const createMessage = (id, message) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await requestApi(`/interactions/${id}/messages`, 'POST', message)
    dispatch({ type: CREATENEWMESSAGE, payload: { message: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(getInteraction(id)(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}
