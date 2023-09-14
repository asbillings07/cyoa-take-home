import React from 'react'
import { Comments } from './Comments'
import { MainContainer } from '../components'
import { useAppContext } from '../store'
import { LoadingIndicator, AlertMessage } from '../components'

export function MainView() {
  const { state, alert, setAlert, isHidden } = useAppContext()
  return (
    <MainContainer commentsHidden={isHidden}>
      <AlertMessage
        isOpen={alert.isOpen}
        message={alert.message}
        alertType={alert.alertType}
        onClose={() => setAlert((prevState) => ({ ...prevState, isOpen: false }))}
      />
      <LoadingIndicator isOpen={state.loading} />
      <Comments hidden={isHidden} />
    </MainContainer>
  )
}
