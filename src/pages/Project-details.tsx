import React from 'react'
import { useParams } from 'react-router-dom'
import LinkBtn from '../components/Link-btn/LinkBtn'
import gitHubIcon from '../assets/icons/gitHub-black.svg'
import siteLinkIcon from '../assets/icons/link-circle.svg'
import { projectList } from '../projectsData'

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projectList[id ? +id : 0]

  return (
    <main className='content'>
      <div className='container'>
        <h1 className='content__title'>{project.name}</h1>
        <div className='project-details'>
          <img
            src={project.image[0]}
            alt='project'
            className='project-details__image'
          />

          <div className='project-details__description'>
            <h4>Skills</h4>
            <p>
              {project.skills} {project.adaptive && ', Adaptive layout'}
            </p>
            <h4>Status</h4>
            <p>{project.status}</p>
          </div>

          <div className='project-details__buttons'>
            {project.githubLink && (
              <LinkBtn
                icon={gitHubIcon}
                link={project.githubLink}
                text='GitHub'
              />
            )}
            {project.siteLink && (
              <LinkBtn
                icon={siteLinkIcon}
                link={project.siteLink}
                text='Site'
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails
