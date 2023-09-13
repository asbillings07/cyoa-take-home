import React from 'react'
import { Comments } from './Comments/Comments'
import { MainContainer } from '../components'
import { useAppContext } from '../store'
import { LoadingIndicator, AlertMessage } from '../components'
import { Interaction } from './Interactions/Interaction'

export function MainView() {
  const { loading, alert, setAlert } = useAppContext()
  return (
    <MainContainer>
      <AlertMessage
        isOpen={alert.isOpen}
        message={alert.message}
        alertType={alert.alertType}
        onClose={() => setAlert((prevState) => ({ ...prevState, isOpen: false }))}
      />
      <LoadingIndicator isOpen={loading} />
      <Interaction />
      <Comments />
    </MainContainer>
  )
}
