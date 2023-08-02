import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Project = ({ name, image, id }) => {
  return (
    <li className='project'>
      <NavLink to={`/project-details/${id}`}>
        <img src={image} alt='project-burger' />
        <h3 className='project__title'>{name}</h3>
      </NavLink>
    </li>
  )
}

export default Project
