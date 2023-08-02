import React from 'react'

const getLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key)

  return value || defaultValue
}

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = React.useState(() =>
    getLocalStorage(key, defaultValue)
  )

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}
