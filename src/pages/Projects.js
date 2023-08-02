import React from 'react'
import Project from '../components/project/project'
import { projectList } from '../utils/constants'

const Projects = () => {
  return (
    <main className='content'>
      <div className='container'>
        <h2 className='content__title'>Projects</h2>
        <ul className='projects'>
          {projectList.map((item, i) => (
            <Project key={i} {...item} id={i} />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Projects
