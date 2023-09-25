import React from 'react'

const getLocalStorage = (key: string, defaultValue: string): string => {
  const value = localStorage.getItem(key)

  return value || defaultValue
}

export default function useLocalStorage(
  key: string,
  defaultValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [value, setValue] = React.useState<string>(() =>
    getLocalStorage(key, defaultValue)
  )

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}
