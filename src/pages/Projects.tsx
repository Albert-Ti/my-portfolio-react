import React from 'react'
import Project from '../components/project/project'
import { projectList } from '../utils/constants'

type ProgectsList = {
  name: string
  image: string
  skills?: string
  githubLink?: string
}

const Projects: React.FC = () => {
  return (
    <main className='content'>
      <div className='container'>
        <h2 className='content__title'>Projects</h2>
        <ul className='projects'>
          {projectList.map((item: ProgectsList, i: number) => (
            <Project key={i} {...item} id={i} />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Projects
