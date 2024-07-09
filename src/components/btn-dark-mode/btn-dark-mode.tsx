import React from 'react'
import sun from './sun.svg'
import mun from './Moon.svg'
import './style.css'
import useLocalStorage from '../hooks/useLocalStorage'
import detectDarkMode from '../../utils/detect-dark-mode'

const BtnDarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  const toggleDarkMode = () => {
    setDarkMode((prev: string) => (prev === 'light' ? 'dark' : 'light'))
  }

  React.useEffect(() => {
    darkMode === 'dark'
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')
  }, [darkMode])

  React.useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e: MediaQueryListEvent) => {
        const colorScheme = e.matches ? 'dark' : 'light'
        setDarkMode(colorScheme)
      })
  }, [setDarkMode])

  const darkModeClasses =
    darkMode === 'dark' ? 'dark-mode-btn dark-mode-btn_active' : 'dark-mode-btn'
  return (
    <button onClick={toggleDarkMode} className={darkModeClasses}>
      <img className='dark-mode-btn__img' src={sun} alt='light mode' />
      <img className='dark-mode-btn__img' src={mun} alt='dark mode' />
    </button>
  )
}

export default BtnDarkMode
