import React from 'react'
import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btn-github/btn-github'
import { projectList } from '../utils/constants'

const ProjectDetails = () => {
  const { id }: any = useParams()
  const { name, skills, image, githubLink } = projectList[id]
  return (
    <main className='content'>
      <div className='container'>
        <h1 className='content__title'>{name}</h1>
        <div className='project-details'>
          <img src={image} alt='project' className='project-details__image' />

          <div className='project-details__description'>
            <p>Skills: {skills}</p>
          </div>
          {githubLink && <BtnGitHub link={githubLink} />}
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails
