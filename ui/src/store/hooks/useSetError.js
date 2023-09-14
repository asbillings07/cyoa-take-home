import { useState, useEffect, useRef } from 'react'

export const useEffectAfterMount = (cb, dep = []) => {
  const justMounted = useRef(true)

  useEffect(() => {
    if (!justMounted) {
      return cb()
    }
  }, [cb, ...dep])
}

export const useSetError = (initialValue = false, itemToCheck) => {
  const [error, setError] = useState(initialValue)

  useEffectAfterMount(() => {
    if (itemToCheck.length <= 0) {
      setError(true)
    } else {
      setError(false)
    }
  }, [itemToCheck])

  return [error]
}


