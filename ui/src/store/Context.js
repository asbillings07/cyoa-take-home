import PropTypes from 'prop-types'
import { useThunkReducer } from './hooks'
import {
  reducer,
  initialState,
  fetchComment,
  fetchComments,
  createComment,
  deleteComments
} from './reducers'
import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export function useContext() {
  const context = useContext(Context)
  if (!context) {
    throw new Error(
      `You can't use context state outside of a provider, check where you are using this hook.`
    )
  }

  return context
}

export function Provider({ children }) {
  const [state, dispatch] = useThunkReducer(reducer, initialState)
  const [isHidden, setIsHidden] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alert, setAlert] = useState({
    isOpen: false,
    message: '',
    alertType: 'info'
  })

  useEffect(() => {
    dispatch(fetchComments())
  }, [])

  useEffect(() => {
    if (state.error) {
      console.log(state.errorMessage)
      setAlert((prevState) => ({
        ...prevState,
        isOpen: true,
        message: state.errorMessage,
        alertType: 'warning'
      }))
    }
  }, [state.error, state.errorMessage])

  const value = {
    state,
    alert,
    setAlert,
    dispatch,
    fetchComment,
    createComment,
    deleteComments,
    isHidden,
    setIsHidden,
    isModalOpen,
    setIsModalOpen
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.any
}
