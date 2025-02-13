import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import BtnDarkMode from '../btn-dark-mode/btn-dark-mode'
import './style.css'

const Nav = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const activeClass = 'nav__link nav__link_active'
  const normalClass = 'nav__link'
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav__wrap'>
          <NavLink to='/' className='nav__logo'>
            <strong>
              Albert<span>Ti</span>
            </strong>{' '}
            Fullstack developer
          </NavLink>
          <BtnDarkMode />
          <ul className='nav__lists'>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
                to='/projects'
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
                to='/contacts'
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
