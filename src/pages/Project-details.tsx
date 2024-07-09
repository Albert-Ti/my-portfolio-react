import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/button/btn-github'
import { projectList } from '../utils/constants'
import gitHubIcon from '../image/icons/gitHub-black.svg'
import siteLinkIcon from '../image/icons/link-circle.svg'

const ProjectDetails = () => {
  const { id } = useParams()
  const { name, skills, image, githubLink, siteLink } =
    projectList[id ? +id : 0]
  return (
    <main className='content'>
      <div className='container'>
        <h1 className='content__title'>{name}</h1>
        <div className='project-details'>
          <img src={image} alt='project' className='project-details__image' />

          <div className='project-details__description'>
            <p>Skills: {skills}</p>
          </div>
          <div className='project-details__buttons'>
            {githubLink && (
              <Button icon={gitHubIcon} link={githubLink} text='GitHub' />
            )}
            {siteLink && (
              <Button icon={siteLinkIcon} link={siteLink} text='site link' />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails
